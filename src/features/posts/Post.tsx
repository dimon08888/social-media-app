import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectAllPosts } from './postsSlice';

export function Post() {
  const { postId } = useParams();
  const post = useAppSelector(state =>
    selectAllPosts(state).find(post => post.id === postId),
  );

  if (!post) {
    return <div>Post with id "{postId}" not found.</div>;
  }

  return <div>{JSON.stringify(post, null, 2)}</div>;
}
