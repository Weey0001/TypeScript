let state = {
	list: [],
};

let subscribers = [];

let subscribe = (fct) => {
	return subscribers.push(fct);
};

let dispatch = (newStateValue) => {
	state = newStateValue;
	for (const fct of subscribers) {
		fct(state);
	}
};

subscribe((state) => {
	if (state.owner) {
		document.getElementById(
			"header",
		).textContent = `Le nouveau proprietaire est du restaurant est ${state.owner.firstName}`;
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
		owner: {
			firstName: firstNameInput.value,
		},
		...state,
	});
});

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

document.querySelectorAll(".orderButton").forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		let productId = e.target.dataset["id"];
		let product = PRODUCT_LIST[productId];
		let productList = state.list;
		productList.push(product);
		dispatch({ list: productList });
	});
});
