import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import { ProductsPage } from "@modules/products/pages/ProductsPage";

export const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        path: "/",
        Component: ProductsPage,
      },
    ],
  },
]);
