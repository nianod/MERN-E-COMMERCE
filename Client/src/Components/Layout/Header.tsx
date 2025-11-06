import { useState, useEffect } from "react";
import { FaSearch, FaUser, FaUserCircle, FaCartPlus, FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Country } from "country-state-city";
import SideCart from "../SideCart";
import Home from "../../Pages/Home";
import type { Product } from "../../Types/Product";
import Logout from "../Logout";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [countries, SetCountry] = useState<any>(Country.getAllCountries());
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartCount, SetCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [leave, setLeave] = useState<boolean>(false)

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleCountryChange = (isoCode: string) => {
    const country = countries.find((c: any) => c.isoCode === isoCode);
    setSelectedCountry(country);
  };

  const headerStuff = {
    logo: "/download.jpg",
    title: "ARNOLD-SELLERS",
  };

  return (
    <>
      <div className="flex items-center justify-between top-0 fixed w-full bg-[#382d33] px-4 sm:px-6 py-3 shadow-md z-50">
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="flex items-center gap-2">
          <img
            src={headerStuff.logo}
            alt={headerStuff.title}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
          />
          <Link
            className="font-bold text-lg sm:text-xl text-white"
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {headerStuff.title}
          </Link>
        </div>


        <div className="hidden md:flex flex-1 mx-4 lg:mx-8 relative gap-2 items-center max-w-lg">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products, Brands, Categories..."
            className="p-2 pl-10 w-full rounded bg-[#414145] border-gray-300 text-[#f3e6f3] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-4 text-blue-500 cursor-pointer" />
          <button className="bg-amber-300 p-2 text-gray-700 font-semibold shadow-2xl rounded hover:bg-amber-400 transition duration-300">
            Search
          </button>
        </div>

      
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col text-sm mr-4">
            <p className="text-gray-100">Deliver to:</p>
            <span className="font-bold text-white flex items-center gap-1">
              <select
                name="country"
                className="focus:outline-none cursor-pointer max-w-[100px] bg-transparent"
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                <option value="Kenya">Kenya</option>
                {countries.map((country: any) => (
                  <option className="text-black" key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </span>
          </div>

          {!isAuthenticated ? (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 px-3 py-2 rounded bg-red-600 text-white font-bold hover:bg-red-700 transition duration-300 text-sm"
              >
                Sign In <FaUser />
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 px-3 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-300 text-sm"
              >
                Sign Up <FaUserCircle />
              </Link>
            </div>
          ): (
            <button
             onClick={() => setLeave(true)}
             className="text-white cursor-pointer"><FaUserAlt /></button>
          )}

          
          <button
            className="ml-4 relative cursor-pointer text-white text-2xl"
            onClick={() => setOpenCart(true)}
          >
            <FaCartPlus />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>

        
        <div className="flex md:hidden items-center gap-4">
          <button
            className="text-white text-xl"
            onClick={() => {
              const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
              searchInput?.focus();
            }}
          >
            <FaSearch />
          </button>

          <button
            className="relative cursor-pointer text-white text-xl"
            onClick={() => setOpenCart(true)}
          >
            <FaCartPlus />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#382d33] transform transition-transform duration-300 z-50 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={headerStuff.logo}
                alt={headerStuff.title}
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-bold text-xl text-white">{headerStuff.title}</span>
            </div>

         
            <div className="relative mb-4">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full p-2 pl-10 rounded bg-[#414145] border-gray-300 text-[#f3e6f3] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-blue-500" />
            </div>

             
            <div className="mb-4">
              <p className="text-gray-100 text-sm mb-1">Deliver to:</p>
              <select
                name="country"
                className="w-full p-2 rounded bg-[#414145] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                <option value="Kenya">Kenya</option>
                {countries.map((country: any) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          
          {!isAuthenticated && (
            <div className="p-4 space-y-4">
              <Link
                to="/login"
                className="flex items-center gap-3 px-4 py-3 rounded bg-red-600 text-white font-bold hover:bg-red-700 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUser /> Sign In
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-3 px-4 py-3 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUserCircle /> Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      <SideCart openCart={openCart} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems} />
      <Logout leave={leave} setLeave={setLeave} />

      <Home
        cartCount={cartCount}
        setCartCount={SetCartCount}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
};

export default Header;
