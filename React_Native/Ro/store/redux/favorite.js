import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: {
		ids: [],
	},
	reducers: {
		add_fav: (state, action) => {
			state.ids.push(action.payload.id);
		},
		rmv_fav: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
		},
	},
});

export const add_fav = favoritesSlice.actions.add_fav;
export const rmv_fav = favoritesSlice.actions.rmv_fav;
export default favoritesSlice;
