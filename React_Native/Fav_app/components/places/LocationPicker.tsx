import {
	Alert,
	StyleSheet,
	Text,
	View,
} from "react-native"
import React from "react"
import OutlineButton from "../UI/OutlineButton"
import { Colors } from "../../constants/Colors"
import {
	getCurrentPositionAsync,
	PermissionStatus,
	useForegroundPermissions,
} from "expo-location"

const LocationPicker = () => {
	let [loc_perm_info, req_perm] =
		useForegroundPermissions()
	const verifyPermissions = async () => {
		if (
			loc_perm_info?.status ===
			PermissionStatus.UNDETERMINED
		) {
			const perm_res = await req_perm()
			return perm_res.granted
		}
		if (
			loc_perm_info?.status ===
			PermissionStatus.DENIED
		) {
			Alert.alert(
				"Insuffisant Permissions",
				"You need to grant camera permissions to use this app",
			)
			return false
		}
		return true
	}
	const getLocationHandler = async () => {
		const hasPerms = await verifyPermissions()
		if (!hasPerms) {
			return
		}
		const location =
			await getCurrentPositionAsync()
		console.log(location)
	}
	const pickOnMapHandler = () => {}
	return (
		<View>
			<View style={styles.mapPreview}></View>
			<View style={styles.actions}>
				<OutlineButton
					icon="location"
					Intext={"Pick Location"}
					onPress={getLocationHandler}
				/>
				<OutlineButton
					icon="map"
					Intext={"Pick on Map"}
					onPress={pickOnMapHandler}
				/>
			</View>
		</View>
	)
}

export default LocationPicker

const styles = StyleSheet.create({
	mapPreview: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.primary100,
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
})
