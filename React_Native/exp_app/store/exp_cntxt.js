import { createContext, useReducer } from "react";
export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	setExpenses: (expenses) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {},
});
const expensesReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [action.payload, ...state];
		case "SET":
			const inverted = action.payload.reverse();
			return inverted;
		case "UPDATE":
			const updatableExpenseIndex = state.findIndex(
				(expense) => expense.id === action.payload.id,
			);
			const updatableExpense = state[updatableExpenseIndex];
			const updatedItem = {
				...updatableExpense,
				...action.payload.data,
			};
			const expensesArray = [...state];
			expensesArray[updatableExpenseIndex] = updatedItem;
			return expensesArray;
		case "DELETE":
			return state.filter((expense) => expense.id !== action.payload.id);
		default:
			return state;
	}
};
const ExpensesContextProvider = ({ children }) => {
	const [expensesState, dispatch] = useReducer(expensesReducer, []);

	const addExpense = (expensesData) => {
		dispatch({ type: "ADD", payload: expensesData });
	};

	const setExpenses = (expenses) => {
		dispatch({ type: "SET", payload: expenses });
	};

	const deleteExpense = (id) => {
		dispatch({ type: "DELETE", payload: { id } });
	};

	const updateExpense = (id, expensesData) => {
		dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
	};

	let context = {
		expenses: expensesState,
		setExpenses: setExpenses,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};

	return (
		<ExpensesContext.Provider value={context}>
			{children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContextProvider;
