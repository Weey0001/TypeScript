import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
} from "react-native";
import Outlin_btn from "../UI/Outlin_btn";
import { Colors } from "../constants/colors";
import { useEffect } from "react";

const Plcs_dtls = ({ route }: any) => {
	const showMapHandler = () => {};
	const { placeId } = route.params;
	useEffect(() => {
		// console.log("hello");
	}, [placeId]);
	return (
		<ScrollView style={{ flex: 1 }}>
			{/* <Image style={styles.image} /> */}
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.address}>
						Places Details
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
	image: {
		width: "100%",
		height: "100%",
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
