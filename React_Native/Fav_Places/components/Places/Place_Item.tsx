import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { PlaceType } from "../../models/places";
import { Colors } from "../../constants/colors";

type Place_Item_type = {
	place: PlaceType;
	onSelect: (id: any) => void;
};

const Place_Item = ({
	place,
	onSelect,
}: Place_Item_type) => {
	return (
		<Pressable
			onPress={() => onSelect(place.id)}
			style={({ pressed }) => [
				styles.item,
				pressed && styles.pressed,
			]}
		>
			<Image
				source={{ uri: place.imageUri }}
				style={styles.img}
			/>
			<View style={styles.info}>
				<Text style={styles.title}>
					{place.title}
				</Text>
				<Text style={styles.address}>
					{place.address}
				</Text>
			</View>
		</Pressable>
	);
};

export default Place_Item;

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		alignItems: "flex-start",
		borderRadius: 6,
		marginVertical: 12,
		backgroundColor: Colors.primary500,
		elevation: 2,
		shadowColor: "black",
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
	},
	pressed: {
		opacity: 0.9,
	},
	img: {
		flex: 1,
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4,
		height: 100,
	},
	info: {
		flex: 2,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.gray700,
	},
	address: {
		marginTop: 4,
	},
});
