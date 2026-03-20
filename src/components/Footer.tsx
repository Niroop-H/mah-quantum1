import { Link } from "react-router-dom";
import logo from "@/assets/mah-quantum-logo.jpeg";

const links = [
  { label: "Home", to: "/" },
  { label: "Architecture", to: "/architecture" },
  { label: "Industries", to: "/industries" },
  { label: "Labs", to: "/labs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="MAH Quantum" className="h-8 w-8 rounded-lg object-cover" />
              <span className="font-display font-bold text-lg gradient-text">MAH Quantum</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building the infrastructure for intelligent systems. Unified, adaptive AI for the real world.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+917259382794" className="hover:text-primary transition-colors">+91 7259382794</a>
              </li>
              <li>
                <a href="mailto:nirooph1@gmail.com" className="hover:text-primary transition-colors">nirooph1@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MAH Quantum. All rights reserved.</p>
          <p className="text-xs text-muted-foreground italic max-w-md text-center md:text-right">
            Founded by Niroop H
          </p>
        </div>
      </div>
    </footer>
  );
}
