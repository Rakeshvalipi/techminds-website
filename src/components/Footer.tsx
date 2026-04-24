import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="TechMindsIt" className="h-8 rounded-lg" />
              <span className="font-bold text-foreground">
                Tech<span className="text-primary">MindsIt</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming ideas into powerful digital solutions. Your trusted IT partner in Nellore, Andhra Pradesh.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button key={i} className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Careers & Internships", path: "/careers" },
                { label: "Contact", path: "/contact" },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Web Development", id: 1 },
                { label: "App Development", id: 2 },
                { label: "Digital Marketing", id: 3 },
                { label: "CRM Products", id: 4 },
              ].map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>📧 info@techmindsit.com</li>
              <li>📞 +91 9710499993</li>
              <li>📍 Srinivasa Agraharam, Nellore, AP 524001</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 TechMindsIt Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
