import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { add_fav, rmv_fav } from "../store/redux/favorite";

let MealDetailScreen = ({ route, navigation }) => {
	const favoriteMealsIds = useSelector((state) => state.favoritesMeals.ids);

	const dispatch = useDispatch();
	let mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	let mealIsFavorite = favoriteMealsIds.includes(mealId);

	let changeFavoriteStatusHandler = () => {
		if (mealIsFavorite) {
			dispatch(rmv_fav({ id: mealId }));
		} else {
			dispatch(add_fav({ id: mealId }));
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavorite ? "star" : "star-outline"}
						onPress={changeFavoriteStatusHandler}
						color="white"
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatusHandler]);

	const { duration, complexity, affordability } = selectedMeal;

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

			<Text style={styles.title}>{selectedMeal.title}</Text>

			<MealDetails
				duration={duration}
				complexity={complexity}
				affordability={affordability}
				textStyle={styles.textDetails}
			/>

			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingerdients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

let styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 24,
		margin: 8,
		color: "white",
	},
	textDetails: {
		color: "white",
	},
	subtitleContainer: {
		marginHorizontal: 24,
		marginVertical: 4,
		borderBottomColor: "white",
		borderBottomWidth: 2,

		padding: 6,
	},
	subtitle: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
	},
});
