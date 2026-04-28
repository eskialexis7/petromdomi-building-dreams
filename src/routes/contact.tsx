import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Επικοινωνία & Δωρεάν Προσφορά — PETRODOMI";
  }, []);
  return (
    <div>
      <SiteHeader />

      <section className="relative bg-stone-deep pt-40 pb-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Επικοινωνία</span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Πάρτε <em className="text-accent">δωρεάν</em> προσφορά.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
            Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών για να συζητήσουμε το έργο σας.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold">Φόρμα προσφοράς</h2>
              <p className="mt-2 text-muted-foreground">Απαντάμε σε κάθε αίτημα προσωπικά.</p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Τηλέφωνο", value: "+30 210 000 0000" },
                { icon: Mail, label: "Email", value: "info@petrodomi.gr" },
                { icon: MapPin, label: "Έδρα", value: "Αθήνα, Ελλάδα" },
                { icon: Clock, label: "Ωράριο", value: "Δευ–Σαβ: 08:00 – 18:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-deep text-accent">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-1 font-medium text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-stone-deep p-6 text-primary-foreground">
                <h3 className="font-display text-xl font-semibold text-accent">Δωρεάν εκτίμηση</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Επισκεπτόμαστε τον χώρο σας χωρίς καμία υποχρέωση και σας δίνουμε αναλυτική προσφορά.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
