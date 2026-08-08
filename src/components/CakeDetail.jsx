import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Leaf, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { cakes, getCake } from "../data/cakes";
import { useCart, formatINR } from "../context/CartContext";

export default function CakeDetail() {
  const { id } = useParams(); // ✅ React Router way
  const cake = getCake(id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!cake) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="p-10 text-center text-red-500">Cake not found</div>
        <Footer />
      </main>
    );
  }

  const related = cakes
    .filter((c) => c.id !== cake.id && c.tags.some((t) => cake.tags.includes(t)))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="px-5 py-8 pt-24 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to cakes
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <img
            src={cake.img}
            alt={cake.name}
            width={768}
            height={768}
            className="aspect-square w-full rounded-3xl border border-border object-cover shadow-soft"
          />

          <div>
            <div className="flex flex-wrap gap-2">
              {cake.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <h1 className="mt-4 font-display text-3xl font-black md:text-4xl">{cake.name}</h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-gold text-gold" />
              {cake.rating} <span className="opacity-60">({cake.reviews} reviews)</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/80">{cake.description}</p>

            <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 2–3 hrs delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Leaf className="h-3.5 w-3.5" /> 100% natural ingredients
              </span>
              <span>Weight: {cake.weight}</span>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <h2 className="font-display text-lg font-bold">What's inside</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {cake.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="font-display text-3xl font-black text-primary">
                {formatINR(cake.price * qty)}
              </span>
              <div className="flex items-center gap-3 rounded-full border border-border px-3 py-2">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-7 w-7 place-items-center rounded-full border border-border hover:text-primary"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-7 w-7 place-items-center rounded-full border border-border hover:text-primary"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                onClick={() =>
                  addItem({ id: cake.id, name: cake.name, price: cake.price, img: cake.img }, qty)
                }
                className="flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
              >
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-black">You may also like</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.id}
                  to={`/cake/${c.id}`} // ✅ React Router way
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-card"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-44 w-full object-cover"
                  />
                  <div className="space-y-1 p-4">
                    <h3 className="font-display text-base font-bold leading-tight">{c.name}</h3>
                    <p className="font-display text-lg font-black text-primary">{formatINR(c.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
