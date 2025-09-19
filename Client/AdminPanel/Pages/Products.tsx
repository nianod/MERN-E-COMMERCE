import { useState } from "react";

const Products = () => {
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [price, setPrice] = useState<any>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
 
  const submit = (e: any) => {
    if(error) {
      setError(error)
      setLoading(false)
      return
    } else
    e.preventDefault()
    setLoading(true)
    setError('')
  }

  return (
    <div className="border max-w-md p-6 bg-white rounded-lg shadow-md mb-20 mt-20 m-auto max-h-[570px]">
      <h2 className="text-center font-bold text-xl">Add a product</h2>
      <form onSubmit={submit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="enter item name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Image Url:
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="enter the image url"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Price:
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="enter the item price"
            required
          />
        </div>
        {error && (
          <p className="text-center text-red-500 text-sm mt-1">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-500 p-2 rounded text-white font-semibold ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-green-600 transition"}`}>
          {loading ? "Adding..." : "Add a Product"}
        </button>
      </form>
    </div>
  );
};

export default Products;
