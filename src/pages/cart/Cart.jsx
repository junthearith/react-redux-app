import { useSelector } from "react-redux";
import ProductInCard from "../../components/common/cards/ProductInCard";
import { selectCartItems } from "../../redux/features/cart/cartSlice";

export function Cart() {
  const cartItems = useSelector(selectCartItems);
  console.log("selected cart items: ", cartItems);

  return (
    <section className="flex justify-center mt-5">
      <section className="max-w-sm w-1/2 bg-slate-50 p-5 rounded-md overflow-scroll h-[80vh]">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Shopping Cart
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Delete all
          </a>
        </div>
        {cartItems.map((cartItem, index) => {
          return (
            <ProductInCard
              key={index}
              image={cartItem.image}
              title={cartItem.title}
              desc={cartItem.desc}
              id={cartItem.id}
              price={cartItem.price}
              qty={cartItem.qty}
            />
          );
        })}
      </section>
    </section>
  );
}
