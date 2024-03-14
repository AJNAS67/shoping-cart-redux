import "../../App.css";

export default function CartTile({ product }) {
  console.log("====================================");
  console.log(product, "item");
  console.log("====================================");
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
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-slate-700 hover:text-white" >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
