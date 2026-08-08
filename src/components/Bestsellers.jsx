import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Plus, Clock } from "lucide-react";
import chocolate from "../assets/cake-chocolate.jpg";
import butterscotch from "../assets/cake-butterscotch.jpg";
import fruit from "../assets/cake-fruit.jpg";
import vanilla from "../assets/cake-vanilla.jpg";
import redvelvet from "../assets/cake-redvelvet.jpg";
import blueberry from "../assets/cake-blueberry.jpg";
import { useCart, formatINR } from "../context/CartContext";

const cakes = [
  { id: "choco-truffle", name: "Rich Chocolate Truffle Cake", price: 999, rating: "4.8", reviews: "1.2k", img: chocolate, tags: ["Chocolate", "Truffle"] },
  { id: "fruit-almond", name: "Tropical Fruit Almond Cake", price: 1099, rating: "4.6", reviews: "850", img: fruit, tags: ["Fruit Cakes"] },
  { id: "butterscotch-crunch", name: "Butterscotch Crunch Cake", price: 899, rating: "4.8", reviews: "760", img: butterscotch, tags: ["Butterscotch"] },
  { id: "vanilla-bean", name: "Classic Vanilla Bean Cake", price: 849, rating: "4.7", reviews: "1.1k", img: vanilla, tags: ["Vanilla"] },
  { id: "red-velvet", name: "Red Velvet Cream Cheese Cake", price: 1149, rating: "4.9", reviews: "2.3k", img: redvelvet, tags: ["Red Velvet"] },
  { id: "blueberry-cheesecake", name: "Blueberry Cheesecake", price: 1249, rating: "4.7", reviews: "640", img: blueberry, tags: ["Fruit Cakes", "Cheesecake"] },
  { id: "dark-choco-truffle", name: "Dark Chocolate Ganache Truffle", price: 1299, rating: "4.9", reviews: "980", img: chocolate, tags: ["Chocolate", "Truffle"] },
  { id: "vanilla-berry", name: "Vanilla Berry Delight Cake", price: 949, rating: "4.5", reviews: "420", img: vanilla, tags: ["Vanilla", "Fruit Cakes"] },
  { id: "butterscotch-caramel", name: "Salted Caramel Butterscotch", price: 1049, rating: "4.6", reviews: "530", img: butterscotch, tags: ["Butterscotch", "Truffle"] },
];

const filters = [
  "All Cakes",
  "Chocolate",
  "Vanilla",
  "Red Velvet",
  "Fruit Cakes",
  "Butterscotch",
  "Truffle",
  "Cheesecake",
];

export default function Bestsellers() {
  const [active, setActive] = useState("All Cakes");
  const { addItem } = useCart();

  const visible = active === "All Cakes" ? cakes : cakes.filter((c) => c.tags.includes(active));

  return (
    <section id="cakes" className="px-5 py-14 md:px-10 md:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="flex items-center gap-3 font-display text-2xl font-black sm:text-3xl">
          Bestselling <span className="text-primary">Cakes</span>
        </h2>
        <div className="-mx-5 flex w-screen gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:px-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                active === f
                  ? "gradient-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">No cakes in this category yet.</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visible.map((c) => (
            <Link
              key={c.id}
              to={`/cake/${c.id}`}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={768}
                height={768}
                className="h-48 w-full object-cover sm:h-56"
              />
              <div className="space-y-3 p-4 sm:p-5">
                <h3 className="font-display text-base font-bold leading-tight sm:text-lg">{c.name}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                  <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-gold text-gold" />
                  {c.rating} <span className="opacity-60">({c.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-black text-primary sm:text-xl">
                    {formatINR(c.price)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem({ id: c.id, name: c.name, price: c.price, img: c.img });
                    }}
                    className="flex items-center gap-1 rounded-full gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground sm:px-4"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add
                  </button>
                </div>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> 2–3 hrs delivery
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
