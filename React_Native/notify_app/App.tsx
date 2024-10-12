import { StatusBar } from "expo-status-bar";
import {
	Button,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";

import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: true,
	}),
});

export default function App() {
	useEffect(() => {
		const configurePushNotification =
			async () => {
				const { status } =
					await Notifications.getPermissionsAsync();
				let finale_status = status;
				if (status !== "granted") {
					const { status } =
						await Notifications.requestPermissionsAsync();
					finale_status = status;
				}

				if (finale_status !== "granted") {
					alert(
						"Failed to get push token for push notification!",
					);
					return;
				}
				const pushToken =
					await Notifications.getExpoPushTokenAsync().then(
						(response) => {
							console.log(response.data);
						},
					);
				if (Platform.OS == "android") {
					Notifications.setNotificationChannelAsync(
						"default",
						{
							name: "default",
							importance:
								Notifications.AndroidImportance
									.MAX,
							vibrationPattern: [
								0, 250, 250, 250,
							],
							lightColor: "#FF231F7C",
						},
					);
				}
			};

		configurePushNotification();
	}, []);

	useEffect(() => {
		const subscription =
			Notifications.addNotificationResponseReceivedListener(
				(response) => {
					console.log("notification received");
					console.log(response);
					const username =
						response.notification.request?.content
							.data.username;
					console.log(username);
				},
			);

		return () => subscription.remove();
	}, []);
	const scheduleNotifications = () => {
		console.log("pressed handler");
		Notifications.scheduleNotificationAsync({
			content: {
				title: "You've got Notifications!",
				body: "Here is the notification body",
				data: { username: "Max" },
			},
			trigger: {
				seconds: 5,
			},
		});
	};

	const sendPushNotification = () => {
		fetch("http://exp.host/--/api/v2/push/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				to: "ExponentPushToken[xxxx]",
				title: "My title",
				body: "My body",
				data: { someData: "goes here" },
			}),
		})
			.then((response) => response.json())
			.then((json) => console.log(json))
			.catch((error) => console.error(error));
	};
	return (
		<View style={styles.container}>
			<Text>Configure notifications</Text>
			<Button
				title="Press me"
				color="#841584"
				onPress={scheduleNotifications}
			/>
			<Button
				title="send push notify"
				color="#841584"
				onPress={sendPushNotification}
			/>
			<StatusBar style="auto" />
		</View>
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
