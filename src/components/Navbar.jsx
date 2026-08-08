import { useState } from "react";
import { Search, ShoppingBag, Menu, Cake, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const links = ["Home", "Cakes", "Occasions", "Custom Builder", "Contact", "Cart"];

const hrefFor = (l) => {
  if (l === "Home") return "/";
  if (l === "Cart") return "/cart";
  return `#${l.toLowerCase().replace(/\s+/g, "-")}`;
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const navigate = useNavigate();

  return (
    // <header className="relative flex items-center justify-between gap-4 px-5 py-4 md:px-10 md:py-5">
     <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 
                   bg-white px-5 py-4 shadow-md md:px-10 md:py-5">
     <a href="/" className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-primary text-primary-foreground">
          <Cake className="h-5 w-5" />
        </span>
        <span className="leading-none">
          <span className="block font-display text-lg font-black tracking-tight">Cakes</span>
          <span className="block font-script text-xl text-primary">bakery.</span>
        </span>
      </a>

      <nav className="hidden items-center gap-8 lg:flex">
        {links.map((l, i) => (
          <a
            key={l}
            href={hrefFor(l)}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              i === 0 ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {l}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 sm:gap-4">
        <button aria-label="Search" className="text-foreground/70 transition-colors hover:text-primary">
          <Search className="h-5 w-5" />
        </button>
        <button
          aria-label="Cart"
          onClick={() => navigate("/cart")}
          className="relative text-foreground/70 transition-colors hover:text-primary"
        >
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-foreground">
              {count}
            </span>
          )}
        </button>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground/70 transition-colors hover:text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="absolute left-4 right-4 top-full z-50 rounded-3xl border border-border bg-card p-3 shadow-card lg:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={hrefFor(l)}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
