import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, Bookmark, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { curriculum } from "@/data/curriculum";
import { useState } from "react";

const NoteViewer = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Find note
  let noteData: { title: string; pages: number; chapter: string; subject: string } | null = null;
  for (const y of curriculum) {
    for (const b of y.blocks) {
      for (const s of b.subjects) {
        for (const c of s.chapters) {
          const found = c.notes.find(n => n.id === id);
          if (found) {
            noteData = { ...found, chapter: c.name, subject: s.name };
          }
        }
      }
    }
  }

  if (!noteData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground">Note not found</h2>
          <Link to="/dashboard"><Button className="mt-4">Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
          </Link>
          <div>
            <h1 className="font-semibold text-foreground text-sm">{noteData.title}</h1>
            <p className="text-xs text-muted-foreground">{noteData.subject} → {noteData.chapter}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"><Bookmark className="h-4 w-4" /></Button>
          <Button variant="outline" size="sm" className="gap-1"><Download className="h-4 w-4" /> Download</Button>
        </div>
      </header>

      {/* PDF Viewer placeholder */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-card rounded-xl border border-border shadow-sm w-full max-w-3xl aspect-[3/4] flex flex-col items-center justify-center text-muted-foreground">
          <FileText className="h-16 w-16 mb-4 text-primary/30" />
          <p className="font-medium text-foreground">{noteData.title}</p>
          <p className="text-sm mt-1">Page {currentPage} of {noteData.pages}</p>
          <p className="text-xs mt-4 max-w-xs text-center">PDF viewer will display here when connected to the backend with actual PDF files.</p>
        </div>
      </div>

      {/* Page navigation */}
      <div className="bg-card border-t border-border px-4 py-3 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" disabled={currentPage <= 1} onClick={() => setCurrentPage(p => p - 1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium text-foreground">Page {currentPage} / {noteData.pages}</span>
        <Button variant="outline" size="icon" disabled={currentPage >= noteData.pages} onClick={() => setCurrentPage(p => p + 1)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default NoteViewer;
