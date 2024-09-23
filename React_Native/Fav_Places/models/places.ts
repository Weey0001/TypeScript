export interface PlaceType {
	title: string;
	imageUri: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
	id?: string;
}
export class Place implements PlaceType {
	title: string;
	imageUri: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};

	id?: string;
	constructor(
		title: string,
		imageUri: string,
		location: {
			lat: number;
			lng: number;
			address: string;
		},
		id?: any,
	) {
		this.title = title;
		this.imageUri = imageUri;
		this.address = location.address;
		this.location = {
			lat: location.lat,
			lng: location.lng,
		};
		this.id = id;
	}
}
