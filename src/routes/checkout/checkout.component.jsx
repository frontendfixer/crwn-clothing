import { useContext } from 'react';

import './checkout.style.scss';
import { ReactComponent as Add } from '../../assets/images/add.svg';
import { ReactComponent as Minus } from '../../assets/images/remove.svg';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);

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
          {cartItems.map(cartItem => {
            const { id, name, price, quantity, imageUrl } = cartItem;

            const addCartItemHandler = () => addItemToCart(cartItem);
            const removeCartItemHandler = () => removeItemToCart(cartItem);
            const clearCartItemHandler = () => clearItemFromCart(cartItem);

            return (
              <tr key={id} className="checkout__item">
                <td className="checkout__item-image">
                  <img src={imageUrl} alt={name} />
                </td>
                <td className="checkout__item-name">{name}</td>
                <td className="checkout__item-quantity">
                  <span>
                    <Minus onClick={removeCartItemHandler} />
                    {quantity}
                    <Add onClick={addCartItemHandler} />
                  </span>
                </td>
                <td className="checkout__item-price">${price}</td>
                <td className="checkout__item-total">${quantity * price}</td>
                <td className="checkout__item-remove">
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <span onClick={clearCartItemHandler}>&#10799;</span>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total: </td>
            <td colSpan="2">${cartTotal}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Checkout;
