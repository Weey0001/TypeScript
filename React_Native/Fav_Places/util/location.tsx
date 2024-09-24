const API =
	"your API";

export const getMapPreview = (
	lat: any,
	lng: any,
) => {
	const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${API}`;

	return imagePreview;
};

export const getAddress = async (
	lat: any,
	lng: any,
) => {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API}`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Could not fetch location");
	}

	const resData = await response.json();
	const address =
		resData.results[0].formatted_address;
	return address;
};
