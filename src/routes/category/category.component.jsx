import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './category.style.scss';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      <h2 className="title">{category}</h2>
      <div className="category-body">
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
