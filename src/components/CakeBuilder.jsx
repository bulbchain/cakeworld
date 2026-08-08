import { useState } from "react";
import {
  Check,
  Cake,
  Heart,
  Baby,
  Gem,
  Briefcase,
  PartyPopper,
  Type,
  Image as ImageIcon,
  StickyNote,
  Flame,
  Gift,
  Leaf,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import chocolateImg from "../assets/cake-chocolate.jpg";
import butterscotchImg from "../assets/cake-butterscotch.jpg";
import fruitImg from "../assets/cake-fruit.jpg";
import vanillaImg from "../assets/hero-cake-3.jpg";
import redVelvetImg from "../assets/cat-classic.jpg";
import blackForestImg from "../assets/cat-gourmet.jpg";
import sizeImg from "../assets/hero-cake-2.jpg";

const sizes = [
  { label: "500g", note: "Serves 2–4", price: 599, scale: "h-8 w-8" },
  { label: "1kg", note: "Serves 4–6", price: 999, scale: "h-10 w-10" },
  { label: "2kg", note: "Serves 8–10", price: 1799, scale: "h-12 w-12" },
  { label: "3kg", note: "Serves 12–15", price: 2599, scale: "h-14 w-14" },
];

const flavors = [
  { label: "Chocolate", price: 0, img: chocolateImg },
  { label: "Vanilla", price: 0, img: vanillaImg },
  { label: "Red Velvet", price: 150, img: redVelvetImg },
  { label: "Butterscotch", price: 100, img: butterscotchImg },
  { label: "Fruit", price: 120, img: fruitImg },
  { label: "Black Forest", price: 150, img: blackForestImg },
];

const themes = [
  { label: "Birthday", Icon: Cake },
  { label: "Anniversary", Icon: Heart },
  { label: "Kids", Icon: PartyPopper },
  { label: "Wedding", Icon: Gem },
  { label: "Corporate", Icon: Briefcase },
  { label: "Baby Shower", Icon: Baby },
];

const addOns = [
  { label: "Name on Cake", price: 49, Icon: Type },
  { label: "Photo Cake Upload", price: 249, Icon: ImageIcon },
  { label: "Message Card", price: 39, Icon: StickyNote },
  { label: "Candle Add-on", price: 79, Icon: Flame },
  { label: "Gift Wrap", price: 99, Icon: Gift },
  { label: "Eggless Option", price: 60, Icon: Leaf },
];

const steps = [
  { n: 1, title: "Choose Cake Size", sub: "Select the perfect size" },
  { n: 2, title: "Choose Flavor", sub: "Pick your favorite flavor" },
  { n: 3, title: "Choose Theme", sub: "Pick a theme for your celebration" },
  { n: 4, title: "Add Personalization", sub: "Make it extra special" },
];

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center gap-1.5 rounded-2xl border px-2 py-3 text-center text-[11px] font-medium transition-all ${
        active
          ? "border-primary bg-accent text-secondary-foreground shadow-card"
          : "border-border bg-card text-muted-foreground hover:border-primary/50"
      }`}
    >
      {active && (
        <span className="absolute right-2 top-2 grid h-4 w-4 place-items-center rounded-full gradient-primary text-primary-foreground">
          <Check className="h-2.5 w-2.5" />
        </span>
      )}
      {children}
    </button>
  );
}

export default function CakeBuilder() {
  const [size, setSize] = useState(sizes[1]);
  const [flavor, setFlavor] = useState(flavors[0]);
  const [theme, setTheme] = useState(themes[0]);
  const [extras, setExtras] = useState([]);
  const { addItem } = useCart();

  const toggleExtra = (label) =>
    setExtras((prev) =>
      prev.includes(label) ? prev.filter((e) => e !== label) : [...prev, label]
    );

  const extrasTotal = addOns
    .filter((a) => extras.includes(a.label))
    .reduce((sum, a) => sum + a.price, 0);
  const total = size.price + flavor.price + extrasTotal;

  return (
    <section id="custom-builder" className="gradient-soft px-5 py-14 md:px-10 md:py-16">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-black">
          <span className="font-script text-4xl text-primary">Custom</span> Cake Builder
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Design your dream cake in 4 simple steps
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-start gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full gradient-primary text-xs font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-base font-bold leading-tight">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {s.n === 1 &&
                sizes.map((o) => (
                  <Chip key={o.label} active={size.label === o.label} onClick={() => setSize(o)}>
                    <span className="flex h-14 items-end justify-center">
                      <img
                        src={sizeImg}
                        alt={`${o.label} cake`}
                        loading="lazy"
                        width={1024}
                        height={1280}
                        className={`${o.scale} rounded-full object-cover shadow-card transition-transform`}
                      />
                    </span>
                    <span className="block text-sm font-bold text-foreground">{o.label}</span>
                    <span className="block">{o.note}</span>
                  </Chip>
                ))}

              {s.n === 2 &&
                flavors.map((o) => (
                  <Chip key={o.label} active={flavor.label === o.label} onClick={() => setFlavor(o)}>
                    <img
                      src={o.img}
                      alt={`${o.label} cake`}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="h-12 w-12 rounded-xl object-cover shadow-card"
                    />
                    <span className="block text-xs font-semibold text-foreground">{o.label}</span>
                    <span className="block">{o.price ? `+₹${o.price}` : "Included"}</span>
                  </Chip>
                ))}

              {s.n === 3 &&
                themes.map((o) => (
                  <Chip key={o.label} active={theme.label === o.label} onClick={() => setTheme(o)}>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary">
                      <o.Icon className="h-5 w-5" />
                    </span>
                    <span className="block text-xs font-semibold text-foreground">{o.label}</span>
                  </Chip>
                ))}

              {s.n === 4 &&
                addOns.map((o) => (
                  <Chip
                    key={o.label}
                    active={extras.includes(o.label)}
                    onClick={() => toggleExtra(o.label)}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary">
                      <o.Icon className="h-5 w-5" />
                    </span>
                    <span className="block text-xs font-semibold text-foreground">{o.label}</span>
                    <span className="block">+₹{o.price}</span>
                  </Chip>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-primary/30 bg-card p-6 shadow-card">
        <div className="flex items-center gap-4">
          <img
            src={flavor.img}
            alt={`${flavor.label} cake preview`}
            loading="lazy"
            width={640}
            height={640}
            className="h-14 w-14 rounded-2xl object-cover shadow-card"
          />
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Your cake</p>
            <p className="mt-1 font-display text-lg font-bold">
              {size.label} · {flavor.label} · {theme.label}
              {extras.length > 0 && ` · ${extras.length} add-on${extras.length > 1 ? "s" : ""}`}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:gap-6">
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="font-display text-2xl font-black text-primary">₹{total.toLocaleString("en-IN")}</p>
          </div>
          <button
            onClick={() =>
              addItem({
                id: `custom-${size.label}-${flavor.label}-${theme.label}-${extras.slice().sort().join("+")}`,
                name: `Custom ${flavor.label} Cake · ${size.label} · ${theme.label}`,
                price: total,
                img: flavor.img,
              })
            }
            className="rounded-full gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
