import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectAllPosts } from './postsSlice';
import { Link } from 'react-router-dom';

export function Post() {
  const { postId } = useParams();
  const post = useAppSelector(state =>
    selectAllPosts(state).find(post => post.id === postId),
  );

  if (!post) {
    return <div>Post with id "{postId}" not found.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.content}</div>
      <Link to={`/posts/${postId}/edit`}>Edit Post</Link>
    </div>
  );
}
