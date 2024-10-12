import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Input_comp from "./input";
import Cstm_btn from "../UI/Cstm_btn";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

export default function ExpenseForm({
	submitButtonLebel,
	onCancel,
	onSubmit,
	defaultValues,
}) {
	const [inputs, setInput] = useState({
		amount: {
			value: defaultValues ? defaultValues.amount.toString() : "",
			isValide: true,
		},
		date: {
			value: defaultValues ? getFormattedDate(defaultValues.date) : "",
			isValide: true,
		},
		description: {
			value: defaultValues ? defaultValues.description : "",
			isValide: true,
		},
	});

	function inputChangeHandler(inputIdentifier, enteredValue) {
		setInput((curInputs) => {
			return {
				...curInputs,
				[inputIdentifier]: { value: enteredValue, isValide: true },
			};
		});
	}

	function submitHandler() {
		const expenseData = {
			amount: +inputs["amount"].value,
			date: new Date(inputs["date"].value),
			description: inputs["description"].value,
		};

		const amountIsValide = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const dateIsValide = expenseData.date.toString() !== "Invalid Date";
		const descriptionIsValide = expenseData.description.trim().length > 0;
		if (!amountIsValide || !dateIsValide || !descriptionIsValide) {
			setInput((curInputs) => {
				return {
					amount: {
						value: curInputs["amount"].value,
						isValide: amountIsValide,
					},
					date: { value: curInputs["date"].value, isValide: dateIsValide },
					description: {
						value: curInputs["description"].value,
						isValide: descriptionIsValide,
					},
				};
			});
			return;
		}
		onSubmit(expenseData);
	}

	let amount = {
		invalide: !inputs.amount.isValide,
		style: styles.inputsRow,
		label: "Amount",
		textInputConfig: {
			keyboardType: "decimal-pad",
			onChangeText: inputChangeHandler.bind(this, "amount"),
			value: inputs["amount"].value,
		},
	};

	let date = {
		invalide: !inputs.date.isValide,
		style: styles.inputsRow,
		label: "Date",
		textInputConfig: {
			keyboardType: "numeric",
			placeholder: "YYYY-MM-DD",
			maxLength: 10,
			onChangeText: inputChangeHandler.bind(this, "date"),
			value: inputs["date"].value,
		},
	};

	let description = {
		invalide: !inputs.description.isValide,
		label: "Description",
		textInputConfig: {
			multiline: true,
			maxLength: 100,
			onChangeText: inputChangeHandler.bind(this, "description"),
			value: inputs["description"].value,
		},
	};

	const formIsInvalid =
		!inputs.amount.isValide ||
		!inputs.date.isValide ||
		!inputs.description.isValide;
	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your expense</Text>
			<View style={styles.inputContainer}>
				<Input_comp {...amount} />
				<Input_comp {...date} />
			</View>
			<Input_comp {...description} />
			{formIsInvalid && (
				<Text style={styles.errorText}>
					Invalid input values - please check your entered data
				</Text>
			)}
			<View style={styles.btnContainer}>
				<Cstm_btn style={styles.bnt} mode="flat" onPress={onCancel}>
					Cancel
				</Cstm_btn>
				<Cstm_btn style={styles.bnt} onPress={submitHandler}>
					{submitButtonLebel}
				</Cstm_btn>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		marginTop: 80,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginVertical: 24,
		textAlign: "center",
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	inputsRow: {
		flex: 1,
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	bnt: {
		minWidth: 120,
		marginHorizontal: 8,
	},
	errorText: {
		textAlign: "center",
		color: GlobalStyles.colors.error500,
		margin: 8,
	},
});
