import {
	Alert,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native"
import React, { useState } from "react"
import {
	launchCameraAsync,
	PermissionStatus,
	useCameraPermissions,
} from "expo-image-picker"
import OutlineButton from "../UI/OutlineButton"
import { Colors } from "../../constants/Colors"

type ImagePickerSuccessResult = {
	uri: string | undefined
	canceled: boolean
}

const ImagePicker = () => {
	const [imgStatus, setImgStatus] =
		useState<ImagePickerSuccessResult>({
			uri: undefined,
			canceled: true,
		})

	const [camPerm, requestPerms] =
		useCameraPermissions()

	const checkPerms = async () => {
		//condition
		if (
			camPerm?.status ===
			PermissionStatus.UNDETERMINED
		) {
			let permRes = await requestPerms()
			return permRes.granted
		}
		if (
			camPerm?.status === PermissionStatus.DENIED
		) {
			Alert.alert(
				"Insuffisence permissions",
				"You need to grant the permission",
			)

			return false
		}
		return true
	}

	const takePhoto = async () => {
		const hasPerms = await checkPerms()

		if (!hasPerms) {
			return false
		}

		const { assets, canceled } =
			await launchCameraAsync({
				allowsEditing: true,
				aspect: [16, 9],
				quality: 1,
			})
		console.log(assets?.[0].uri)
		setImgStatus({
			uri: assets?.[0].uri.toString(),
			canceled: canceled,
		})
	}

	let image_preview = (
		<Text style={styles.txt}>
			No image taked yet
		</Text>
	)

	if (!imgStatus.canceled) {
		image_preview = (
			<Image
				source={{ uri: imgStatus.uri }}
				style={styles.img}
			/>
		)
	}

	return (
		<View>
			<View style={styles.imageContainer}>
				{image_preview}
			</View>
			<OutlineButton
				onPress={takePhoto}
				icon="camera"
				Intext="Take Image"
			/>
		</View>
	)
}

export default ImagePicker

const styles = StyleSheet.create({
	imageContainer: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.primary100,
	},
	img: {
		width: "100%",
		height: "100%",
	},
	txt: {
		fontSize: 16,
		textAlign: "center",
	},
})
