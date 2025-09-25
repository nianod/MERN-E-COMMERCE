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
    <div className="flex items-center justify-center flex-col overflow-x-hidden mt-16">
    <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-9 px-3 py-5"> 
      {products.map((product) => (
        <div 
          key={product._id}
          className=""
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-50 rounded w-50 object-cover"
           />
          <p className="text-lg text-white font-semibold capitalize ">{product.name}</p>
          <span className="text-lg text-amber-300 font-bold mb-1.5">$ {product.price}</span> <br />
          <button
            className="bg-fuchsia-500 rounded p-2 px-2 w-full text-white font-bold cursor-pointer hover:bg-fuchsia-600 transition-colors duration-500"
          >
            Purchase</button>
        </div>
      ))}
    </div>
    </div>
  )
};

export default Home;
