import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import { ProtectedRoutesProvider } from "../providers/ProtectedRoutesProvider";
import { GuestProvider } from "../providers/GuestProvider";
import { lazy } from "react";

const ProductsPage = lazy(() => import("@modules/Products/pages/ProductsPage"));
const MyProfilePage = lazy(() => import("@modules/Users/pages/MyProfilePage"));
const SavedProductsPage = lazy(
  () => import("@modules/Products/pages/SavedProductsPage"),
);
const LoginPage = lazy(() => import("@modules/Login/pages/LoginPage"));

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
