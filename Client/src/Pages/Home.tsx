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
    fetchProducts()
  }, []);

  return (
    <div className="flex items-center justify-center flex-col overflow-x-hidden mt-20">
    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-9 px-3 py-5"> 
      {products.map((product) => (
        <div key={product._id}>
          <img src={product.image}/>
          <b>{product.name}</b>
          <span>{product.price}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
