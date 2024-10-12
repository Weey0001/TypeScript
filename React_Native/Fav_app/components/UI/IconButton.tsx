import {
	Pressable,
	StyleSheet,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"

interface IconButtonProps {
	icon: any
	size: number
	color: string | undefined
	onPress: () => void
}

const IconButton: FC<IconButtonProps> = ({
	icon,
	size,
	color,
	onPress,
}) => (
	<Pressable
		onPress={onPress}
		style={({ pressed }) => [
			styles.button,
			pressed && styles.pressed,
		]}
	>
		<Ionicons
			name={icon}
			size={size}
			color={color}
		/>
	</Pressable>
)

export default IconButton

const styles = StyleSheet.create({
	button: {
		padding: 8,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	pressed: {
		opacity: 0.7,
	},
})
