import { useState, useEffect } from "react"
import axios from "axios"
import type { Product } from "../types/Product"

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>('/api/products')
       setProducts(response.data.products)
      // console.log(response.data)
    } catch (error) {
      console.error("error occurred", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h2>Available products</h2>

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home 