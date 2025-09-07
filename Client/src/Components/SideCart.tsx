
const SideCart = ({openCart, setOpenCart}) => {
  return (
    <div>
        {openCart && (
            <div
              className="fixed inset-0 z-20 backdrop-blur-2xl"
              onClick={() => setOpenCart(false)}
            ></div>
        )}
    <div className={`left-0 top-0 w-52 bg-amber-500 z-50 transform transition-transform ease-in-out ${openCart ? "translate-x-0" : "translate-x-full"}`}>
        <h2>Your Cart</h2>
    </div>
    </div>
  )
}

export default SideCart