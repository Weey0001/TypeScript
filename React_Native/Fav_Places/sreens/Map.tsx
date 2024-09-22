import {
	Alert,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, {
	useCallback,
	useLayoutEffect,
	useState,
} from "react";
import MapView, {
	Marker,
} from "react-native-maps";
import Icn_Btn from "../UI/Icn_Btn";

type lctn_prps = {
	lat: number;
	lng: number;
};

const Map = ({ navigation }: any) => {
	const [slctd_log, set_Slc_lct] =
		useState<lctn_prps | null>(null);
	const region = {
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};
	const slct_loc = (e: any) => {
		const lat = e.nativeEvent.coordinate.latitude;
		const lng =
			e.nativeEvent.coordinate.longitude;
		set_Slc_lct({ lat: lat, lng: lng });
	};

	const sav_pck_lct = useCallback(() => {
		if (!slctd_log) {
			Alert.alert(
				"No Location Selected",
				"Please select a location on the map.",
			);
			return;
		}

		navigation.navigate("Add_plcs", {
			pkd_lt: slctd_log.lat,
			pkd_lg: slctd_log.lng,
		});
	}, [navigation, slctd_log]);
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }: any) => (
				<Icn_Btn
					icon="save"
					color={tintColor}
					size={24}
					onPress={sav_pck_lct}
				/>
			),
		});
	}, [navigation, sav_pck_lct]);
	return (
		<MapView
			style={styles.map}
			initialRegion={region}
			onPress={slct_loc}
		>
			{slctd_log && (
				<Marker
					title="Picked Location"
					coordinate={{
						latitude: slctd_log?.lat,
						longitude: slctd_log.lng,
					}}
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
