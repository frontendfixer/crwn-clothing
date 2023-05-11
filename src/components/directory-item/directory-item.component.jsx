import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.style';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer>
      <BackgroundImage url={imageUrl} />
      <Body onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
