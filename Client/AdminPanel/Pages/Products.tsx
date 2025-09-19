const Products = () => {
  const 
  return (
    <div className="border max-w-md p-6 bg-white rounded-lg shadow-md mb-20 mt-20 m-auto max-h-[570px]">
      <h2>Add a product</h2>
      <form className="">
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Name:
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Image Url:
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Price:
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="enter your name"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Products;
