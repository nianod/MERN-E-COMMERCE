import axios from "axios";
import type { Product } from "../Types/Product"
import { useEffect, useState } from "react"

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
  }, [])

  export default fetchProducts