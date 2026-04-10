import { INavigationItem } from "./interfaces/navigation.interface";

export const navigationItems: INavigationItem[] = [
  {
    to: "#",
    label: "About Us",
  },
  {
    to: "#",
    label: "All shops",
  },
  {
    to: "#",
    label: "Become a merchant",
  },
];
// лучше получать с апишки
export const filterItems = [
  { payload: "womens-dresses", label: "Women" },
  { payload: "mens-shoes", label: "Men" },
  { payload: "beauty", label: "Unisex" },
  { payload: "sunglasses", label: "Children" },
  { payload: "skin-care", label: "New" },
];
