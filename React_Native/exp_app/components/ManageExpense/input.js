import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function Input_comp({
	label,
	textInputConfig,
	style,
	invalide,
}) {
	let inputStyle = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		inputStyle.push(styles.inputMultiline);
	}

	if (invalide) {
		inputStyle.push(styles.invalideInput);
	}

	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={[styles.label, invalide && styles.invalideLabel]}>
				{label}
			</Text>
			<TextInput {...textInputConfig} style={inputStyle} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 8,
	},
	label: {
		fontSize: 12,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: GlobalStyles.colors.primary100,
		color: GlobalStyles.colors.primary700,
		padding: 6,
		borderRadius: 6,
		fontSize: 18,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top",
	},
	invalideLabel: {
		color: GlobalStyles.colors.error500,
	},
	invalideInput: {
		backgroundColor: GlobalStyles.colors.error50,
	},
});
