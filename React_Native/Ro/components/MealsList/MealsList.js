import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
	let renderMealsItem = (itemData) => {
		const item = itemData.item;
		const mealProps = {
			id: item.id,
			title: item.title,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
			image: item.imageUrl,
		};
		return <MealItem {...mealProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderMealsItem}
			/>
		</View>
	);
};

export default MealsList;

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 16,
	},
});
