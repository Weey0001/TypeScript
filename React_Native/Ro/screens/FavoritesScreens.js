import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreens = () => {
	const favoritesMealsIds = useSelector((state) => state.favoritesMeals.ids);
	const favoritesMeals = MEALS.filter((meal) =>
		favoritesMealsIds.includes(meal.id),
	);

	if (favoritesMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>
					You have no favorites yet. Start adding some!
				</Text>
			</View>
		);
	}
	return <MealsList items={favoritesMeals} />;
};

export default FavoritesScreens;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
	},
	text: {
		fontSize: 18,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
});
