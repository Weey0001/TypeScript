import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const exp_adtr = createEntityAdapter({
	selectId: (exp) => exp.id,
});

export const exp_slice = createSlice({
	name: "expenses",
	initialState: exp_adtr.getInitialState(),
	reducers: {
		addExpense: exp_adtr.addOne,
		deleteExpense: exp_adtr.removeOne,
		updateExpense: exp_adtr.updateOne,
	},
});

export const exp_add = exp_slice.actions.addExpense;
export const exp_del = exp_slice.actions.deleteExpense;
export const exp_upd = exp_slice.actions.updateExpense;
export const exp_slcts = exp_adtr.getSelectors((state) => state.expenses);
