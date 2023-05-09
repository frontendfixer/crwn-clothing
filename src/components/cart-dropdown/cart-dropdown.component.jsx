import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.style.scss';
import { CartContext } from '../../context/cart.context';
import { CheckoutContext } from '../../context/checkout.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const navigate = useNavigate();

  const { cartItems, cartCount, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  const { isCheckoutOpen, setIsCheckoutOpen } = useContext(CheckoutContext);

  const handelCheckout = () => {
    if (cartCount) setIsCheckoutOpen(!isCheckoutOpen);
  };

  useEffect(() => {
    if (isCheckoutOpen) {
      setIsCartOpen(!isCartOpen);
      navigate('/checkout');
      setIsCheckoutOpen(!isCheckoutOpen);
    }
  }, [isCartOpen, isCheckoutOpen, navigate, setIsCartOpen, setIsCheckoutOpen]);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={handelCheckout}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
