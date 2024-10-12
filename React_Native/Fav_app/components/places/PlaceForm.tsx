import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native"
import React, { useState } from "react"
import { Colors } from "../../constants/Colors"
import ImagePicker from "./imagePicker"
import LocationPicker from "./LocationPicker"

const PlaceForm = () => {
	const [enteredText, setEnteredText] =
		useState<string>("")

	const text_Handler = (text: string): void =>
		setEnteredText(text)

	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.lebel}>Title</Text>
				<TextInput
					value={enteredText}
					onChangeText={text_Handler}
					style={styles.input}
				/>
				<ImagePicker />
				<LocationPicker />
			</View>
		</ScrollView>
	)
}

export default PlaceForm

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 24,
	},
	lebel: {
		fontWeight: "bold",
		marginBottom: 4,
		color: Colors.primary500,
	},
	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		borderBottomColor: Colors.primary700,
		borderBottomWidth: 2,
		fontSize: 16,
		backgroundColor: Colors.primary100,
	},
})
