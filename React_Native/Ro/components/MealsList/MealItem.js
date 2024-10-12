import {
	View,
	Text,
	Image,
	Pressable,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

let MealItem = ({
	id,
	title,
	image,
	duration,
	complexity,
	affordability,
}) => {
	const navigation= useNavigation().navigate;

	let selectMealItemHandler = () => {
		navigation("MealDetail", {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				onPress={selectMealItemHandler}
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) =>
					pressed ? styles.buttonPressed : null
				}
			>
				<View style={styles.innerContainer}>
					<Image
						source={{ uri: image }}
						style={styles.image}
					/>
					<Text style={styles.title}>{title}</Text>
				</View>
				<MealDetails
					duration={duration}
					complexity={complexity}
					affordability={affordability}
				/>
			</Pressable>
		</View>
	);
};

export default MealItem;

let styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	image: {
		width: "100%",
		height: 200,
	},

	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},

	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
