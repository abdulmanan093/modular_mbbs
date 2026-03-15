import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, ChevronRight, Search, LogOut, FileText, Download,
  Clock, Bookmark, User, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { curriculum, type Year, type Block, type Subject, type Chapter } from "@/data/curriculum";
import logo from "@/assets/logo.png";

type View = "years" | "blocks" | "subjects" | "chapters" | "notes";

const Dashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<View>("years");
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const breadcrumbs = [
    { label: "Years", action: () => { setView("years"); setSelectedYear(null); } },
    ...(selectedYear ? [{ label: `Year ${selectedYear.id}`, action: () => { setView("blocks"); setSelectedBlock(null); } }] : []),
    ...(selectedBlock ? [{ label: selectedBlock.name, action: () => { setView("subjects"); setSelectedSubject(null); } }] : []),
    ...(selectedSubject ? [{ label: selectedSubject.name, action: () => { setView("chapters"); setSelectedChapter(null); } }] : []),
    ...(selectedChapter ? [{ label: selectedChapter.name, action: () => setView("notes") }] : []),
  ];

  // Search across all notes
  const searchResults = search.length > 1
    ? curriculum.flatMap(y => y.blocks.flatMap(b => b.subjects.flatMap(s => s.chapters.flatMap(c => c.notes.filter(n => n.title.toLowerCase().includes(search.toLowerCase())).map(n => ({ ...n, path: `Year ${y.id} → ${b.name} → ${s.name} → ${c.name}` }))))))
    : [];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg border-2 border-primary/30 shadow-md bg-background flex items-center justify-center p-0.5">
              <img src={logo} alt="MedNotes" className="h-full w-full object-contain" />
            </div>
            <span className="font-bold text-foreground">Modular MBBS</span>
          </Link>
          <button className="lg:hidden text-muted-foreground" onClick={() => setSidebarOpen(false)}><X className="h-5 w-5" /></button>
        </div>
        <nav className="p-4 space-y-1">
          <button onClick={() => { setView("years"); setSelectedYear(null); setSidebarOpen(false); }} className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium text-foreground bg-secondary">
            <BookOpen className="h-4 w-4" /> Browse Notes
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
            <Clock className="h-4 w-4" /> Recently Viewed
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
            <Bookmark className="h-4 w-4" /> Bookmarks
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors">
            <User className="h-4 w-4" /> Profile
          </button>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={() => navigate("/")}>
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3">
          <button className="lg:hidden text-foreground" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5" /></button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search notes..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
        </header>

        <div className="p-4 md:p-6">
          {/* Search results */}
          {search.length > 1 ? (
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">Search Results ({searchResults.length})</h2>
              {searchResults.length === 0 && <p className="text-muted-foreground text-sm">No notes found.</p>}
              {searchResults.map(n => (
                <div key={n.id} className="bg-card rounded-lg border border-border p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                  <div>
                    <div className="font-medium text-foreground text-sm flex items-center gap-2"><FileText className="h-4 w-4 text-primary" />{n.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{n.path}</div>
                  </div>
                  <Link to={`/notes/${n.id}`}><Button size="sm" variant="outline">Open</Button></Link>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-6 flex-wrap">
                {breadcrumbs.map((b, i) => (
                  <span key={i} className="flex items-center gap-1">
                    {i > 0 && <ChevronRight className="h-3 w-3" />}
                    <button onClick={b.action} className={`hover:text-primary transition-colors ${i === breadcrumbs.length - 1 ? "text-foreground font-medium" : ""}`}>{b.label}</button>
                  </span>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {view === "years" && (
                  <motion.div key="years" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {curriculum.map(y => (
                      <motion.button
                        key={y.id}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => { setSelectedYear(y); setView("blocks"); }}
                        className="bg-card rounded-xl border border-border p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
                      >
                        <div className="text-3xl font-extrabold gradient-text">{y.id}</div>
                        <div className="font-medium text-foreground mt-1">Year {y.id}</div>
                        <div className="text-xs text-muted-foreground mt-1">{y.label}</div>
                        <div className="text-xs text-muted-foreground mt-2">{y.blocks.length} Block{y.blocks.length > 1 ? "s" : ""}</div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {view === "blocks" && selectedYear && (
                  <motion.div key="blocks" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedYear.blocks.map(b => (
                      <motion.button
                        key={b.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => { setSelectedBlock(b); setView("subjects"); }}
                        className="bg-card rounded-xl border border-border p-6 text-left hover:border-primary/40 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-foreground">{b.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{b.subjects.length} Subject{b.subjects.length > 1 ? "s" : ""}</p>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {view === "subjects" && selectedBlock && (
                  <motion.div key="subjects" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedBlock.subjects.map(s => (
                      <motion.button
                        key={s.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => { setSelectedSubject(s); setView("chapters"); }}
                        className="bg-card rounded-xl border border-border p-6 text-left hover:border-primary/40 hover:shadow-lg transition-all"
                      >
                        <span className="text-2xl">{s.icon}</span>
                        <h3 className="font-semibold text-foreground mt-2">{s.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{s.chapters.length} Chapter{s.chapters.length > 1 ? "s" : ""}</p>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {view === "chapters" && selectedSubject && (
                  <motion.div key="chapters" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedSubject.chapters.map(c => (
                      <motion.button
                        key={c.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => { setSelectedChapter(c); setView("notes"); }}
                        className="bg-card rounded-xl border border-border p-6 text-left hover:border-primary/40 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-foreground">{c.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{c.notes.length} Note{c.notes.length > 1 ? "s" : ""}</p>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {view === "notes" && selectedChapter && (
                  <motion.div key="notes" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-3">
                    {selectedChapter.notes.map(n => (
                      <div key={n.id} className="bg-card rounded-xl border border-border p-5 flex items-center justify-between hover:border-primary/30 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{n.title}</div>
                            <div className="text-xs text-muted-foreground">{n.pages} pages • PDF</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary"><Bookmark className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary"><Download className="h-4 w-4" /></Button>
                          <Link to={`/notes/${n.id}`}><Button size="sm" className="gradient-primary border-0">Open</Button></Link>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
