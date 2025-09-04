import { useState } from "react";
import { FaSearch, FaUser, FaUserCircle, FaCartPlus } from "react-icons/fa";
import { ReactCountryFlag } from 'react-country-flag'
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState<string>("");

  const headerStuff = {
    logo: "/download.jpg",
    title: "ARNOLD-SELLERS",
  };

  return (
    <div className="flex items-center justify-between top-0 fixed w-full bg-[#a1507c] px-4 py-2 shadow-md">
       <div className="flex items-center gap-2">
        <img
          src={headerStuff.logo}
          alt={headerStuff.title}
          className="h-10 w-10 rounded-full object-cover"
        />
        <h2 className="font-bold text-xl text-white">{headerStuff.title}</h2>
      </div>
      <div className="flex items-center justify-center w-full ml-10 gap-10">
       <div className="relative flex items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a product..."
          className="p-2 pl-10 w-75 rounded-[2px] bg-white border border-gray-300 text-[#030203] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 text-gray-500" />
      </div>
      <div>
        <div>
          <p>
            Deliver to: <span className="font-bold text-white flex items-center gap-1"><ReactCountryFlag countryCode="KE" svg /> Kenya</span>
          </p>
        </div>
      </div>
      <div className="gap-2 flex ">
        <Link to={"/register"} className="flex items-center gap-2 p-2 px-2 rounded bg-red-600 text-white font-bold cursor-pointer hover:bg-red-700 transition duration-300">
          Sign In <FaUser />
        </Link>
        <Link to={"/register"} className="flex items-center gap-2 p-2 px-2 rounded bg-blue-600 text-white font-bold cursor-pointer hover:bg-blue-700 transition duration-300">
          Sign up <FaUserCircle/>
        </Link>
      </div>
      <div>
        <FaCartPlus />
      </div>
      </div>
    </div>
  );
};

export default Header;
