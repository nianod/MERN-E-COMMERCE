 import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className='bottom-0   bg-gray-600 z-40 w-full'>
      <div className="flex justify-center text-white">
        <div className="flex flex-col p-6">
          <h1 className="font-semibold mb-0.5">Useful links</h1>
          <Link to="/" className="text-sm hover:underline">Track your order</Link>
          <Link to="/" className="text-sm hover:underline">How to order</Link>
          <Link to="/" className="text-sm hover:underline">Pick-up stations</Link>
          <Link to="/" className="text-sm hover:underline">Black Friday</Link>
          <Link to="/" className="text-sm hover:underline">Report a product</Link>
          <Link to="/" className="text-sm hover:underline">Product Policies</Link>
        </div>
        <div className="flex flex-col p-6">
          <h1 className="font-semibold mb-0.5">Make money with us</h1>
          <Link to="/" className="text-sm hover:underline">Advertise on us</Link>
          <Link to="/" className="text-sm hover:underline">Sell a product</Link>
          <Link to="/" className="text-sm hover:underline">Become an affiliate</Link>
          <Link to="/" className="text-sm hover:underline">Own shares</Link>
          <Link to="/" className="text-sm hover:underline">Real estate</Link>
        </div>
        <div className="flex flex-col p-6">
          <h1 className="font-semibold mb-0.5">About us</h1>
          <Link to="/" className="text-sm hover:underline">Privacy policy</Link>
          <Link to="/" className="text-sm hover:underline"></Link>
          <Link to="/" className="text-sm hover:underline">Become an affiliate</Link>
          <Link to="/" className="text-sm hover:underline">Own shares</Link>
          <Link to="/" className="text-sm hover:underline">Real estate</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer