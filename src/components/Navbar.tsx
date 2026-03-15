import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MedNotes Logo" className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-bold text-foreground">Modular MBBS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
          <a href="https://expo.dev/artifacts/eas/2ud2sSUQfnou92yoHyFJ6z.apk" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gradient-primary border-0 gap-2 glow-teal">
              <Download className="h-4 w-4" /> Download App
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 space-y-2">
          <a href="#features" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">How It Works</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">Contact</a>
          <a href="https://expo.dev/artifacts/eas/2ud2sSUQfnou92yoHyFJ6z.apk" target="_blank" rel="noopener noreferrer" className="block">
            <Button size="sm" className="w-full gradient-primary border-0 gap-2 glow-teal">
              <Download className="h-4 w-4" /> Download App
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
