import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Posts } from './features/posts/Posts';
import { Post } from './features/posts/Post';
import { Users } from './features/users/Users';
import { EditPostForm } from './features/posts/EditPostForm';
import { UserPage } from './features/users/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/posts/:postId/edit" element={<EditPostForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header className="bg-black text-white font-bold">
      <nav className="grid grid-cols-3 items-center">
        <div>
          <Link
            to={'/'}
            className="bg-slate-500 px-3 py-2 rounded hover:bg-slate-400 cursor-pointer transition-colors duration-400 inline-block ml-2"
          >
            Posts
          </Link>
          <Link
            to={'/users'}
            className="bg-slate-500 px-3 py-2 rounded hover:bg-slate-400 cursor-pointer transition-colors duration-400 inline-block ml-2"
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
