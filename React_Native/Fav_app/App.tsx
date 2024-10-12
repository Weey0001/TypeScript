import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import All_places from "./screens/All_places"
import Add_place from "./screens/Add_place"
import IconButton from "./components/UI/IconButton"
import { Fragment } from "react"
import { Colors } from "./constants/Colors"

const Stack = createNativeStackNavigator()

const App = (): JSX.Element => (
	<Fragment>
		<StatusBar style="auto" />
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: Colors.primary500,
					},
					headerTintColor: Colors.gray700,
					contentStyle: {
						backgroundColor: Colors.gray700,
					},
				}}
			>
				<Stack.Screen
					name="All_places"
					component={All_places}
					options={({
						navigation: { navigate },
					}) => ({
						title: "Your Favorite Places",
						headerRight: ({ tintColor }) => (
							<IconButton
								icon="add"
								color={tintColor}
								size={24}
								onPress={() => {
									navigate("Add_place")
								}}
							/>
						),
					})}
				/>
				<Stack.Screen
					name="Add_place"
					component={Add_place}
					options={{
						title: "Add a new place",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</Fragment>
)

export default App
