import * as SQLite from "expo-sqlite";

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
				console.log("done");
			});
	} catch (error) {
		console.log(error);
	}
};
