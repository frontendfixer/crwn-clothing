import { useContext } from 'react';

import './product-card.style.scss';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const handelAddToCart = () => addItemToCart(product);

  return (
    <div className="product-card__container">
      <div className="product-card__image">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="product-card__footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handelAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
