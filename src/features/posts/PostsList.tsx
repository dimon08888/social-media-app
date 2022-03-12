import { useAppSelector } from '../../app/hooks';
import { selectAllPosts } from './postsSlice';
import { Link } from 'react-router-dom';
import { selectUserById } from '../users/usersSlice';

export default function PostsList() {
  const posts = useAppSelector(selectAllPosts);

  return (
    <section className="max-w-2xl mx-auto my-5">
      <h2 className="font-bold text-2xl text-white">Posts:</h2>
      {posts.map(post => {
        return (
          <article
            className="border-2 border-solid border-b-gray-100 rounded-lg mb-2 py-3 px-2 mt-1 bg-stone-700"
            key={post.id}
          >
            <PostAuthor userId={post.user} />
            <h3 className="text-sm font-bold text-white">{post.title}</h3>
            <p className="rounded bg-white my-2 px-2">{post.content.slice(0, 100)}</p>
            <Link
              className="bg-slate-500 rounded px-3 py-1 hover:bg-slate-400 text-white font-bold"
              to={`/posts/${post.id}`}
            >
              View post
            </Link>
          </article>
        );
      })}
    </section>
  );
}

export function PostAuthor({ userId }: { userId: string }) {
  const user = useAppSelector(state => selectUserById(state, userId));
  return (
    <span className="italic text-white">by {user ? user.name : 'Unknown author'}</span>
  );
}
