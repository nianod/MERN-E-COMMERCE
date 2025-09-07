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
        ></div>
      )}
      <div
        className={`fixed right-0 top-0 bottom-0 w-52 bg-amber-500 z-50 transform transition-transform ease-in-out ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2>Your Cart</h2>
      </div>
    </div>
  );
};

export default SideCart;
