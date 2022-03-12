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
    <div className="flex justify-center">
      <div className="text-center mt-10">
        <h2 className="font-bold text-white text-2xl mb-5 ">{post.title}</h2>
        <div className="rounded py-2 text-lg bg-white max-w-md mb-5">{post.content}</div>
        <PostAuthor userId={post.user} />
        <div className="mt-5">
          <Link
            className="bg-slate-500 hover:bg-slate-400 rounded px-3 py-1 text-white"
            to={`/posts/${postId}/edit`}
          >
            Edit Post
          </Link>
        </div>
      </div>
    </div>
  );
}
