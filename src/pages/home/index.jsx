import { useEffect, useState } from "react";
import CartTile from "../../component/card-item";
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
        "please waite while loading the data"
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
