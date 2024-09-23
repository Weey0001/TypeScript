import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, {
	useEffect,
	useState,
} from "react";
import Places_List from "../components/Places/Places_List";
import { useIsFocused } from "@react-navigation/native";
import { PlaceType } from "../models/places";
import { fetchPlaces } from "../util/database";

const All_plcs = ({ route }: any) => {
	const [loaded, setLoadedPlaces] = useState<
		PlaceType[]
	>([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		const loadPlaces = async () => {
			let data = await fetchPlaces();
			if (!!data) setLoadedPlaces(data);
			console.log(
				"Data in All_plcs: ",
				data?.length,
			);
		};
		if (isFocused) {
			loadPlaces();
		}
	}, [isFocused]);
	return <Places_List places={loaded} />;
};

export default All_plcs;

const styles = StyleSheet.create({});
