import { FaHome, FaUser, FaInbox, FaCartPlus, FaHandHolding, FaCaretLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const AdminDashboard = () => {
  return (
    <div className="bg-black">
        <div className=" ">
            <h1 className="text-white font-bold text-2xl">Admin Dashboard</h1>
        </div>
        <div>
            <span>Menu</span>
            {[
                { to: '/main/panel' , label: "DashBoard" },
                { to: '/users' , label: "Users" },
                { to: '/Products' , label: "Products" },
                { to: '/orders' , label: "Orders" },
                { to: '/messages' , label: "Messages" },
                { to: '/categories' , label: "Categories" },
            ].map((menu: any, index: any) => (
              <div key={index}>
                <Link to={menu.to} >
                  {menu.label}
                </Link>
              </div>
            ))
            }
        </div>
    </div>
  )
}

export default AdminDashboard