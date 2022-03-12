import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postUpdate, selectPostById } from './postsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAllUsers } from '../users/usersSlice';

export function EditPostForm() {
  const { postId } = useParams();
  const post = useAppSelector(state => selectPostById(state, postId as string));
  const users = useAppSelector(selectAllUsers);

  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [userId, setUserId] = useState(post ? post.user : '');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onEditPost() {
    if (title && content) {
      dispatch(postUpdate({ id: postId, title, content, user: userId }));
      navigate(`/posts/${postId}`);
    }
  }

  if (!post) {
    return <div>Post with id "{postId}" not found.</div>;
  }

  return (
    <section>
      <h2 className="text-center font-bold text-2xl my-5">Edit post</h2>
      <form className="">
        <label htmlFor="postTitle" className="block font-bold">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          className="w-full rounded px-2 h-7"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="postAuthor" className="block font-bold">
          Author:
        </label>
        <select id="postAuthor" value={userId} onChange={e => setUserId(e.target.value)}>
          <option value=""></option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

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
          onClick={onEditPost}
          className={
            'bg-blue-400 block rounded px-4 py-2 mt-2 font-bold text-white hover:bg-blue-600'
          }
          type="button"
        >
          Save post
        </button>
      </form>
    </section>
  );
}
