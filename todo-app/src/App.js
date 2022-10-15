import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthPage, TodoPage } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
