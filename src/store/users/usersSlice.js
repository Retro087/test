import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  archive: [],
  isFetching: false,
  err: false,
  user: null,
  userUpdated: false,
};

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  return response;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    inArchive: (state, action) => {
      let user = state.users.filter((i) => i.id === action.payload);
      state.users = state.users.filter((i) => i.id !== action.payload);
      state.archive.push(...user);
    },
    inActive: (state, action) => {
      let user = state.archive.filter((i) => i.id === action.payload);
      state.archive = state.archive.filter((i) => i.id !== action.payload);
      state.users.push(...user);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((i) => i.id !== action.payload);
    },
    getUser: (state, action) => {
      let user = state.users.find((i) => i.id == action.payload);
      state.user = user;
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        address: { ...state.user.address, city: action.payload.city },
        company: { ...state.user.company, name: action.payload.company },
        username: action.payload.nick,
        email: action.payload.mail,
        phone: action.payload.number,
        name: action.payload.name,
      };
      let index = state.users.findIndex((i) => i.id == action.payload.id);
      state.users[index] = state.user;
      state.userUpdated = true;
    },
    resetUser: (state) => {
      state.user = null;
      state.userUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.err = true;
      console.log(action.error);
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  inArchive,
  inActive,
  deleteUser,
  getUser,
  updateUser,
  resetUser,
} = usersSlice.actions;
export default usersSlice.reducer;
