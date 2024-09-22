import {
	Pressable,
	StyleSheet,
	Text,
} from "react-native";
import { Colors } from "../constants/colors";

type btn_prps = {
	onPress: () => void;
	txt: string;
};

const Btn = ({ onPress, txt }: btn_prps) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.button,
				pressed && styles.pressed,
			]}
		>
			<Text style={styles.text}>{txt}</Text>
		</Pressable>
	);
};

export default Btn;

const styles = StyleSheet.create({
	button: {
		paddingVertical: 8,
		paddingHorizontal: 12,
		margin: 4,
		backgroundColor: Colors.primary800,
		elevation: 2,
		shadowColor: "black",
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		borderRadius: 4,
	},
	pressed: {
		opacity: 0.7,
	},
	text: {
		textAlign: "center",
		fontSize: 16,
		color: Colors.primary100,
	},
});
