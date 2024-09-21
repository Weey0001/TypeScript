import {
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Icn_Btn_type = {
	icon: any;
	size: number;
	color: string | undefined;
	onPress: () => void;
};

const Icn_Btn = ({
	icon,
	size,
	color,
	onPress,
}: Icn_Btn_type) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.btn,
				pressed && styles.pressed,
			]}
			onPress={onPress}
		>
			<Ionicons
				name={icon}
				size={size}
				color={color}
			/>
		</Pressable>
	);
};

export default Icn_Btn;

const styles = StyleSheet.create({
	btn: {
		padding: 8,
		margin: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	pressed: {
		opacity: 0.7,
	},
});
