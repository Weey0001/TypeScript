import {
	configureStore,
} from "@reduxjs/toolkit";
import favoritesSlice from "./favorite";

export const store = configureStore({
	reducer: {
		favoritesMeals: favoritesSlice.reducer,
	},
});
