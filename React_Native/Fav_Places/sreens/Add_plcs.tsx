import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import Plcs_frm from "../components/Places/Plcs_frm";
import { PlaceType } from "../models/places";
import { insertPlace } from "../util/database";

const Add_plcs = ({ navigation }: any) => {
	const createPlacehandler = async (
		place: PlaceType,
	) => {
		await insertPlace(place);
		navigation.navigate("All_plcs");
	};
	return (
		<Plcs_frm
			onCreatePlace={createPlacehandler}
		/>
	);
};

export default Add_plcs;

const styles = StyleSheet.create({});
