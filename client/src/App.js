import React from 'react'
import './App.css';
import { Router } from '@reach/router'
import Main from './views/main'
import Update from './views/update'
import Detail from './views/detail'

function App() {
  return (
    <div className="App">
      <Router>
        {/* DO NOT confuse with backend API routes */}
        <Main path="/" />
        <Update path="products/:id/edit" />
        <Detail path="products/:id" />
      </Router>
    </div>
  );
}

export default App;
