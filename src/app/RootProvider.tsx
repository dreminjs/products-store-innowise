import { RouterProvider } from "react-router";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppWrapper } from "@components/AppWrapper/AppWrapper";
import { NotificationList } from "@modules/Notifications";
import { Suspense } from "react";

export const RootProvider = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <RouterProvider router={router} />
          <NotificationList />
        </Suspense>
      </AppWrapper>
    </Provider>
  );
};
