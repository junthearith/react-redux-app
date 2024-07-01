import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  selectAllProducts,
  fetchProducts,
} from "./redux/features/product/productSlice";
import { useEffect } from "react";
import { ProductCard } from "./components/common/cards/ProductCard";

function App() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  // console.log("products: ", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h1 className="text-2xl text-blue-800 font-semibold text-center">
        Our Product
      </h1>
      <section className="grid grid-cols-4 gap-4 mx-20 mt-4">
      {products.map((product, index) => {
        // console.log("map product: ", product);
        return (
          <ProductCard
          key={index}
          image={product.image}
          title={product.name}
          price={product.price}
          id = {product.id}
        />
        );
      })}
      </section>
    </>
  );
}

export default App;
