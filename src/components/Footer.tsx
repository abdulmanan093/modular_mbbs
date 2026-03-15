import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-icon.png";

const Footer = () => (
  <footer id="contact" className="bg-navy text-navy-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Modular MBBS"
              className="h-10 w-10 object-contain logo-glow"
            />
            <span className="text-xl font-bold">Modular MBBS</span>
          </div>
          <p className="text-sm opacity-70">
            Your complete MBBS notes library. Access organized medical notes for
            every year, subject, and chapter.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <a
                href="#features"
                className="hover:opacity-100 transition-opacity"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:opacity-100 transition-opacity"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:opacity-100 transition-opacity"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-100 transition-opacity">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> abdul10761093174@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="https://wa.me/923106078374"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
                aria-label="WhatsApp contact +923106078374"
              >
                WhatsApp: +923106078374
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 mt-12 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Modular MBBS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
