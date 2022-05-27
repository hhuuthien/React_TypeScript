import { configureStore } from "@reduxjs/toolkit";
import gioHangReducer from "./reducer/gioHangReducer";

export const store = configureStore({
  reducer: {
    gioHangReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
