type SideCartProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
};

const SideCart: React.FC<SideCartProps> = ({ openCart, setOpenCart }) => {
  return (
    <div>
      {openCart && (
        <div
          className="fixed inset-0 z-20 backdrop-blur-2xl"
          onClick={() => setOpenCart(false)}
        ></div> 
      )}
      <div
        className={`fixed right-0 top-0 bottom-0 w-52 bg-amber-500 z-50 transform transition-transform ease-in-out ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-1 text-gray-700 font-bold right-2 cursor-pointer hover:rotate-90 transition-transform duration-300"
          onClick={() => setOpenCart(false)}
        >
           ╳
        </button>
        <h2 className="font-semibold mt-4 text-center">Your Cart</h2>
      </div>
    </div>
  )
}

export default SideCart
