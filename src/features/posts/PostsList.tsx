import { useAppSelector } from '../../app/hooks';
import { selectAllPosts } from './postsSlice';

export default function PostsList() {
  const posts = useAppSelector(selectAllPosts);

  return (
    <section className="max-w-4xl">
      <h2>Posts</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.slice(0, 100)}</p>
        </article>
      ))}
    </section>
  );
}
