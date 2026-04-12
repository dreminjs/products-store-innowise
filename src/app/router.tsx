import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import ProductsPage from "@modules/products/pages/ProductsPage";
import LoginPage from "@modules/Login/pages/LoginPage";
import SavedProductsPage from "@modules/products/pages/SavedProductsPage";
import { ProtectedRoutesProvider } from "../providers/ProtectedRoutesProvider";

export const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        path: "/",
        Component: ProductsPage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        Component: ProtectedRoutesProvider,
        children: [
          {
            path: "/saved-products",
            Component: SavedProductsPage,
          },
        ],
      },
    ],
  },
]);
