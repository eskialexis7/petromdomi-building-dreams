import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, HardHat, Ruler, Shield, Award, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BeforeAfter } from "@/components/BeforeAfter";
import heroImg from "@/assets/hero-construction.jpg";
import p1b from "@/assets/project1-before.jpg";
import p1a from "@/assets/project1-after.jpg";
import p2b from "@/assets/project2-before.jpg";
import p2a from "@/assets/project2-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PETRODOMI — Εργολαβικές Κατασκευές & Ανακαινίσεις" },
      { name: "description", content: "Κατασκευές κατοικιών, ανακαινίσεις, μονώσεις. 25+ χρόνια εμπειρίας. Δωρεάν προσφορά." },
      { property: "og:title", content: "PETRODOMI — Εργολαβικές Κατασκευές" },
      { property: "og:description", content: "Χτίζουμε με μεράκι. Δωρεάν προσφορά για το έργο σας." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: HardHat, title: "Νέες Κατασκευές", desc: "Από τα θεμέλια μέχρι το κλειδί στο χέρι." },
  { icon: Hammer, title: "Ανακαινίσεις", desc: "Δίνουμε νέα ζωή στον χώρο σας." },
  { icon: Ruler, title: "Μελέτες & Σχεδιασμός", desc: "Συνεργασία με αρχιτέκτονες & μηχανικούς." },
];

const stats = [
  { num: "25+", label: "Χρόνια εμπειρίας" },
  { num: "180+", label: "Ολοκληρωμένα έργα" },
  { num: "100%", label: "Ικανοποίηση πελατών" },
];

function HomePage() {
  return (
    <div>
      <SiteHeader />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Κατασκευή πέτρινης κατοικίας" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur">
              Από το 1999
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl">
              Χτίζουμε με <span className="italic text-accent">μεράκι</span>,
              <br />
              πέτρα και χρόνο.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              Εργολαβικές κατασκευές & ανακαινίσεις από επαγγελματίες με δεκαετίες εμπειρίας. Παραδίδουμε ποιότητα που αντέχει στον χρόνο.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                Δωρεάν Προσφορά
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
              >
                Δες τα Έργα μας
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center md:px-10">
              <div className="font-display text-5xl font-bold text-stone-deep md:text-6xl">{s.num}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Τι κάνουμε</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Κάθε έργο, μια <em className="text-accent">ιστορία</em> που χτίζεται προσεκτικά.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Από τη μικρή ανακαίνιση κουζίνας μέχρι την ανέγερση μεζονέτας με το κλειδί στο χέρι — αναλαμβάνουμε κάθε στάδιο με υπευθυνότητα και ξεκάθαρο κόστος.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-stone-deep text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-stone-deep hover:text-accent">
            Όλες οι υπηρεσίες <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-stone-deep py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Γιατί εμάς</span>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-5xl">
            Αξιοπιστία που χτίζεται γενιά τη γενιά.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { icon: Shield, title: "Εγγύηση κατασκευής", desc: "Γραπτή εγγύηση σε κάθε έργο. Στεκόμαστε πίσω από τη δουλειά μας." },
              { icon: Award, title: "Πιστοποιημένα υλικά", desc: "Συνεργαζόμαστε μόνο με κορυφαίους προμηθευτές." },
              { icon: Clock, title: "Στην ώρα μας", desc: "Σεβόμαστε τις προθεσμίες και τον προϋπολογισμό σας." },
            ].map((f) => (
              <div key={f.title} className="border-l-2 border-accent pl-6">
                <f.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-primary-foreground/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Έργα Πριν & Μετά</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Η μεταμόρφωση μιλάει μόνη της</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Σύρε το χέρι σου για να δεις τη διαφορά πριν και μετά την επέμβασή μας.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <BeforeAfter before={p1b} after={p1a} alt="Πέτρινη κατοικία" />
          <BeforeAfter before={p2b} after={p2a} alt="Ανακαίνιση κουζίνας" />
        </div>
        <div className="mt-12 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-stone-deep px-8 py-4 text-sm font-semibold uppercase tracking-wider text-stone-deep transition-colors hover:bg-stone-deep hover:text-primary-foreground">
            Δες όλα τα έργα <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:justify-between md:text-left md:px-10">
          <div>
            <h2 className="font-display text-4xl font-bold text-accent-foreground md:text-5xl">
              Έτοιμοι να ξεκινήσετε;
            </h2>
            <p className="mt-3 text-accent-foreground/80">Πείτε μας για το έργο σας — σας απαντάμε εντός 24 ωρών.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-deep px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
          >
            Πάρε Προσφορά <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
