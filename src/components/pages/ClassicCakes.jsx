import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Plus, Minus, Clock, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { formatINR, useCart } from "../../context/CartContext";
 import chocolate from "../../assets/cake-chocolate.jpg";
import butterscotch from "../../assets/cake-butterscotch.jpg";
import fruit from "../../assets/cake-fruit.jpg";
import vanilla from "../../assets/cake-vanilla.jpg";
import redvelvet from "../../assets/cake-redvelvet.jpg";
import blueberry from "../../assets/cake-blueberry.jpg";
import classic from "../../assets/cat-classic.jpg";


const classicCakes = [
  {
    id: "choco-truffle",
    name: "Rich Chocolate Truffle Cake",
    price: 999,
    rating: "4.8",
    reviews: "1.2k",
    img: chocolate,
    tags: ["Chocolate", "Truffle"],
  },
  {
    id: "butterscotch-crunch",
    name: "Butterscotch Crunch Cake",
    price: 899,
    rating: "4.8",
    reviews: "760",
    img: butterscotch,
    tags: ["Butterscotch"],
  },
  {
    id: "vanilla-bean",
    name: "Classic Vanilla Bean Cake",
    price: 849,
    rating: "4.7",
    reviews: "1.1k",
    img: vanilla,
    tags: ["Vanilla"],
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cream Cheese Cake",
    price: 1149,
    rating: "4.9",
    reviews: "2.3k",
    img: redvelvet,
    tags: ["Red Velvet"],
  },
  {
    id: "fruit-almond",
    name: "Tropical Fruit Almond Cake",
    price: 1099,
    rating: "4.6",
    reviews: "850",
    img: fruit,
    tags: ["Fruit"],
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    price: 1249,
    rating: "4.7",
    reviews: "640",
    img: blueberry,
    tags: ["Fruit", "Cheesecake"],
  },
  {
    id: "dark-choco-truffle",
    name: "Dark Chocolate Ganache Truffle",
    price: 1299,
    rating: "4.9",
    reviews: "980",
    img: chocolate,
    tags: ["Chocolate", "Truffle"],
  },
  {
    id: "vanilla-berry",
    name: "Vanilla Berry Delight Cake",
    price: 949,
    rating: "4.5",
    reviews: "420",
    img: vanilla,
    tags: ["Vanilla", "Fruit"],
  },
  {
    id: "butterscotch-caramel",
    name: "Salted Caramel Butterscotch",
    price: 1049,
    rating: "4.6",
    reviews: "530",
    img: butterscotch,
    tags: ["Butterscotch", "Caramel"],
  },
];

const filters = [
  "All",
  "Chocolate",
  "Vanilla",
  "Red Velvet",
  "Fruit",
  "Butterscotch",
  "Truffle",
  "Cheesecake",
];

function CartAction({ cake }) {
  const { items, addItem, setQty } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = items.find((item) => item.id === cake.id);

  const stopNav = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleAdd = (e) => {
    stopNav(e);

    addItem({
      id: cake.id,
      name: cake.name,
      price: cake.price,
      img: cake.img,
    });

    setJustAdded(true);

    setTimeout(() => {
      setJustAdded(false);
    }, 500);
  };

  const handleDecrease = (e) => {
    stopNav(e);

    if (cartItem) {
      setQty(cake.id, cartItem.qty - 1);
    }
  };

  const handleIncrease = (e) => {
    stopNav(e);

    if (cartItem) {
      setQty(cake.id, cartItem.qty + 1);
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cartItem ? (
        <motion.div
          key="quantity"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          className="flex items-center gap-0.5 rounded-full border border-primary/30 bg-accent px-1 py-1"
        >
          <motion.button
            aria-label="Decrease quantity"
            whileTap={{ scale: 0.85 }}
            onClick={handleDecrease}
            className="grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-primary/10"
          >
            <Minus className="h-3.5 w-3.5" />
          </motion.button>

          <span className="min-w-[1.25rem] text-center text-xs font-bold text-primary">
            {cartItem.qty}
          </span>

          <motion.button
            aria-label="Increase quantity"
            whileTap={{ scale: 0.85 }}
            onClick={handleIncrease}
            className="grid h-7 w-7 place-items-center rounded-full text-primary transition-colors hover:bg-primary/10"
          >
            <Plus className="h-3.5 w-3.5" />
          </motion.button>
        </motion.div>
      ) : (
        <motion.button
          key="add"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={
            justAdded
              ? { scale: [1, 1.12, 1] }
              : { scale: 1, opacity: 1 }
          }
          exit={{ scale: 0.85, opacity: 0 }}
          whileTap={{ scale: 0.92 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
          onClick={handleAdd}
          className="flex items-center gap-1 rounded-full gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-md sm:px-4"
        >
          <Plus className="h-3.5 w-3.5" />
          Add
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function ClassicCakes() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? classicCakes
      : classicCakes.filter((cake) => cake.tags.includes(active));

  return (
    <main className="min-h-screen bg-background">

      {/* Category Hero */}
      <section className="px-5 pt-8 md:px-10 md:pt-12">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="relative overflow-hidden rounded-[2rem] bg-accent/60">

            <div className="grid items-center md:grid-cols-[1.2fr_0.8fr]">

              <div className="relative z-10 px-6 py-10 sm:px-10 md:py-14 lg:px-14">

                <span className="font-script text-3xl text-primary">
                  Freshly baked
                </span>

                <h1 className="mt-1 font-display text-4xl font-black leading-none sm:text-5xl md:text-6xl">
                  Classic
                  <span className="block text-primary">
                    Cakes
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Timeless flavors, soft sponge and deliciously creamy
                  layers. Our classic cakes are made with love for every
                  celebration and sweet craving.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold">
                    🍰 Freshly Baked
                  </span>

                  <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold">
                    ❤️ Made With Love
                  </span>

                  <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold">
                    🚚 2–3 Hr Delivery
                  </span>
                </div>

              </div>

              <div className="relative hidden h-full min-h-[300px] md:block">
                <img
                  src={classic}
                  alt="Classic Cakes"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-transparent to-transparent" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="font-display text-2xl font-black sm:text-3xl">
                Explore Our{" "}
                <span className="text-primary">
                  Classic Cakes
                </span>
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Pick your favorite flavor and make your celebration sweeter.
              </p>
            </div>

            {/* Filters */}
            <div className="-mx-5 flex w-screen gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:w-auto lg:max-w-3xl lg:flex-wrap lg:overflow-visible lg:px-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  aria-pressed={active === filter}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    active === filter
                      ? "gradient-primary text-primary-foreground shadow-soft"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>

          {/* Cake Grid */}
          {visible.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-muted-foreground">
                No cakes in this category yet.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

              {visible.map((cake) => (
                <Link
                  key={cake.id}
                  to={`/cake/${cake.id}`}
                  className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={cake.img}
                      alt={cake.name}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-60"
                    />

                    <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                      {cake.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold text-primary shadow-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 p-4 sm:p-5">

                    <h3 className="font-display text-base font-bold leading-tight sm:text-lg">
                      {cake.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                      <Star className="h-3.5 w-3.5 fill-gold text-gold sm:h-4 sm:w-4" />
                      {cake.rating}
                      <span className="opacity-60">
                        ({cake.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">

                      <span className="font-display text-lg font-black text-primary sm:text-xl">
                        {formatINR(cake.price)}
                      </span>

                      <CartAction cake={cake} />

                    </div>

                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      2–3 hrs delivery
                    </p>

                  </div>

                </Link>
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  );
}