import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import Plcs_frm from "../components/Places/Plcs_frm";
import { PlaceType } from "../models/places";

const Add_plcs = ({ navigation }: any) => {
	const createPlacehandler = (
		place: PlaceType,
	) => {
		navigation.navigate("All_plcs", {
			place: place,
		});
	};
	return (
		<Plcs_frm
			onCreatePlace={createPlacehandler}
		/>
	);
};

export default Add_plcs;

const styles = StyleSheet.create({});
