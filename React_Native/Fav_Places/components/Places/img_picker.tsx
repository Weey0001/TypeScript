import {
	Alert,
	Button,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";

import {
	launchCameraAsync,
	PermissionStatus,
	useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import Outlin_btn from "../../UI/Outlin_btn";

const Img_picker = ({ onImagePicker }: any) => {
	const [pck_Img, setImg] = useState<
		string | undefined
	>("");
	const [cam_perm, req_perm] =
		useCameraPermissions();

	const chck_perm = async () => {
		if (
			cam_perm?.status ===
			PermissionStatus.UNDETERMINED
		) {
			const perm_rsp = await req_perm();
			return perm_rsp.granted;
		}

		if (
			cam_perm?.status === PermissionStatus.DENIED
		) {
			const perm_rsp = await req_perm();
			return perm_rsp;
		}
		return true;
	};

	const img_hndlr = async () => {
		const has_perm = await chck_perm();

		if (!has_perm) {
			return;
		}
		const img_prm = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 1,
		});
		setImg(img_prm.assets?.[0].uri);
		onImagePicker(img_prm.assets?.[0].uri);
	};
	let img_prw = <Text>No image taken yet.</Text>;
	if (!!pck_Img) {
		img_prw = (
			<Image
				source={{ uri: pck_Img }}
				style={styles.img}
			/>
		);
	}
	return (
		<View>
			<View style={styles.img_prw}>
				{img_prw}
			</View>
			<Outlin_btn
				onPress={img_hndlr}
				txt={"Take Image"}
				icon="camera"
			/>
		</View>
	);
};

export default Img_picker;

const styles = StyleSheet.create({
	img_prw: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary100,
		borderRadius: 4,
	},
	img: {
		width: "100%",
		height: 200,
	},
});
