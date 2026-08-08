
import { cakes } from "../data/cakes";
import { formatINR } from "../context/CartContext";
import { Link } from "react-router-dom";

function CakeTile({ cake }) {
  return (
    <Link
      to={`/cake/${cake.id}`}
      className="group/tile relative block w-[180px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-card sm:w-[220px] md:w-[280px]"
    >
      <img
        src={cake.img}
        alt={cake.name}
        loading="lazy"
        width={768}
        height={768}
        className="h-32 w-full object-cover transition-transform duration-500 group-hover/tile:scale-105 sm:h-40 md:h-52"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-berry/85 to-transparent p-3 pt-8 sm:p-4 sm:pt-10">
        <p className="truncate font-display text-xs font-bold text-cream sm:text-sm">{cake.name}</p>
        <p className="text-[10px] font-semibold text-gold sm:text-xs">{formatINR(cake.price)}</p>
      </div>
    </Link>
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
          {items.map((c, i) => (
            <CakeTile key={`${copy}-${c.id}-${i}`} cake={c} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function CakeMarquee() {
  const rowA = cakes;
  const rowB = [...cakes].reverse();

  return (
    <section id="gallery" className="overflow-hidden py-16">
      <div className="px-5 text-center md:px-10">
        <p className="font-script text-xl text-primary">Freshly baked, every day</p>
        <h2 className="mt-1 font-display text-3xl font-black md:text-4xl">
          Browse our <span className="text-gradient">cake gallery</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Tap any cake to see the full story, ingredients and add it straight to your cart.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <Row items={rowA} duration={50} />
        <Row items={rowB} duration={60} reverse />
      </div>
    </section>
  );
}
