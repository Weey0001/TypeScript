import { configureStore } from "@reduxjs/toolkit";
import { exp_slice } from "./str_slice/exp_slice";

export const store = configureStore({
	reducer: {
		expenses: exp_slice.reducer,
	},
});
