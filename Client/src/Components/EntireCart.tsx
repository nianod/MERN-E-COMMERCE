import type { Product } from "../Types/Product";

type EntireCartProps = {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
};

const EntireCart: React.FC<EntireCartProps> = ({ cartItems }) => {
  
  
  return (
    <div>
       
      {cartItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>  
        </div>
      ))}
    </div>
  );
};

export default EntireCart;