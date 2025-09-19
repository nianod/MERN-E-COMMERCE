import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  interface Product  {
    _id: string,
    name: string,
    quantity: number,
    price: number,
    image: string
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>('http://localhost:8000/api/produucts')
      console.log(response.data)
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
      <div>
        <ul>
          {products.map(product =>(
            <li key={product._id}>{product.name} - {product.price}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home 