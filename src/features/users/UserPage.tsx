import { useAppSelector } from '../../app/hooks';
import { selectUserById } from './usersSlice';
import { Link, useParams } from 'react-router-dom';
import { selectPostsByUser } from '../posts/postsSlice';

export function UserPage() {
  const { userId } = useParams();
  const user = useAppSelector(state => selectUserById(state, userId as string));
  const userPosts = useAppSelector(state => selectPostsByUser(state, userId as string));

  if (!user) {
    return <div>User with id "{userId}" not found.</div>;
  }

  return (
    <section className="text-center">
      <h2 className="mt-5 text-white text-xl font-bold">{user.name}</h2>
      <div className="flex justify-center">
        <ul>
          {userPosts.map(post => (
            <li className=" mt-5 hover:underline text-white " key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
