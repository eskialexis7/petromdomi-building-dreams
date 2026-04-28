import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HardHat, Hammer, Ruler, Shield, Paintbrush, Wrench, Layers, Home, ArrowRight } from "lucide-react";

const services = [
  { icon: HardHat, title: "Νέες Κατασκευές", desc: "Πλήρης ανέγερση κατοικιών και επαγγελματικών χώρων με το κλειδί στο χέρι, από εκσκαφή μέχρι παράδοση." },
  { icon: Hammer, title: "Πλήρεις Ανακαινίσεις", desc: "Ολική ανακαίνιση διαμερισμάτων και κατοικιών — από τις γραμμές μέχρι το χρώμα." },
  { icon: Home, title: "Μερικές Ανακαινίσεις", desc: "Κουζίνες, μπάνια, υπνοδωμάτια. Στοχευμένες παρεμβάσεις με μέγιστη ποιότητα." },
  { icon: Layers, title: "Μονώσεις", desc: "Θερμομονώσεις, υγρομονώσεις ταρατσών, ηχομονώσεις. Εξοικονόμηση ενέργειας." },
  { icon: Paintbrush, title: "Σοβάδες & Χτίσιμο", desc: "Παραδοσιακοί και έτοιμοι σοβάδες, λιθοδομές, διακοσμητικές πέτρες." },
  { icon: Wrench, title: "Υδραυλικά & Ηλεκτρικά", desc: "Πλήρης εγκατάσταση δικτύων με πιστοποιημένους συνεργάτες." },
  { icon: Ruler, title: "Μελέτες & Άδειες", desc: "Συνεργασία με μηχανικούς για άδειες, μελέτες και τοπογραφικά." },
  { icon: Shield, title: "Συντήρηση Ακινήτων", desc: "Συντήρηση και επισκευές για διαρκή ασφάλεια του ακινήτου σας." },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Υπηρεσίες — PETRODOMI";
  }, []);
  return (
    <div>
      <SiteHeader />
      <section className="relative bg-stone-deep pt-40 pb-24 text-primary-foreground md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Υπηρεσίες</span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Όλα όσα χρειάζεστε, <em className="text-accent">υπό μία στέγη</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
            Συντονίζουμε κάθε φάση του έργου σας — από τη μελέτη μέχρι την παράδοση — για να μην χρειαστεί να ψάξετε πουθενά αλλού.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-stone-deep transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Δεν βρίσκετε αυτό που ψάχνετε;</h2>
          <p className="mt-4 text-muted-foreground">Επικοινωνήστε μαζί μας — αναλαμβάνουμε εξειδικευμένα έργα κατά παραγγελία.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-deep px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            Επικοινωνία <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
