import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ananya Sharma", handle: "@ananya.s", rating: 5, date: "Jul 2, 2026", text: "The red velvet was unreal — moist, fresh and not overly sweet. Delivered exactly on time for my mom's birthday." },
  { name: "Rohit Menon", handle: "@rohitm", rating: 5, date: "Jun 18, 2026", text: "Built a custom 2kg butterscotch cake in the builder. Loved that I could pick the theme and message." },
  { name: "Priya Nair", handle: "@priyacooks", rating: 4, date: "Jun 9, 2026", text: "Beautiful frosting work and genuinely natural ingredients. My kids finished the whole thing in one sitting." },
  { name: "Karan Gill", handle: "@karangill", rating: 5, date: "May 30, 2026", text: "Ordered a wedding tier cake. It looked stunning and tasted even better. Guests kept asking where it was from." },
  { name: "Meera Iyer", handle: "@meera.iyer", rating: 5, date: "May 21, 2026", text: "The blueberry cheesecake is my new comfort food. Packaging was neat and everything arrived chilled." },
  { name: "Aditya Rao", handle: "@adityarao", rating: 5, date: "May 4, 2026", text: "Same-day delivery saved my anniversary. Fresh, fluffy and the chocolate ganache was rich without being heavy." },
  { name: "Sneha Kapoor", handle: "@snehak", rating: 4, date: "Apr 27, 2026", text: "Lovely kids theme cake — the little figures were edible and adorable. Will definitely reorder." },
  { name: "Vikram Desai", handle: "@vikramd", rating: 5, date: "Apr 11, 2026", text: "I'm picky about eggless cakes. This one had perfect texture. Finally a bakery that gets it right." },
  { name: "Fatima Sheikh", handle: "@fatimas", rating: 5, date: "Mar 29, 2026", text: "Ordered hampers for my whole team. Everyone raved about the cookies and the mini desserts." },
];

function ReviewCard({ r, dark }) {
  return (
    <figure
      className={`w-[300px] shrink-0 rounded-3xl border p-5 shadow-card sm:w-[360px] ${
        dark ? "border-berry/40 bg-berry text-cream" : "border-border bg-card text-card-foreground"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-black ${
            dark ? "bg-cream/15 text-cream" : "bg-accent text-accent-foreground"
          }`}
        >
          {r.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <figcaption className="truncate font-display text-sm font-bold">{r.name}</figcaption>
          <p className={`truncate text-xs ${dark ? "text-cream/70" : "text-muted-foreground"}`}>
            {r.handle}
          </p>
        </div>
        <Quote className={`h-4 w-4 ${dark ? "text-gold" : "text-primary/50"}`} />
      </div>

      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${i < r.rating ? "fill-gold text-gold" : dark ? "text-cream/25" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>

      <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-cream/90" : "text-foreground/80"}`}>
        {r.text}
      </p>
      <p className={`mt-3 text-xs ${dark ? "text-cream/60" : "text-muted-foreground"}`}>{r.date}</p>
    </figure>
  );
}

function Row({ items, reverse, duration }) {
  return (
    <div className="group flex gap-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 gap-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{
            animation: `marquee-x ${duration}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {items.map((r, i) => (
            <ReviewCard key={`${copy}-${r.handle}-${i}`} r={r} dark={(i + (reverse ? 1 : 0)) % 3 === 1} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  const rowA = reviews;
  const rowB = [...reviews].reverse();
  const rowC = [...reviews.slice(4), ...reviews.slice(0, 4)];

  return (
    <section id="reviews" className="overflow-hidden py-16">
      <div className="px-5 text-center md:px-10">
        <p className="font-script text-xl text-primary">Loved by cake lovers</p>
        <h2 className="mt-1 font-display text-3xl font-black md:text-4xl">
          Don't take <span className="text-gradient">our word</span> for it
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Thousands of celebrations, freshly baked. Here's what our customers say.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <Row items={rowA} duration={55} />
        <Row items={rowB} duration={65} reverse />
        <Row items={rowC} duration={60} />
      </div>
    </section>
  );
}
