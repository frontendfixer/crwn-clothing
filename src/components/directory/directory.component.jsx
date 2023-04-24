import './directory.style.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ directoryItems }) => (
  <div className="directory-container">
    {directoryItems.map(directory => (
      <CategoryItem key={directory.id} category={directory} />
    ))}
  </div>
);

export default Directory;
