export interface Place_Interface {
	id: string
	title: string
	imageUri: string
	address: string
	location: {
		lat: number
		lng: number
	}
}

export class Place implements Place_Interface {
	id: string
	title: string
	imageUri: string
	address: string
	location: {
		lat: number
		lng: number
	}
	constructor(data: Place_Interface) {
		this.id = data.id
		this.title = data.title
		this.imageUri = data.imageUri
		this.address = data.address
		this.location = data.location
	}
}
