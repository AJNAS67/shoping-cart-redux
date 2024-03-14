import { useEffect, useState } from "react";
import CartTile from "../../component/card-item";
import { ThreeCircles } from "react-loader-spinner";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      setProduct(data);
      console.log(data, "data");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#a94d84"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {product && product.length
            ? product.map((item) => <CartTile product={item} />)
            : null}
        </div>
      )}
    </div>
  );
}
