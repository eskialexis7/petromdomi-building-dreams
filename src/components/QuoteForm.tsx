import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Ελάχιστο 2 χαρακτήρες").max(80),
  phone: z.string().trim().min(10, "Έγκυρο τηλέφωνο").max(20),
  email: z.string().trim().email("Μη έγκυρο email").max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Επίλεξε υπηρεσία"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Νέα κατοικία",
  "Πλήρης ανακαίνιση",
  "Μερική ανακαίνιση",
  "Μονώσεις",
  "Σοβάδες & χτίσιμο",
  "Άλλο",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    const list = JSON.parse(localStorage.getItem("petrodomi_quotes") || "[]");
    list.push({ ...data, ts: Date.now() });
    localStorage.setItem("petrodomi_quotes", JSON.stringify(list));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
        <h3 className="mt-4 font-display text-2xl">Ευχαριστούμε!</h3>
        <p className="mt-2 text-muted-foreground">
          Λάβαμε το αίτημά σας. Θα σας καλέσουμε εντός 24 ωρών για την προσφορά.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Ονοματεπώνυμο *</label>
          <input
            {...register("name")}
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            placeholder="π.χ. Γιώργος Παπαδόπουλος"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Τηλέφωνο *</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            placeholder="69XXXXXXXX"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          placeholder="email@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Τύπος έργου *</label>
        <select
          {...register("service")}
          className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          defaultValue=""
        >
          <option value="" disabled>Επιλέξτε...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Περιγραφή έργου</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          placeholder="Πείτε μας λίγα λόγια για το έργο σας..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-stone-deep px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
      >
        {isSubmitting ? "Αποστολή..." : "Στείλε αίτημα προσφοράς"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Θα σας καλέσουμε εντός 24 ωρών. Δωρεάν εκτίμηση.
      </p>
    </form>
  );
}
