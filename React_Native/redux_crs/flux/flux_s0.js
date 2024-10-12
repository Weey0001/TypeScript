let state = {};

const subscribers = [];

const subscribe = (fct) => {
	return subscribers.push(fct);
};

const dispatch = (newStateValue) => {
	state = newStateValue;
	for (const fct of subscribers) {
		fct(state);
	}
};

document.getElementById("addForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const name = e.currentTarget.name;
	dispatch({
		owner: {
			firstName: name.value,
		},
	});
});

subscribe((state) => {
	if (state) {
		document.getElementById(
			"header",
		).textContent = `Le nouveau proprietaire est du restaurant est ${state.owner.firstName}`;
	}
});
