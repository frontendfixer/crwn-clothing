import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CartProvider } from './context/cart.context';
import { CheckoutProvider } from './context/checkout.context';
import { ProductsProvider } from './context/produts.context';
import { UserProvider } from './context/user.context';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CheckoutProvider>
            <CartProvider>
              <div className="container">
                <App />
              </div>
            </CartProvider>
          </CheckoutProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
