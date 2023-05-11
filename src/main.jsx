import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import App from './App';
import { CartProvider } from './context/cart.context';
import { CategoriesProvider } from './context/categories.context';
import { CheckoutProvider } from './context/checkout.context';
import { UserProvider } from './context/user.context';
import './main.scss';

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-block-start: 20px;
  padding-block-end: 40px;
  padding-inline: 30px;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CheckoutProvider>
            <CartProvider>
              <Container>
                <App />
              </Container>
            </CartProvider>
          </CheckoutProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
