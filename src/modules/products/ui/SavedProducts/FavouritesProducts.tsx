import { useAppSelector } from "@app/store/hooks";
import { SavedProducts } from "./SavedProducts";

export const FavouritesProducts = () => {
  const favouritesProductsItems = Object.values(
    useAppSelector((state) => state.products.purchaseProducts),
  );

  if (favouritesProductsItems.length === 0)
    return <div>No favourites products</div>;

  return (
    <SavedProducts
      id={0}
      products={favouritesProductsItems.map((el) => ({
        id: el.id,
        title: el.title,
        price: el.price,
        quantity: 1,
        total: el.price,
        discountPercentage: el.discountPercentage || 0,
        discountedTotal: el.price,
        thumbnail: el.img,
      }))}
      discountedTotal={0}
      total={0}
      totalProducts={favouritesProductsItems.length}
      totalQuantity={favouritesProductsItems.length}
    />
  );
};
