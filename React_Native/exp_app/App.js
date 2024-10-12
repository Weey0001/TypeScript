import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/iconButton";
import ExpensesContextProvider from "./store/exp_cntxt";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
	return (
		<BottomTab.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				headerTintColor: "white",
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
				headerRight: ({ tintColor }) => (
					<IconButton
						icon="add"
						size={24}
						color={tintColor}
						onPress={() => {
							navigation.navigate("ManageExpense");
						}}
					/>
				),
			})}
		>
			<BottomTab.Screen
				name="RecentExpenses"
				component={RecentExpenses}
				options={{
					title: "Recent Expenses",
					tabBarLabel: "Recent",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="hourglass-outline" size={size} color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="AllExpenses"
				component={AllExpenses}
				options={{
					title: "Recent Expenses",
					tabBarLabel: "All",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="calendar-outline" size={size} color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar hidden={true} />
			<ExpensesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
							headerTintColor: "white",
							contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
						}}
					>
						<Stack.Screen
							name="ExpensesOverview"
							component={ExpensesOverview}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="ManageExpense"
							component={ManageExpense}
							options={{
								title: "Manage Expense",
								presentation: "modal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ExpensesContextProvider>
		</>
	);
}
