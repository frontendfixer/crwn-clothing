import './cart-item.style.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="item__container">
      <img className="item__image" src={imageUrl} alt={name} />
      <div className="item__details">
        <h2>{name}</h2>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
