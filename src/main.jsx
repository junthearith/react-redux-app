import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import About from "./pages/AboutComponent.jsx";
import { Counter } from "./pages/counter/Counter.jsx";
import ProductDetail from "./pages/product-detail/ProductDetail.jsx";
import { Cart } from "./pages/cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
