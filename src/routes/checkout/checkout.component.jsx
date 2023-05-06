import { useContext } from 'react';

import './checkout.style.scss';
import { ReactComponent as Add } from '../../assets/images/add.svg';
import { ReactComponent as Minus } from '../../assets/images/remove.svg';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout__container">
      <h2>Checkout items in your cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="checkout__items">
          {cartItems.map(({ id, name, price, quantity, imageUrl }) => {
            return (
              <tr key={id} className="checkout__item">
                <td className="checkout__item-image">
                  <img src={imageUrl} alt={name} />
                </td>
                <td className="checkout__item-name">{name}</td>
                <td className="checkout__item-quantity">
                  <span>
                    <Minus />
                    {quantity}
                    <Add />
                  </span>
                </td>
                <td className="checkout__item-price">{price}</td>
                <td className="checkout__item-total">{price * quantity}</td>
                <td className="checkout__item-remove">
                  <span>X</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
