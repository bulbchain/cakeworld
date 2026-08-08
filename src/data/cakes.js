import chocolate from "../assets/cake-chocolate.jpg";
import butterscotch from "../assets/cake-butterscotch.jpg";
import fruit from "../assets/cake-fruit.jpg";
import vanilla from "../assets/cake-vanilla.jpg";
import redvelvet from "../assets/cake-redvelvet.jpg";
import blueberry from "../assets/cake-blueberry.jpg";

export const cakes = [
  {
    id: "choco-truffle",
    name: "Rich Chocolate Truffle Cake",
    price: 999,
    rating: "4.8",
    reviews: "1.2k",
    img: chocolate,
    tags: ["Chocolate", "Truffle"],
    weight: "500g / 1kg",
    description:
      "Layers of moist Belgian cocoa sponge soaked in chocolate syrup, filled with silky truffle ganache and finished with a glossy dark chocolate glaze.",
    ingredients: ["Belgian dark chocolate", "Fresh cream", "Cocoa sponge", "Cane sugar", "Butter"],
  },
  {
    id: "fruit-almond",
    name: "Tropical Fruit Almond Cake",
    price: 1099,
    rating: "4.6",
    reviews: "850",
    img: fruit,
    tags: ["Fruit Cakes"],
    weight: "1kg",
    description:
      "A light almond sponge layered with whipped vanilla cream and a generous crown of seasonal tropical fruit, finished with toasted almond flakes.",
    ingredients: ["Almond flour", "Seasonal fruits", "Whipped cream", "Vanilla bean", "Honey"],
  },
  {
    id: "butterscotch-crunch",
    name: "Butterscotch Crunch Cake",
    price: 899,
    rating: "4.8",
    reviews: "760",
    img: butterscotch,
    tags: ["Butterscotch"],
    weight: "500g / 1kg",
    description:
      "Buttery caramel sponge with praline crunch between every layer and a swirl of golden butterscotch frosting on top.",
    ingredients: ["Butterscotch praline", "Caramel", "Fresh cream", "Butter", "Wheat sponge"],
  },
  {
    id: "vanilla-bean",
    name: "Classic Vanilla Bean Cake",
    price: 849,
    rating: "4.7",
    reviews: "1.1k",
    img: vanilla,
    tags: ["Vanilla"],
    weight: "500g / 1kg",
    description:
      "Real Madagascar vanilla bean folded into a feather-light sponge, layered with airy vanilla cream — simple, nostalgic, perfect.",
    ingredients: ["Madagascar vanilla", "Fresh cream", "Free-range eggs", "Butter", "Cane sugar"],
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cream Cheese Cake",
    price: 1149,
    rating: "4.9",
    reviews: "2.3k",
    img: redvelvet,
    tags: ["Red Velvet"],
    weight: "1kg",
    description:
      "Deep crimson cocoa-buttermilk layers with tangy cream cheese frosting and velvet crumb finish. Our most gifted cake.",
    ingredients: ["Cream cheese", "Buttermilk", "Cocoa", "Beet extract colour", "Butter"],
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    price: 1249,
    rating: "4.7",
    reviews: "640",
    img: blueberry,
    tags: ["Fruit Cakes", "Cheesecake"],
    weight: "1kg",
    description:
      "Baked New York style cheesecake on a crumbly biscuit base, topped with a glossy compote of wild blueberries.",
    ingredients: ["Cream cheese", "Wild blueberries", "Digestive biscuit base", "Lemon zest"],
  },
  {
    id: "dark-choco-truffle",
    name: "Dark Chocolate Ganache Truffle",
    price: 1299,
    rating: "4.9",
    reviews: "980",
    img: chocolate,
    tags: ["Chocolate", "Truffle"],
    weight: "1kg",
    description:
      "For serious chocolate lovers — 70% dark ganache poured over bittersweet sponge, dusted with cocoa and chocolate curls.",
    ingredients: ["70% dark chocolate", "Cocoa", "Fresh cream", "Butter", "Sea salt"],
  },
  {
    id: "vanilla-berry",
    name: "Vanilla Berry Delight Cake",
    price: 949,
    rating: "4.5",
    reviews: "420",
    img: vanilla,
    tags: ["Vanilla", "Fruit Cakes"],
    weight: "500g / 1kg",
    description:
      "Vanilla sponge with a berry compote centre and softly whipped cream, finished with fresh strawberries and blueberries.",
    ingredients: ["Strawberries", "Blueberries", "Vanilla", "Whipped cream", "Cane sugar"],
  },
  {
    id: "butterscotch-caramel",
    name: "Salted Caramel Butterscotch",
    price: 1049,
    rating: "4.6",
    reviews: "530",
    img: butterscotch,
    tags: ["Butterscotch", "Truffle"],
    weight: "1kg",
    description:
      "Salted caramel drizzle over butterscotch cream layers with a crackling praline top — sweet, salty and impossible to share.",
    ingredients: ["Salted caramel", "Butterscotch praline", "Sea salt", "Fresh cream", "Butter"],
  },
];

export const getCake = (id) => cakes.find((c) => c.id === id);
