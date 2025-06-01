
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import Container from "@/components/ui/Container";
import NotesEditor from "@/components/notes/NotesEditor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Note {
  id: string;
  title: string;
  content: string;
  lastModified: Date;
}

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "Study Notes - Math",
      content: "Important formulas and concepts for the upcoming exam...",
      lastModified: new Date()
    }
  ]);
  
  const [selectedNote, setSelectedNote] = useState<Note | null>(notes[0] || null);
  const [searchTerm, setSearchTerm] = useState("");

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "New Note",
      content: "",
      lastModified: new Date()
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  const saveNote = (content: string) => {
    if (selectedNote) {
      const updatedNotes = notes.map(note => 
        note.id === selectedNote.id 
          ? { ...note, content, lastModified: new Date() }
          : note
      );
      setNotes(updatedNotes);
      setSelectedNote({ ...selectedNote, content, lastModified: new Date() });
    }
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Notes</h1>
            <p className="text-muted-foreground">
              Create and organize your study notes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Notes
                    </CardTitle>
                    <Button size="sm" onClick={createNewNote}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      placeholder="Search notes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {filteredNotes.map((note) => (
                      <button
                        key={note.id}
                        onClick={() => setSelectedNote(note)}
                        className={`w-full text-left p-3 hover:bg-secondary/50 transition-colors ${
                          selectedNote?.id === note.id ? 'bg-secondary' : ''
                        }`}
                      >
                        <h3 className="font-medium truncate">{note.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {note.content || "No content"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {note.lastModified.toLocaleDateString()}
                        </p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              {selectedNote ? (
                <NotesEditor
                  initialContent={selectedNote.content}
                  onSave={saveNote}
                />
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent>
                    <div className="text-center">
                      <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No note selected</h3>
                      <p className="text-muted-foreground">
                        Select a note from the sidebar or create a new one
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default NotesPage;
