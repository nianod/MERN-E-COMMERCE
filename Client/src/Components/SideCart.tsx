import { FaTrash } from "react-icons/fa";
type SideCartProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideCart: React.FC<SideCartProps> = ({ openCart, setOpenCart }) => {
  return (
    <div>
      {openCart && (
        <div
          className="fixed inset-0 z-20 backdrop-blur-2xl"
          onClick={() => setOpenCart(false)}
        >
          <div
            className={`fixed right-0 top-0 bottom-0 min-w-64 bg-gray-300 z-50 transform transition-transform duration-300 ease-in-out ${
              openCart ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-2 text-gray-700 text-3xl font-bold cursor-pointer hover:rotate-90 transition-transform duration-300"
              onClick={() => setOpenCart(false)}
            >
              ×
            </button>
            <div className="font-semibold mt-4 p-4 overflow-y-auto h-full">
              <p className="text-center text-lg">Your Cart</p>
              <div className="shadow-lg flex items-center justify-between gap-2 bg-white p-2 rounded-lg mt-4">
                <img
                  src="download.jpg"
                  alt="tablet"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 px-2">
                  <p className="font-medium text-gray-800">Tablet</p>
                  <span className="text-green-700 font-semibold">$564</span>
                </div>
                <button className="text-red-600 hover:text-red-800 cursor-pointer" title="Remove from cart">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideCart;
