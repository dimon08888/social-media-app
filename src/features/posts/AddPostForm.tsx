import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postAdd } from './postsSlice';
import { useState } from 'react';
import { selectAllUsers } from '../users/usersSlice';

export default function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);

  function onAddPost() {
    if (title && content) {
      dispatch((postAdd as any)(title, content, userId));
      setTitle('');
      setContent('');
      setUserId('');
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-center font-bold text-2xl my-5 text-white">Add new post</h2>
      <form className="">
        <label htmlFor="postTitle" className="block font-bold text-white py-2">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          className="w-full rounded px-2 h-7"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="postAuthor" className="block font-bold text-white py-2">
          Author:
        </label>
        <select
          className="text-black cursor-pointer rounded"
          id="postAuthor"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        >
          <option value=""></option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <label htmlFor="postContent" className="block font-bold text-white py-2">
          Content:
        </label>
        <textarea
          id="postContent"
          className="w-full rounded px-2"
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>

        <button
          onClick={onAddPost}
          className={
            'bg-slate-500 block rounded px-4 py-2 mt-2 font-bold text-white' +
            (canSave ? ' hover:bg-slate-400' : '')
          }
          disabled={!canSave}
          type="button"
        >
          Save post
        </button>
      </form>
    </section>
  );
}
