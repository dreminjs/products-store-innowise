import { useAppSelector } from "@app/store/hooks";
import { SavedProducts } from "./SavedProducts";

export const FavouritesProducts = () => {
  const favouritesProductsItems = Object.values(
    useAppSelector((state) => state.products.favouritesProducts),
  );

  if (favouritesProductsItems.length === 0)
    return <h1>No favourites products</h1>;

  return (
    <>
      <SavedProducts
        products={favouritesProductsItems.map((el) => ({
          id: el.id,
          title: el.title,
          price: el.price,
          total: el.price,
          quantity: 1,
          discountPercentage: el.discountPercentage,
          discountedTotal: el.price,
          thumbnail: el.img,
        }))}
      />
    </>
  );
};
