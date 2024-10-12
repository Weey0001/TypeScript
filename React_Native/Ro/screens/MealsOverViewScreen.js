import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

let MealsOverViewScreen = ({ route, navigation }) => {
	let { categoryId } = route.params;

	const displayMeals = MEALS.filter((meal) => {
		return meal.categoryIds.indexOf(categoryId) >= 0;
	});

	useLayoutEffect(() => {
		let categoryTitle = CATEGORIES.find(
			(category) => category.id === categoryId,
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [categoryId, navigation]);

	return <MealsList items={displayMeals} />;
};

export default MealsOverViewScreen;
