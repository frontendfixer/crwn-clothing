import './directory.style.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ directoryItems }) => (
  <div className="directory-container">
    {directoryItems.map(directory => (
      <DirectoryItem key={directory.id} category={directory} />
    ))}
  </div>
);

export default Directory;
