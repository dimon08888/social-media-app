import { createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type User = {
  id: string;
  name: string;
};

type UsersState = {
  users: User[];
};

const initialState: UsersState = {
  users: [
    { id: '1', name: 'Salma Wiegand' },
    { id: '2', name: 'Amina Turcotte' },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users.users;

export const selectUserById = (state: RootState, userId: string) =>
  selectAllUsers(state).find(user => user.id === userId);
