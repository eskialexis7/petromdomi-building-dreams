import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ArrowRight } from "lucide-react";
import p1b from "@/assets/project1-before.jpg";
import p1a from "@/assets/project1-after.jpg";
import p2b from "@/assets/project2-before.jpg";
import p2a from "@/assets/project2-after.jpg";
import p3b from "@/assets/project3-before.jpg";
import p3a from "@/assets/project3-after.jpg";

const projects = [
  { before: p1b, after: p1a, title: "Πέτρινη Κατοικία", location: "Πελοπόννησος", desc: "Πλήρης αποκατάσταση παραδοσιακής κατοικίας, διατηρώντας τον αυθεντικό χαρακτήρα." },
  { before: p2b, after: p2a, title: "Ανακαίνιση Κουζίνας", location: "Αθήνα — Κηφισιά", desc: "Ολική ανανέωση με μάρμαρο, δρύινα ντουλάπια και χρυσές πινελιές." },
  { before: p3b, after: p3a, title: "Master Bathroom", location: "Αθήνα — Γλυφάδα", desc: "Από τα γυμνά τσιμέντα σε ένα spa-like κατάλυμα με μάρμαρο και brass." },
];

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Έργα Πριν & Μετά — PETRODOMI";
  }, []);
  return (
    <div>
      <SiteHeader />

      <section className="relative bg-stone-deep pt-40 pb-24 text-primary-foreground md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Portfolio</span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Πριν & <em className="text-accent">μετά</em>.<br />Πραγματικά έργα.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
            Σύρε στις φωτογραφίες για να δεις τη μεταμόρφωση κάθε χώρου που έχουμε ολοκληρώσει.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="space-y-24">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <BeforeAfter before={p.before} after={p.after} alt={p.title} />
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{p.location}</span>
                <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{p.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-stone-deep">
                  <span className="h-px w-12 bg-accent" /> Ολοκληρωμένο έργο
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:justify-between md:text-left md:px-10">
          <h2 className="max-w-2xl font-display text-3xl font-bold text-accent-foreground md:text-4xl">
            Φαντάζεστε τον χώρο σας έτσι; Ας τον κάνουμε πραγματικότητα.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-stone-deep px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105">
            Δωρεάν Προσφορά <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
