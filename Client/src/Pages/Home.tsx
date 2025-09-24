import { useState, useEffect } from "react";
import axios from "axios";
import type { Product } from "../types/Product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>("http://localhost:8000/api/products");
      setProducts(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("error occurred", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div> 
      {products.map((product) => (
        <div key={product._id}>
          <img src={product.image}/>
          <b>{product.name}</b>
          <span>{product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
