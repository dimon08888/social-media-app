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
        <label htmlFor="postTitle" className="block">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          className="w-full"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="postContent" className="block">
          Content:
        </label>
        <textarea
          id="postContent"
          className="w-full"
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>

        <button
          onClick={onAddPost}
          className="bg-blue-400 block"
          disabled={!canSave}
          type="button"
        >
          Save post
        </button>
      </form>
    </section>
  );
}
