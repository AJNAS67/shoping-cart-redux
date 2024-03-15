import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";
export default function CartTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product));
  }
  return (
    <div>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "350px" }}
          src={product?.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 line-clamp1">
            {product.title}
          </div>
          <p className="text-gray-700 text-base line-clamp">
            {product.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {product.category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Rs : {product.price}
          </span>
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-slate-700 hover:text-white"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove form cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
