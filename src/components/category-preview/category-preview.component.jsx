import { Link } from 'react-router-dom';

import './category-preview.style.scss';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="category-preview-heading">
        <span className="title">{title.toUpperCase()}</span>
        <Link to={title} className="more">
          more&#10940;
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
