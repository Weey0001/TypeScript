import { useCallback, useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { Colors } from "../../constants/colors";
import Img_picker from "./img_picker";
import Loctn_picker from "./lctn_picker";
import Btn from "../../UI/btn";
import { Place } from "../../models/places";

const Plcs_frm = ({ onCreatePlace }: any) => {
	const [enteredTitle, setEnteredTitle] =
		useState("");
	const [pkd_lc, set_pkd_lc] =
		useState<any>(null);
	const [slc_ig, set_slc_ig] =
		useState<any>(null);

	const handleTitle = (txt: string) => {
		setEnteredTitle(txt);
	};
	const tk_img_hndlr = (ig_uri: string) => {
		set_slc_ig(ig_uri);
	};
	const tk_loc_hndlr = useCallback((loc: any) => {
		set_pkd_lc(loc);
	}, []);
	const sav_plc_hndlr = () => {
		// console.log(enteredTitle);
		// console.log(slc_ig);

		// console.log(
		// 	"from Plcs_frm.tsx",
		// 	JSON.stringify(pkd_lc, null, "\t"),
		// );

		const place_data = new Place(
			enteredTitle,
			slc_ig,
			pkd_lc,
		);
		onCreatePlace(place_data);
	};
	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.lebel}>Title</Text>
				<TextInput
					style={styles.input}
					value={enteredTitle}
					onChangeText={handleTitle}
				/>
			</View>
			<Img_picker onImagePicker={tk_img_hndlr} />
			<Loctn_picker
				onLocationPicker={tk_loc_hndlr}
			/>
			<Btn
				onPress={sav_plc_hndlr}
				txt="Add Place"
			/>
		</ScrollView>
	);
};

export default Plcs_frm;

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 24,
	},
	lebel: {
		fontWeight: "bold",
		marginVertical: 8,
		color: Colors.primary500,
	},
	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		borderBottomColor: Colors.primary700,
		borderBottomWidth: 2,
		fontSize: 16,
		backgroundColor: Colors.primary100,
	},
});
