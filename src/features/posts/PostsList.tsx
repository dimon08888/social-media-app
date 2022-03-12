import { useAppSelector } from '../../app/hooks';
import { selectAllPosts } from './postsSlice';
import { Link } from 'react-router-dom';
import { selectUserById } from '../users/usersSlice';

export default function PostsList() {
  const posts = useAppSelector(selectAllPosts);

  return (
    <section className="max-w-2xl mx-auto my-5">
      <h2 className="font-bold text-2xl">Posts:</h2>
      {posts.map(post => {
        return (
          <article key={post.id}>
            <PostAuthor userId={post.user} />
            <h3 className="text-sm font-bold">{post.title}</h3>
            <p className=" border-2 border-solid border-black rounded bg-white my-2 px-2">
              {post.content.slice(0, 100)}
            </p>
            <Link to={`/posts/${post.id}`}>View post</Link>
          </article>
        );
      })}
    </section>
  );
}

export function PostAuthor({ userId }: { userId: string }) {
  const user = useAppSelector(state => selectUserById(state, userId));
  return <span>by {user ? user.name : 'Unknown author'}</span>;
}
