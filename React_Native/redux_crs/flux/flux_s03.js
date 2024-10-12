let state = {
	list: [],
	owner: null,
};
const DoubleCantal = {
	title: "Double Cantal",
	price: 15.99,
};

const SuperCremeux = {
	title: "Super Crémeux",
	price: 14.99,
};
const PouletCroquant = {
	title: "Poulet Croquant",
	price: 17.99,
};

let PRODUCT_LIST = {
	PouletCroquant,
	DoubleCantal,
	SuperCremeux,
};
let reducer = (currentState, action) => {
	switch (action.type) {
		case "ADD_OWNER":
			let newOwner = action.payload;
			return {
				...currentState,
				owner: newOwner,
			};
		case "ADD_PRODUCT":
			let newState = [...currentState.list, { ...action.payload }];
			return {
				...currentState,
				list: newState,
			};
		case "ADD_VOUCHER":
			let newVoucher = currentState.list.map((item) => {
				return item.title === "Super Crémeux"
					? { ...item, price: action.payload.price }
					: { ...item };
			});

			return {
				...currentState,
				list: newVoucher,
			};
		default:
			return currentState;
	}
};

let store = window.RTK.configureStore({
	preloadedState: state,
	reducer: reducer,
});

let { dispatch, subscribe, getState } = store;
subscribe(() => {
	let state = getState();
	if (state.owner) {
		document.getElementById(
			"header",
		).textContent = `Le nouveau proprietaire est du restaurant est ${state.owner}`;
	}
	if (state.list) {
		document.getElementById("command").innerHTML =
			"<h2>Voici votre commande </h2>";

		document.getElementById(
			"command",
		).innerHTML = `<h2>Vous avez lelectionne les produits suivants</h2>`;

		for (let item of state.list) {
			const itemElement = document.createElement("div");
			itemElement.innerHTML = `
        <div>
          ${item.title} <span> ${item.price}</span>
        </div>`;

			document.getElementById("command").appendChild(itemElement);
		}
	}
});

document.getElementById("addForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const firstNameInput = e.currentTarget.firstName;
	dispatch({
		type: "ADD_OWNER",
		payload: firstNameInput.value,
	});
});

document.querySelectorAll(".orderButton").forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		let productId = e.target.dataset["id"];
		dispatch({
			type: "ADD_PRODUCT",
			payload: PRODUCT_LIST[productId],
		});
	});
});

document.getElementById("voucher").addEventListener("click", (e) => {
	e.preventDefault();
	dispatch({
		type: "ADD_VOUCHER",
		payload: {
			price: 2.0,
		},
	});
});
