import { createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type Post = {
  id: string;
  title: string;
  content: string;
};

type PostsState = {
  posts: Post[];
};

const initialState: PostsState = {
  posts: [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' },
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
  },
});

export const { postAdd } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.posts;
