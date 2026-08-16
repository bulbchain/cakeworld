import classic from "../assets/cat-classic.jpg";
import gourmet from "../assets/cat-gourmet.jpg";
import theme from "../assets/cat-theme.jpg";
import desserts from "../assets/cat-desserts.jpg";
import cookies from "../assets/cat-cookies.jpg";
import hampers from "../assets/cat-hampers.jpg";

export const categories = [
  {
    slug: "classic-cakes",
    title: "Classic Cakes",
    desc: "Timeless flavors, made with love",
    img: classic,
  },
  {
    slug: "gourmet-cakes",
    title: "Gourmet Cakes",
    desc: "Premium ingredients for true indulgence",
    img: gourmet,
  },
  {
    slug: "theme-cakes",
    title: "Theme Cakes",
    desc: "Bring your theme to life beautifully",
    img: theme,
  },
  {
    slug: "desserts",
    title: "Desserts",
    desc: "Delightful treats for every sweet moment",
    img: desserts,
  },
  {
    slug: "cookies",
    title: "Cookies",
    desc: "Crispy, chewy & absolutely yummy",
    img: cookies,
  },
  {
    slug: "hampers",
    title: "Hampers",
    desc: "Perfect gifts for every celebration",
    img: hampers,
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
