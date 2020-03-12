document.addEventListener('DOMContentLoaded', connected);

function connected() {
	console.log('Connected!');
}

async function getData() {
	const response = await fetch('https://dog.ceo/api/breeds/image/random/4', {});
	const json = await response.json();

	return json;
}
