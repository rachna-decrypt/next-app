//actions and reducers comes inside slice

import {
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

interface userData {
  id: string;
  name: string;
}

const initialState = {
  users: [] as userData[],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data: {
        id: string;
        name: string;
      } = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    deleteUser: (state, action) => {
        state.users = state.users.filter(
            (user) => user.id !== action.payload
          );
    },
    updateUser: (state, action) => {
        let index = state.users.findIndex(
            (user) => user.id === action.payload.id
          );
         state.users[index] = action.payload.name

    }
  },
});

export const { addUser, deleteUser, updateUser } =
  userSlice.actions;
export default userSlice.reducer;
