import {
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

type otln_prps = {
	onPress: () => void;
	icon: any;
	txt: string;
};

const Outlin_btn = ({
	onPress,
	icon,
	txt,
}: otln_prps) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.btn,
				pressed && styles.pressed,
			]}
		>
			<Ionicons
				name={icon}
				size={24}
				color={Colors.primary500}
				style={styles.icon}
			/>
			<Text style={styles.text}>{txt}</Text>
		</Pressable>
	);
};

export default Outlin_btn;

const styles = StyleSheet.create({
	btn: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		borderColor: Colors.primary500,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		elevation: 2,
		shadowColor: "black",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		flexDirection: "row",
	},
	pressed: {
		opacity: 0.7,
		backgroundColor: Colors.primary100,
	},
	icon: {
		marginRight: 6,
	},
	text: {
		color: Colors.primary500,
	},
});
