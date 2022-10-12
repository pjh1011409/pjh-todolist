import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import TodoPage from './pages/todoPage/TodoPage';

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
