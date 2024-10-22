import React from 'react';

import AppRouter from '../ui/components/AppRouter';
import UserProvider from '../ui/context/UserContext';

import '../core/styles/global.css';

function App() {
  return (
    <div id="app">
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
}

export default App;
