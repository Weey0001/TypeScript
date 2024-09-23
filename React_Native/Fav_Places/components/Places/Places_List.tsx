import {
	FlatList,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { PlaceType } from "../../models/places";
import Place_Item from "./Place_Item";
import { Colors } from "../../constants/colors";

const Places_List = ({
	places,
}: {
	places: PlaceType[];
}) => {
	if (!places || places.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No places added yet! start adding some
				</Text>
			</View>
		);
	}
	return (
		<FlatList
			data={places}
			style={styles.list}
			keyExtractor={(item: any) => item.id}
			renderItem={({ item }) => (
				<Place_Item
					place={item}
					onSelect={() => {}}
				/>
			)}
		/>
	);
};

export default Places_List;

const styles = StyleSheet.create({
	list: {
		margin: 24,
	},
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	fallbackText: {
		fontSize: 16,
		color: Colors.primary200,
	},
});
