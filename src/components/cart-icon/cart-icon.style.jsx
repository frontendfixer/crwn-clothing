import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/images/shopping-bag.svg';

export const IconContainer = styled.span`
  cursor: pointer;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
