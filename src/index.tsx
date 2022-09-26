import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_globals.scss';
import { UserContextProvider } from './context/userContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
);
