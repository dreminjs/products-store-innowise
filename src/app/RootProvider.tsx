import { RouterProvider } from "react-router";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppWrapper } from "@components/AppWrapper/AppWrapper";

export const RootProvider = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <RouterProvider router={router} />
      </AppWrapper>
    </Provider>
  );
};
