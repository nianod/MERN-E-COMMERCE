import { FaHome, FaUser, FaInbox, FaShoppingCart, FaLayerGroup, FaBox, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type MenuItem = {
  to: string;
  label: string;
  icon: any;
};

const menuItems: MenuItem[] = [
  { to: '/main/panel', label: "Dashboard", icon: <FaHome /> },
  { to: '/users', label: "Users", icon: <FaUser /> },
  { to: '/products', label: "Products", icon: <FaBox /> },
  { to: '/orders', label: "Orders", icon: <FaShoppingCart /> },
  { to: '/messages', label: "Messages", icon: <FaInbox /> },
  { to: '/categories', label: "Categories", icon: <FaLayerGroup /> },
];

const AdminDashboard = () => {
  return (
    <div className="bg-black text-white w-64 min-h-screen p-3">
      <h1 className="font-bold text-2xl mb-6">Admin Dashboard</h1>
      <span className="font-semibold block mb-3">Menu</span>
      <div className="flex flex-col gap-2">
        {menuItems.map((menu, index) => (
          <Link
            key={index}
            to={menu.to}
            className="p-[8px] flex items-center gap-2 rounded hover:bg-gray-800 hover:text-blue-400 transition"
          >
            {menu.icon} {menu.label}
          </Link>
        ))}
        <div className="mt-24">
          <button className="cursor-pointer flex items-center gap-2 p-2 rounded hover:bg-gray-800 hover:text-blue-400 transition w-full"><FaCog />Settings</button>
          <button className="cursor-pointer flex items-center gap-2 p-2 rounded hover:bg-gray-800 hover:text-blue-400 transition w-full"><FaSignOutAlt/>Log Out</button>
        </div>
      </div>
    </div>
  )
};

export default AdminDashboard;
