import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
	Dimensions,
} from "react-native";
import Outlin_btn from "../UI/Outlin_btn";
import { Colors } from "../constants/colors";
import { useLayoutEffect, useState } from "react";
import { fetchPalceDetails } from "../util/database";
import { PlaceType } from "../models/places";
type newPlace_tp = {
	title: string;
	image: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
};

// let { width, height } = Dimensions.get("window");

const Plcs_dtls = ({
	route,
	navigation,
}: any) => {
	const [plc_dt, set_plc_dt] = useState<
		PlaceType | null | undefined
	>(null);
	const showMapHandler = () => {
		navigation.navigate("Map", {
			lat: plc_dt?.location.lat,
			lng: plc_dt?.location.lng,
		});
	};
	const { placeId } = route.params;
	useLayoutEffect(() => {
		// console.log("hello");
		(async () => {
			let data = await fetchPalceDetails(placeId);
			set_plc_dt(data);
			navigation.setOptions({
				title: data?.title,
			});
		})();
	}, [placeId]);

	if (!plc_dt) {
		return (
			<View style={styles.fallback}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<ScrollView style={{ flex: 1 }}>
			<Image
				style={styles.image}
				source={{ uri: plc_dt?.imageUri }}
			/>
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.address}>
						{plc_dt?.address}
					</Text>
				</View>
				<Outlin_btn
					icon="map"
					onPress={showMapHandler}
					txt="Show on Map"
				/>
			</View>
		</ScrollView>
	);
};

export default Plcs_dtls;

const styles = StyleSheet.create({
	fallback: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "35%",
		minHeight: 300,
	},
	locationContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	addressContainer: {
		padding: 28,
	},
	address: {
		color: Colors.primary500,
		textAlign: "center",
		fontSize: 16,
		fontWeight: "bold",
	},
});
