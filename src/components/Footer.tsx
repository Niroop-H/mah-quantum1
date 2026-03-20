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
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="MAH Quantum" className="h-8 w-8 rounded-md object-cover" />
              <span className="font-display font-semibold text-sm text-foreground">MAH Quantum</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Building the infrastructure for intelligent systems.
            </p>
          </div>

          <div>
            <p className="mono-label mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label mb-4">Contact</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="tel:+917259382794" className="hover:text-foreground transition-colors">+91 7259382794</a>
              </li>
              <li>
                <a href="mailto:nirooph1@gmail.com" className="hover:text-foreground transition-colors">nirooph1@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="tech-divider mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground">© {new Date().getFullYear()} MAH Quantum. All rights reserved.</p>
          <p className="text-[11px] text-muted-foreground">Founded by Niroop H</p>
        </div>
      </div>
    </footer>
  );
}
