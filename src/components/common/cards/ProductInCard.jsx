import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../../redux/features/cart/cartSlice";

export default function ProductInCard({ image, title, desc, price, id, qty }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id }));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({id}));
  }

  return (
    <>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  src={image}
                  alt="image"
                  height="48"
                  width="48"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-md font-medium text-gray-900 dark:text-white">
                  {title}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {desc}
                </p>
                <div className="flex mt-2">
                  <button onClick={()=> handleIncreaseQuantity()} className="mr-2 p-2 bg-slate-200 rounded-sm">
                    +
                  </button>
                  <p className="p-2">{qty}</p>
                  <button onClick={()=> handleDecreaseQuantity()} className="ml-2 p-2 bg-slate-200 rounded-sm">
                    -
                  </button>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ${price}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
