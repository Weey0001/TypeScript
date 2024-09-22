import {
	Alert,
	StyleSheet,
	Text,
	View,
	Image,
} from "react-native";
import React, {
	useEffect,
	useState,
} from "react";
import Outlin_btn from "../../UI/Outlin_btn";
import { Colors } from "../../constants/colors";
import {
	getCurrentPositionAsync,
	PermissionStatus,
	useForegroundPermissions,
} from "expo-location";
import {
	getAddress,
	getMapPreview,
} from "../../util/location";
import {
	useIsFocused,
	useNavigation,
	useRoute,
} from "@react-navigation/native";

type lctn_prps = {
	lat: number;
	lng: number;
};

const Loctn_picker = ({
	onLocationPicker,
}: any) => {
	const nav: any = useNavigation();
	const route: any = useRoute();
	const [pck_loc, set_loc] =
		useState<lctn_prps | null>(null);
	const [loc_perm, req_perm] =
		useForegroundPermissions();
	const isFocused = useIsFocused();
	// pkd_lt: slctd_log.lat,
	// 			pkd_lg: slctd_log.lng,

	useEffect(() => {
		if (isFocused && route.params) {
			const map_pck_lct = {
				lat: route.params.pkd_lt,
				lng: route.params.pkd_lg,
			};
			set_loc(map_pck_lct);
		}
	}, [route, isFocused]);

	useEffect(() => {
		const handl_loc = async () => {
			if (pck_loc) {
				const address = await getAddress(
					pck_loc.lat,
					pck_loc.lng,
				);
				onLocationPicker({
					...pck_loc,
					address: address,
				});
			}
		};
		handl_loc();
	}, [pck_loc, onLocationPicker]);
	const chck_perm = async () => {
		if (
			loc_perm?.status ===
			PermissionStatus.UNDETERMINED
		) {
			const perm_rsp = await req_perm();
			return perm_rsp.granted;
		}

		if (
			loc_perm?.status === PermissionStatus.DENIED
		) {
			Alert.alert(
				"Insufficient permissions!",
				"You need to grant camera permissions to use this app.",
			);
			const perm_rsp = await req_perm();
			return perm_rsp;
		}
		return true;
	};
	const get_Lctn = async () => {
		const has_perm = await chck_perm();
		if (!has_perm) {
			return;
		}
		const location =
			await getCurrentPositionAsync();
		console.log(location);
		set_loc({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
	};

	let loc_prew = (
		<Text>No Location Picked Yet</Text>
	);

	if (!!pck_loc) {
		loc_prew = (
			<Image
				style={styles.map}
				source={{
					uri: getMapPreview(
						pck_loc.lat,
						pck_loc.lng,
					),
				}}
			/>
		);
	}
	const pck_Map = () => {
		nav.navigate("Map");
	};
	return (
		<View>
			<View style={styles.map_prw}>
				{loc_prew}
			</View>
			<View style={styles.actions}>
				<Outlin_btn
					onPress={get_Lctn}
					icon="location"
					txt="Pick Location"
				/>
				<Outlin_btn
					icon="map"
					txt="Pick on Map"
					onPress={pck_Map}
				/>
			</View>
		</View>
	);
};

export default Loctn_picker;

const styles = StyleSheet.create({
	map_prw: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary100,
		borderRadius: 4,
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	map: {
		width: "100%",
		height: "100%",
	},
});
