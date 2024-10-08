import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import All_plcs from "./sreens/All_plcs";
import Add_plcs from "./sreens/Add_plcs";
import Plcs_dtls from "./sreens/Plcs_dtls";
import Icn_Btn from "./UI/Icn_Btn";
import { Colors } from "./constants/colors";
import Map from "./sreens/Map";
import {
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import { init } from "./util/database";
// splash screen
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
	useLayoutEffect(() => {
		(async () => {
			init();
			await SplashScreen.hideAsync();
		})();
	}, []);
	return (
		<>
			<StatusBar style="dark" />
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
						name="All_plcs"
						component={All_plcs}
						options={({ navigation }) => {
							return {
								title: "All Your favorite places",
								headerRight: ({ tintColor }) => (
									<Icn_Btn
										icon="add"
										size={24}
										color={tintColor}
										onPress={() => {
											navigation.navigate(
												"Add_plcs",
											);
										}}
									/>
								),
							};
						}}
					/>
					<Stack.Screen
						name="Add_plcs"
						component={Add_plcs}
						options={{
							title: "Add Favorite place",
						}}
					/>
					<Stack.Screen
						name="Plcs_dtls"
						component={Plcs_dtls}
						options={{
							title: "Place details",
						}}
					/>
					<Stack.Screen
						name="Map"
						component={Map}
						options={{
							title: "Map View",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
