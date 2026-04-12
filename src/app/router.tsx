import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import ProductsPage from "@modules/products/pages/ProductsPage";
import LoginPage from "@modules/Login/pages/LoginPage";
import SavedProductsPage from "@modules/products/pages/SavedProductsPage";
import { ProtectedRoutesProvider } from "../providers/ProtectedRoutesProvider";
import { GuestProvider } from "../providers/GuestProvider";
import MyProfilePage from "@modules/Users/pages/MyProfilePage";

export const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        path: "/",
        Component: ProductsPage,
      },

      {
        Component: ProtectedRoutesProvider,
        children: [
          {
            path: "/saved-products",
            Component: SavedProductsPage,
          },
          {
            path: "/profile",
            Component: MyProfilePage,
          },
        ],
      },
      {
        Component: GuestProvider,
        children: [
          {
            path: "/login",
            Component: LoginPage,
          },
        ],
      },
    ],
  },
]);
