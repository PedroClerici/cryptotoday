import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals/_index.scss';
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
