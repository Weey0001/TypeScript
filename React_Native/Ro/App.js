import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import CategoriesSreens from "./screens/CategoriesSreens";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreens from "./screens/FavoritesScreens";

import { store } from "./store/redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

let DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#381300" },
				headerTintColor: "white",
				sceneContainerStyle: { backgroundColor: "#380000" },
				drawerContentStyle: { backgroundColor: "#381300" },
				drawerInactiveTintColor: "#82555a",
				drawerActiveTintColor: "#c2c2c2",
				drawerActiveBackgroundColor: "#623739",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesSreens}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreens}
				options={{
					title: "Favorites",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" size={size} color={color} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};
export default function App() {
	return (
		<>
			<StatusBar backgroundColor="#381300" />
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="MealsCategories"
						screenOptions={{
							headerStyle: { backgroundColor: "#381300" },
							headerTintColor: "white",
							contentStyle: {
								backgroundColor: "#381300",
							},
						}}
					>
						<Stack.Screen
							name="DrawerCategories"
							component={DrawerNavigation}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsOverView"
							component={MealsOverViewScreen}
						/>
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							options={{
								title: "About the Meal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</>
	);
}                                                                                                                                                          