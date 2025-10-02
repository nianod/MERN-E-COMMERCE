import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  
  const socialLinks = [
    {label: "instagram", icon: <FaInstagram />, URL : "#"},
    {label: "Facebook", icon: <FaFacebook />, URL : "#"},
    {label: "linkedin", icon: <FaLinkedin />, URL : "#"},
    {label: "tiktok", icon: <FaTiktok />, URL : "#"},
    {label: "twitter", icon: <FaTwitter />, URL : "#"},
    {label: "youtube", icon: <FaYoutube />, URL : "#"},
  ]

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
          <Link to="/" className="text-sm hover:underline">Help center</Link>
          <Link to="/" className="text-sm hover:underline">Chat with us</Link>         
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
          <Link to="/" className="text-sm hover:underline">Terms & conditions</Link>
          <Link to="/" className="text-sm hover:underline">Cookies policy</Link>
        </div>
      </div>
      <div>
        <div>
          <p>JOIN US ON: </p>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer