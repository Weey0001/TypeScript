let state = {};
const subscribers = [];

const dispatch = (newStateValue) => {
	state = newStateValue;
	for (const fct of subscribers) {
		fct(state);
	}
};

const subscribe = (subscriberFct) => {
	subscribers.push(subscriberFct);
};

subscribe((state) => {
	if (state.owner) {
		console.log("Le propriétaire est ajouté", state.owner);
		document.getElementById(
			"header",
		).textContent = `Le propriétaire du restaurant est ${state.owner.firstName}`;
	}
});

dispatch({
	company: {
		name: "Burger du Pré",
	},
});
// Le propriétaire est ajouté undefined
// la fonction dispatch n'a aucun effet sur l'objet state

document.getElementById("addForm").addEventListener("submit", (evt) => {
	evt.preventDefault();
	const firstNameInput = evt.currentTarget.firstName;
	dispatch({
		company: {
			name: "Burger du Pré",
		},
		owner: {
			firstName: firstNameInput.value,
		},
	});
	// Le propriétaire est ajouté par l'utilisateur
	// la fonction dispatch a un effet sur l'objet state
	// qui contient l'objet owner
	//la condition du subscribe est que le state contient l'objet owner
	// donc on a une action sur le state
});
