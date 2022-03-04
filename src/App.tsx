import React from 'react';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <AddPostForm />
      <PostsList />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-purple-700 text-white font-bold">
      <h1 className="">Social Media App</h1>
      <nav>
        <div className="">Posts</div>
        <div className="">Users</div>
      </nav>
    </header>
  );
}

export default App;
