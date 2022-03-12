import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectPostById } from './postsSlice';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostsList';

export function Post() {
  const { postId } = useParams();
  const post = useAppSelector(state => selectPostById(state, postId as string));

  if (!post) {
    return <div>Post with id "{postId}" not found.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.content}</div>
      <PostAuthor userId={post.user} />
      <div>
        <Link to={`/posts/${postId}/edit`}>Edit Post</Link>
      </div>
    </div>
  );
}
