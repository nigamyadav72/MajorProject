import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CartProvider } from './lib/CartContext';
import './index.css';

const clientId = '379736466398-bskn351unl206g2fmseqbf3odmnaej68.apps.googleusercontent.com'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={clientId}>
    <CartProvider>
      <App />
    </CartProvider>
  </GoogleOAuthProvider>
);
