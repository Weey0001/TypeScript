import {
	FlatList,
	StyleSheet,
	Text,
	View,
} from "react-native"
import { Place_Interface } from "../../models/place"
import { PlaceItem } from "./PlaceItem"
import { FC } from "react"
import { Colors } from "../../constants/Colors"

interface PlacesListsProps {
	places?: Place_Interface[]
}

const PlacesLists: FC<PlacesListsProps> = ({
	places,
}) => {
	if (!places || places.length === 0) {
		return (
			<View style={style.fallBackContainer}>
				<Text style={style.fallBackText}>
					No places added yet - start adding some
				</Text>
			</View>
		)
	}
	return (
		<FlatList
			data={places}
			keyExtractor={(item: Place_Interface) =>
				item.id
			}
			renderItem={({
				item,
			}: {
				item: Place_Interface
			}) => (
				<PlaceItem
					place={item}
					onSelect={() => {}}
				/>
			)}
		/>
	)
}

export default PlacesLists

const style = StyleSheet.create({
	fallBackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	fallBackText: {
		fontSize: 16,
		color: Colors.primary200,
	},
})
