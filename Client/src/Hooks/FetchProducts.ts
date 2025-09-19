import axios from "axios"

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/products')
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
fetchProducts()
