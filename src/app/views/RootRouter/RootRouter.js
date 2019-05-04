import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../AppRouter';
import { AuthProvider } from '../../context/Auth';

export default () => (
  <AuthProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AuthProvider>
);
