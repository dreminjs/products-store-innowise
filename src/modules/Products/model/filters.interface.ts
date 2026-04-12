export interface IFiltersSlice {
  categories: string[];
  colors: string[];
  sizes: string[];
  brands: string[];
  conditions: string[];
  prizes: string[];
  shops: string[];
}

export type TSortVariant = "ascending" | "descending";
