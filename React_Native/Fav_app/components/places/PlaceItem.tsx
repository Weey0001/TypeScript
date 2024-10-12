import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native"
import React, { FC } from "react"
import { Place_Interface } from "../../models/place"

type PlaceItemProps = {
	place: Place_Interface
	onSelect: () => void
}

export const PlaceItem: FC<PlaceItemProps> = ({
	place: { title, imageUri, address },
	onSelect,
}) => {
	return (
		<Pressable onPress={onSelect}>
			<Image source={{ uri: imageUri }} />
			<View>
				<Text>{title}</Text>
				<Text>{address}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({})
