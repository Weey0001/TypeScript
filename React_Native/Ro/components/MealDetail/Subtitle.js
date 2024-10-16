import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 24,
		borderBottomColor: "#e2b497",
		borderBottomWidth: 2,
	},
	subtitle: {
		color: "#e2b497",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
