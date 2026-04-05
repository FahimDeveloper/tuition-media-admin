import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { ConfigProvider } from "antd";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import router from "./routers";

createRoot(document.getElementById("root")!).render(
  <Fragment>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#355F92",
            borderRadius: 5,
            fontFamily: "Manrope",
          },
          components: {
            Menu: {
              itemHoverBg: "#355F92",
              itemHoverColor: "#ffffff",
              itemColor: "#4B4B4B",
              itemSelectedBg: "#355F92",
              itemSelectedColor: "#ffffff",
              horizontalItemSelectedColor: "#355F92",
            },
          },
        }}
      >
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </ConfigProvider>
    </Provider>
  </Fragment>,
);
