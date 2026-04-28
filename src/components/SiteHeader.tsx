import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Αρχική", end: true },
  { to: "/services", label: "Υπηρεσίες", end: false },
  { to: "/projects", label: "Έργα", end: false },
  { to: "/contact", label: "Επικοινωνία", end: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-primary-foreground drop-shadow">
            PETRO<span className="text-accent">DOMI</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${
                  isActive ? "text-accent" : "text-primary-foreground/90"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Πάρε Προσφορά
          </Link>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="text-primary-foreground md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mx-6 rounded-2xl bg-stone-deep/95 p-6 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-primary-foreground hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
