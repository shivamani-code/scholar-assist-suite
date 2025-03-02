
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import NotesEditor from "@/components/notes/NotesEditor";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { File, Plus, Folder, Search } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  lastUpdated: Date;
}

const sampleNotes: Note[] = [
  {
    id: "1",
    title: "Biology Notes",
    content: "# Biology 101\n\nCell structure and function:\n- Cell membrane\n- Cytoplasm\n- Nucleus\n\nPhotosynthesis process in detail...",
    lastUpdated: new Date(2023, 4, 15),
  },
  {
    id: "2",
    title: "History Essay Ideas",
    content: "# History Essay Topics\n\n1. Impact of Industrial Revolution\n2. World War II causes and effects\n3. Renaissance art and culture\n4. Civil Rights Movement\n5. Ancient civilizations comparison",
    lastUpdated: new Date(2023, 4, 10),
  },
  {
    id: "3",
    title: "Math Formulas",
    content: "# Important Math Formulas\n\n## Calculus\n- Derivative rules\n- Integration techniques\n- Limit definitions\n\n## Algebra\n- Quadratic formula\n- Logarithm properties\n- Matrix operations",
    lastUpdated: new Date(2023, 4, 5),
  },
];

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>(sampleNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNoteSelect = (note: Note) => {
    setSelectedNote(note);
  };

  const handleSaveNote = (content: string) => {
    if (selectedNote) {
      const updatedNote = {
        ...selectedNote,
        content,
        lastUpdated: new Date(),
      };

      setNotes(notes.map(note => 
        note.id === selectedNote.id ? updatedNote : note
      ));
      
      setSelectedNote(updatedNote);
    }
  };

  const filteredNotes = searchQuery 
    ? notes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : notes;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 py-8">
          <Container className="h-full">
            <div className="flex flex-col h-[calc(100vh-12rem)] md:flex-row gap-6">
              <div className="w-full md:w-64 flex-shrink-0 bg-card rounded-xl p-4 card-shadow overflow-hidden flex flex-col">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search notes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-secondary/50 border-none rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-medium text-muted-foreground">MY NOTES</h2>
                  <Button size="icon" variant="ghost" className="h-6 w-6">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-1 overflow-y-auto flex-1">
                  {filteredNotes.map((note) => (
                    <button
                      key={note.id}
                      className={`w-full text-left p-2 rounded-md transition-colors ${
                        selectedNote?.id === note.id
                          ? "bg-accent text-white"
                          : "hover:bg-secondary/70"
                      }`}
                      onClick={() => handleNoteSelect(note)}
                    >
                      <div className="flex items-center">
                        <File className={`h-4 w-4 mr-2 ${
                          selectedNote?.id === note.id ? "text-white" : "text-muted-foreground"
                        }`} />
                        <span className="text-sm truncate">{note.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="pt-4 mt-auto border-t border-border">
                  <Button variant="outline" size="sm" className="w-full">
                    <Folder className="h-4 w-4 mr-2" />
                    Create Folder
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 overflow-hidden">
                {selectedNote ? (
                  <NotesEditor 
                    initialContent={selectedNote.content} 
                    onSave={handleSaveNote}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-card rounded-xl card-shadow">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary mb-4">
                        <File className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">No Note Selected</h3>
                      <p className="text-muted-foreground mb-4">
                        Select a note from the sidebar or create a new one
                      </p>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Note
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default NotesPage;
