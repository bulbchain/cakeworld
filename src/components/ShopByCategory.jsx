import { Cake, ChefHat, PartyPopper, IceCreamCone, Cookie, Gift } from "lucide-react";
import classic from "../assets/cat-classic.jpg";
import gourmet from "../assets/cat-gourmet.jpg";
import theme from "../assets/cat-theme.jpg";
import desserts from "../assets/cat-desserts.jpg";
import cookies from "../assets/cat-cookies.jpg";
import hampers from "../assets/cat-hampers.jpg";

const categories = [
  { title: "Classic Cakes", desc: "Timeless flavors, made with love", img: classic, Icon: Cake },
  { title: "Gourmet Cakes", desc: "Premium ingredients for true indulgence", img: gourmet, Icon: ChefHat },
  { title: "Theme Cakes", desc: "Bring your theme to life beautifully", img: theme, Icon: PartyPopper },
  { title: "Desserts", desc: "Delightful treats for every sweet moment", img: desserts, Icon: IceCreamCone },
  { title: "Cookies", desc: "Crispy, chewy & absolutely yummy", img: cookies, Icon: Cookie },
  { title: "Hampers", desc: "Perfect gifts for every celebration", img: hampers, Icon: Gift },
];

export function ShopByCategory() {
  return (
    <section id="categories" className="px-6 py-16 md:px-10">
      <div className="text-center">
        <h2 className="font-display text-3xl font-black">
          <span className="font-script text-4xl text-primary">Shop</span> by Category
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Something sweet for every craving and every occasion
        </p>
      </div>

      <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {categories.map(({ title, desc, img, Icon }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <img
              src={img}
              alt={title}
              loading="lazy"
              width={640}
              height={640}
              className="pointer-events-none absolute -right-3 top-1 h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="mt-14 font-display text-base font-bold leading-tight">{title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
