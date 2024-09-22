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

const All_plcs = ({ route }: any) => {
	const [loaded, setLoadedPlaces] = useState<
		PlaceType[]
	>([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused && route.params) {
			setLoadedPlaces((prev) => [
				...prev,
				route.params.place,
			]);
		}
	});
	return <Places_List places={loaded} />;
};

export default All_plcs;

const styles = StyleSheet.create({});
