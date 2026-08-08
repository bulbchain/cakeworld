import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cakes } from "../data/cakes";
import { Link } from "react-router-dom";

const featured = [cakes[0], cakes[4], cakes[3], cakes[2], cakes[5]].filter(Boolean);

export function CakeShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream px-5 py-20 md:px-10 md:py-28"
      aria-label="Sweet soft creamy cakes"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Big outlined word behind the cakes */}
        <motion.h2
          style={{ x }}
          className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[13vw] font-black uppercase leading-[0.85] tracking-tight text-transparent md:text-[9.5vw]"
        >
          <span
            style={{
              WebkitTextStroke: "2px var(--berry)",
              color: "transparent",
            }}
          >
            Sweet Soft Creamy
          </span>
        </motion.h2>

        {/* Cakes sitting in front of the text, overlapping upward */}
        <div className="-mt-[6vw] grid grid-cols-2 items-end gap-3 sm:gap-6 md:-mt-[5vw] md:grid-cols-3 lg:grid-cols-5">
          {featured.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.04 }}
              className={i % 2 ? "translate-y-3" : ""}
            >
              <Link
                to={`/cake/${c.id}`}
                className="group block text-center"
                aria-label={c.name}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="mx-auto aspect-square w-full rounded-full object-cover shadow-soft ring-4 ring-cream"
                />
                <p className="mt-3 truncate font-display text-[10px] font-bold text-berry sm:text-xs md:text-sm">
                  {c.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
