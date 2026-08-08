import birthday from "../assets/occasion-birthday.jpg";
import anniversary from "../assets/occasion-anniversary.jpg";
import wedding from "../assets/occasion-wedding.jpg";
import kids from "../assets/occasion-kids.jpg";

const occasions = [
  { title: "Birthday Cakes", desc: "Make their day extra special", img: birthday },
  { title: "Anniversary Cakes", desc: "Celebrate love & togetherness", img: anniversary },
  { title: "Wedding Cakes", desc: "Elegant cakes for your big day", img: wedding },
  { title: "Kids Theme Cakes", desc: "Fun cakes for little celebrations", img: kids },
];

export default function ShopByOccasion() {
  return (
    <section id="occasions" className="px-6 py-16 md:px-10">
      <h2 className="flex items-center gap-3 font-display text-3xl font-black">
        Shop by <span className="text-primary">Occasion</span>
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {occasions.map((o) => (
          <article
            key={o.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 p-5">
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold leading-tight">{o.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
              </div>
              <img
                src={o.img}
                alt={o.title}
                loading="lazy"
                width={768}
                height={768}
                className="h-24 w-24 shrink-0 rounded-2xl object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
