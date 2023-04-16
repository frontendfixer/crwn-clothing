import CategoryItem from './../category-item/category-item.component';
import './directory.style.scss';

const Directory = ({ directoryItems }) => (
  <div className='directory-container'>
    {directoryItems.map((category) => {
      return <CategoryItem key={category.id} category={category} />;
    })}
  </div>
);

export default Directory;
