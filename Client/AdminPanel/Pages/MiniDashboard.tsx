import type { Product } from "../../src/Types/Product";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaPen, FaTrash, FaRoad } from "react-icons/fa";

const MiniDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://localhost:8000/api/products"
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("error occurred", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const editProduct = () => {

  }

    const deleteProduct = async (id: string) => {
      try {
        await axios.delete(`http://localhost:8000/api/products/${id}`)
        setProducts((prev) => prev.filter((product) => product._id !== id))
      } catch(err) {
        console.error('A certainerror occurred')
      }
    }

    const pinProduct = () => {
    
  }
  return (
    <div>
      <p>MiniDashboard</p>
      <h2>Available Products to the clients</h2>
      <div className="flex items-center justify-center flex-col overflow-x-hidden">
        <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-9 px-3 py-5">
          {products.map((product) => (
            <div key={product._id} className="">
              <img
                src={product.image}
                alt={product.name}
                className="h-50 rounded w-50 object-cover"
              />
              <p className="text-md text-white font-semibold capitalize ">
                <span>{product.name}</span>-{" "}
                <span className="text-gray-400 text-sm">$ {product.price}</span>
              </p>
              <div className="flex">
                <button
                  onClick={editProduct}
                  className=" p-2 px-2 w-full text-gray-400 font-bold cursor-pointer transition-colors duration-500"
                  title="Edit"
                >
                  <FaPen />
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className=" p-2 px-2 w-full text-gray-400 font-bold cursor-pointer transition-colors duration-500"
                  title="Delete"
                >
                  <FaTrash />
                </button>
                <button 
                  onClick={pinProduct}
                  className=" p-2 px-2 w-full text-gray-400  font-bold cursor-pointer transition-colors duration-500"
                  title="Pin to top"
                >
                  <FaRoad />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniDashboard;
