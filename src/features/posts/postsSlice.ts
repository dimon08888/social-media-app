import { createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type Post = {
  id: string;
  title: string;
  content: string;
  user: string;
};

type PostsState = {
  posts: Post[];
};

const initialState: PostsState = {
  posts: [
    { id: '1', title: 'First Post!', content: 'Hello!', user: '1' },
    { id: '2', title: 'Second Post', content: 'More text', user: '2' },
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: ((title: string, content: string) => {
        return { payload: { id: nanoid(), title, content } };
      }) as any,
    },
    postUpdate: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdd, postUpdate } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectPostById = (state: RootState, postId: string) =>
  selectAllPosts(state).find(post => post.id === postId);
