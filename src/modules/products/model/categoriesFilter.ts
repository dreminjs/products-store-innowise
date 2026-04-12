import { ICategory } from "./categories.interface";

export const categories: ICategory[] = [
  {
    label: "Beauty & Health",
    items: ["beauty", "fragrances", "skin-care"],
  },
  {
    label: "Electronics",
    items: ["laptops", "smartphones", "tablets", "mobile-accessories"],
  },
  {
    label: "Men's",
    items: ["mens-shirts", "mens-shoes", "mens-watches"],
  },
  {
    label: "Women's",
    items: [
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
    ],
  },
  {
    label: "Home",
    items: ["furniture", "home-decoration", "kitchen-accessories"],
  },
  {
    label: "Food",
    items: ["groceries"],
  },
];
