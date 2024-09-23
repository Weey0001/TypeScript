import * as SQLite from "expo-sqlite";
import {
	Place,
	PlaceType,
} from "../models/places";
import { Alert } from "react-native";

const db = SQLite.openDatabaseAsync("places.db");

export const init = async () => {
	try {
		const db_async = await db;
		await db_async
			.execAsync(
				`CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        address TEXT NOT NULL,     
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )`,
			)
			.then((res) => {
				Alert.alert(
					"DataBase initialize",
					"Your inDevice database have been loaded",
				);
			});
	} catch (error) {
		Alert.alert(
			"Error from initialize database",
			`${error}`,
		);
	}
};

export const insertPlace = async (
	place: PlaceType,
) => {
	try {
		const db_async = await db;

		await db_async.runAsync(
			`INSERT INTO places (title,image,address,lat,lng) VALUES (?,?,?,?,?)`,
			[
				place.title,
				place.imageUri,
				place.address,
				place.location.lat,
				place.location.lng,
			],
		);
		// console.log(
		// 	"From insertPlace \n",
		// 	JSON.stringify(result, null, "\t"),
		// );
	} catch (error) {
		Alert.alert(
			"Error from database insertPlace",
			`${error}`,
		);
	}
};

export const fetchPlaces = async () => {
	const db_async = await db;
	const result: any[] =
		await db_async.getAllAsync(
			"SELECT * FROM places",
		);
	try {
		const places: PlaceType[] = [];
		// console.log(
		// 	"From fetchPlaces \n",
		// 	JSON.stringify(result, null, "\t"),
		// );
		for (const dp of result) {
			places.push(
				new Place(
					dp.title,
					dp.image,
					{
						lat: dp.lat,
						lng: dp.lng,
						address: dp.address,
					},
					dp.id,
				),
			);
		}
		return places;
	} catch (error) {
		Alert.alert(
			"Error from database fetchPlace",
			`${error}`,
		);
	}
};

export const fetchPalceDetails = async (
	id: number,
) => {
	const db_async = await db;

	const result: any =
		await db_async.getFirstAsync(
			"SELECT * FROM places WHERE id = ?",
			[id],
		);

	try {
		console.log(
			JSON.stringify(result, null, "\t"),
		);
		let place = new Place(
			result?.title,
			result?.image,
			{
				lat: result.lat,
				lng: result.lng,
				address: result.address,
			},
			result.id,
		);
		return place;
	} catch (error) {
		Alert.alert(
			"Error from database fetchPalceDetails",
			`${error}`,
		);
	}
};
