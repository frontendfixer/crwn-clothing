import DirectoryContainer from './directory.style';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ directoryItems }) => (
  <DirectoryContainer>
    {directoryItems.map(directory => (
      <DirectoryItem key={directory.id} category={directory} />
    ))}
  </DirectoryContainer>
);

export default Directory;
