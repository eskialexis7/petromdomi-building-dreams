import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-stone-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="font-display text-2xl font-bold">
            PETRO<span className="text-accent">DOMI</span>
          </h3>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Κατασκευές & ανακαινίσεις με μεράκι. Πάνω από 25 χρόνια εμπειρίας στην οικοδομή.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Πλοήγηση</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Αρχική</Link></li>
            <li><Link to="/services" className="hover:text-accent">Υπηρεσίες</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Έργα</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Επικοινωνία</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Επικοινωνία</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +30 210 000 0000</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> info@petrodomi.gr</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> Αθήνα, Ελλάδα</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} PETRODOMI. Όλα τα δικαιώματα κατοχυρωμένα.
      </div>
    </footer>
  );
}
