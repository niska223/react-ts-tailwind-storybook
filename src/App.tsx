import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppNav from './AppNav';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
