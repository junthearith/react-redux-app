import React, { useEffect } from "react";
import { ProductCardDetail } from "../../components/common/cards/ProductCardDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, selectProductById } from "../../redux/features/product/productSlice";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const param = useParams();
    console.log("param: ", param.id);
    const product = useSelector(selectProductById);
    console.log("product: ", product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductById(param?.id));
    }, []);
  return (
    <>
      <div>ProductDetail</div>
      <ProductCardDetail image={product.image} title={product.name} disc={product.desc} price={product.price}/>
    </>
  );
}

export default ProductDetail;
