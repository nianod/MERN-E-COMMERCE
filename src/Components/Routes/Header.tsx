import { useState } from "react";
import { FaSearch } from "react-icons/fa";

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

       <div className="relative flex items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a product..."
          className="p-2 pl-10 w-64 bg-white rounded-lg border border-gray-300 text-[#030203] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
