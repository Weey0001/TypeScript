import {
	StyleSheet,
	Text,
	Pressable,
} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Colors } from "../../constants/Colors"

type OutlineProps = {
	onPress: () => void
	icon: any
	Intext: string
}

const OutlineButton = ({
	onPress,
	icon,
	Intext,
}: OutlineProps) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				pressed && styles.pressed,
			]}
			onPress={onPress}
		>
			<Ionicons
				style={styles.icon}
				name={icon}
				color={Colors.primary500}
				size={18}
			/>
			<Text style={styles.text}>{Intext}</Text>
		</Pressable>
	)
}

export default OutlineButton

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderColor: Colors.primary500,
		borderWidth: 1,
	},
	pressed: {
		opacity: 0.7,
	},
	icon: {
		marginRight: 6,
	},
	text: {
		color: Colors.primary500,
	},
})
