import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function ErrorOverlay({ message }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>An error occurred</Text>
			<Text style={styles.message}>{message}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	text: {
		color: "white",
		textAlign: "center",
		marginBottom: 8,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
	message: {
		fontSize: 16,
		color: "white",
		textAlign: "center",
		marginBottom: 24,
	},
});
