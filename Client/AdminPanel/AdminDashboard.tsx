import { FaHome, FaUser, FaInbox, FaShoppingCart, FaLayerGroup, FaBox } from "react-icons/fa";
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
    <div className="bg-black text-white w-64 min-h-screen p-4">
      <h1 className="font-bold text-2xl mb-6">Admin Dashboard</h1>
      <span className="font-semibold block mb-3">Menu</span>
      <div className="flex flex-col gap-2">
        {menuItems.map((menu, index) => (
          <Link
            key={index}
            to={menu.to}
            className="p-3 flex items-center gap-2 rounded hover:bg-gray-800 hover:text-blue-400 transition"
          >
            {menu.icon} {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
