import { useAppDispatch } from '../../app/hooks';
import { postAdd } from './postsSlice';
import { useState } from 'react';

export default function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useAppDispatch();

  function onAddPost() {
    if (title && content) {
      dispatch((postAdd as any)(title, content));
      setTitle('');
      setContent('');
    }
  }

  const canSave = Boolean(title) && Boolean(content);

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-center font-bold text-2xl my-5">Add new post</h2>
      <form className="">
        <label htmlFor="postTitle" className="block font-bold">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          className="w-full rounded px-2 h-7"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="postContent" className="block font-bold">
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
            'bg-blue-400 block rounded px-4 py-2 mt-2 font-bold text-white' +
            (canSave ? ' hover:bg-blue-600' : '')
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
