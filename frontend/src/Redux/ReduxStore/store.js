import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "../Slices/media";

export const store = configureStore({
  reducer: { media: mediaReducer },
});
