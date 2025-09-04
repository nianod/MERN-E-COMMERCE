import { useState } from "react";
import { FaSearch, FaUser, FaUserCircle, FaCartPlus } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { Country, City, State } from "country-state-city";

const Header = () => {
  const [search, setSearch] = useState<string>("")
  const [countries, SetCountry] = useState<any>(Country.getAllCountries())

  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const handleCountryChange = (isocode: String) => {
    const country = countries.find((c: any) => c.isocode === isocode)
    selectedCountry(country)
  }

  console.log(countries)

  const headerStuff = {
    logo: "/download.jpg",
    title: "ARNOLD-SELLERS",
  };

  return (
    <div className="flex items-center justify-between top-0 fixed w-full bg-[#a1507c] px-6 py-3 shadow-md z-50">
       <div className="flex items-center gap-2">
        <img
          src={headerStuff.logo}
          alt={headerStuff.title}
          className="h-10 w-10 rounded-full object-cover"
        />
        <h2 className="font-bold text-xl text-white">{headerStuff.title}</h2>
      </div>

       <div className="flex-1 mx-8 relative flex items-center max-w-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a product..."
          className="p-2 pl-10 w-full rounded bg-white border border-gray-300 text-[#030203] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 text-gray-500" />
      </div>

       <div className="hidden md:flex flex-col text-sm mr-6">
        <p className="text-gray-100">Deliver to:</p>
        <span className="font-bold text-white flex items-center gap-1">
          <select name="country"
            className="focus:outline-none cursor-pointer max-w-[100px]"
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="Kenya">Kenya</option>
            {countries.map((country: any) => (
              <option className="text-black" key={country.isoCode} value={country.isoCode}>{country.name}</option>
            ))}
          </select>
          {/* <ReactCountryFlag countryCode="KE" svg style={{ width: "1.5em", height: "1.5em" }} /> Kenya */}
        </span>
      </div>

       <div className="flex gap-3">
        <Link
          to="/login"
          className="flex items-center gap-2 px-3 py-2 rounded bg-red-600 text-white font-bold hover:bg-red-700 transition duration-300"
        >
          Sign In <FaUser />
        </Link>
        <Link
          to="/register"
          className="flex items-center gap-2 px-3 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-300"
        >
          Sign Up <FaUserCircle />
        </Link>
      </div>

       <div className="ml-6 relative cursor-pointer text-white text-2xl">
        <FaCartPlus />
         <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
          2
        </span>
      </div>
    </div>
  );
};

export default Header;
