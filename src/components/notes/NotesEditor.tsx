
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Save } from "lucide-react";

interface NotesEditorProps {
  initialContent?: string;
  onSave?: (content: string) => void;
}

const NotesEditor: React.FC<NotesEditorProps> = ({
  initialContent = "",
  onSave,
}) => {
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    if (initialContent && !content) {
      setContent(initialContent);
    }
  }, [initialContent, content]);

  const handleSave = () => {
    if (!onSave) return;
    
    setIsSaving(true);
    onSave(content);
    
    setTimeout(() => {
      setIsSaving(false);
      setLastSaved(new Date());
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="rounded-xl overflow-hidden card-shadow animate-appear h-full flex flex-col">
      <div className="bg-card p-4 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-medium">Notes</h2>
        
        <div className="flex items-center gap-3">
          {lastSaved && (
            <span className="text-xs text-muted-foreground">
              Last saved {lastSaved.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
          
          <Button 
            onClick={handleSave} 
            size="sm"
            disabled={isSaving}
            className={cn(
              "transition-all",
              isSaving && "opacity-50"
            )}
          >
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
      
      <div className="bg-card flex-1 p-0">
        <textarea
          value={content}
          onChange={handleChange}
          placeholder="Start writing your notes here..."
          className="w-full h-full min-h-[400px] p-6 bg-transparent resize-none focus:outline-none text-foreground"
        />
      </div>
    </div>
  );
};

export default NotesEditor;
