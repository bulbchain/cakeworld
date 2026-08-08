import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, FaceAngry, Image, Star, TextWrapIcon } from "lucide-react";
import heroCake from "../assets/hero-cake.jpg";
import heroCake2 from "../assets/hero-cake-2.jpg";
import heroCake3 from "../assets/hero-cake-3.jpg";

const slides = [
  { src: heroCake, alt: "Layered strawberry cream cake topped with fresh strawberries" },
  { src: heroCake2, alt: "Berry topped cream layer cake on a pink backdrop" },
  { src: heroCake3, alt: "Vanilla celebration cake decorated with fresh flowers" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section id="top" className="grid items-center gap-10 px-6 pb-16 pt-24 md:px-10 lg:grid-cols-2">
      <div className="relative">
        <div className="absolute -left-2 top-6 hidden flex-col items-center gap-4 md:flex lg:-left-4">
          {[FaceAngry, TextWrapIcon, Image].map((Icon, i) => (
            <a key={i} href="#" className="text-foreground/60 transition-colors hover:text-primary">
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">
            Any type of cake you need
          </span>
        </div>

        <div className="md:pl-12">
          <p className="font-script text-3xl">
            Every One <span className="text-primary">Love's</span> <span className="text-muted-foreground">___</span>
          </p>
          <h1 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Natural and
            <span className="mt-1 block text-gradient">healthy Cakes.</span>
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Baked fresh every morning with real butter, seasonal fruit and zero preservatives. Pick a
            classic or design your very own cake in four simple steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#bestsellers"
              className="rounded-full gradient-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              ORDER NOW
            </a>
            <a
              href="#custom-builder"
              className="rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              BUILD YOUR CAKE
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative h-[26rem] overflow-hidden rounded-t-[16rem] rounded-b-3xl border-2 border-primary/30 shadow-soft md:h-[32rem]">
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1024}
              height={1280}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out ${
                i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
        </div>

        {/* <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-background shadow-card">
          <Star className="h-4 w-4 fill-gold text-gold" />
          <span className="text-sm font-semibold">4.9</span>
          <span className="text-xs opacity-70">(2.1k reviews)</span>
        </div> */}

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 gradient-primary" : "w-2 bg-primary/25 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
