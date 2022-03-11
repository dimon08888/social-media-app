import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Posts } from './features/posts/Posts';
import { Post } from './features/posts/Post';
import { Users } from './features/users/Users';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header className="bg-purple-700 text-white font-bold">
      <nav className="grid grid-cols-3 items-center">
        <div>
          <Link
            to={'/'}
            className="bg-purple-800 px-3 py-2 rounded hover:bg-purple-900 cursor-pointer transition-colors duration-400 inline-block"
          >
            Posts
          </Link>
          <Link
            to={'/users'}
            className="bg-purple-800 px-3 py-2 rounded hover:bg-purple-900 cursor-pointer transition-colors duration-400 inline-block"
          >
            Users
          </Link>
        </div>
        <h1 className="text-2xl text-center mx-auto">Social Media App</h1>
      </nav>
    </header>
  );
}

export default App;
