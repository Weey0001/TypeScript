import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { PlaceType } from "../../models/places";

type Place_Item_type = {
	place: PlaceType;
	onSelect: () => void;
};

const Place_Item = ({
	place,
	onSelect,
}: Place_Item_type) => {
	return (
		<Pressable onPress={onSelect}>
			<Image source={{ uri: place.imageUri }} />
			<View style={[]}>
				<Text style={styles.txt}>
					{place.title}
				</Text>
				<Text style={styles.txt}>
					{place.address}
				</Text>
			</View>
			<Text>Place_Item</Text>
		</Pressable>
	);
};

export default Place_Item;

const styles = StyleSheet.create({
	txt: {
		color: "white",
	},
});
