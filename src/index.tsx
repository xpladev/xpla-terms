import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privacy from './Privacy';
import Cookie from './Cookie';
import HelloPalCookie from './components/HelloPal/Cookie';
import HelloPalTou from './components/HelloPal/Tou';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Privacy />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/cookie-policy" element={<Cookie />} />
      <Route path="/hello-pal/tou" element={<HelloPalTou />} />
      <Route path="/hello-pal/cookie" element={<HelloPalCookie />} />
    </Routes>
  </BrowserRouter>
);
