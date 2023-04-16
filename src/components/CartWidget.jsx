import Badge from "react-bootstrap/Badge";
import { CartDataContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const {cart} = useContext(CartDataContext);
  const badgeTotal = cart.reduce((total, ropa) => total + ropa.buyTotal, 0);

  return (
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
      {badgeTotal > 0 && (
        <Badge pill bg="danger">
          {badgeTotal}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
