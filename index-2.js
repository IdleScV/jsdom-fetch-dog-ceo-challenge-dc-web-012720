document.addEventListener('DOMContentLoaded', pageSetup);

function pageSetup() {
	console.log('connected doc 2');
	firstFetch();
}

function getImageData() {
	// let response = await fetch('https://dog.ceo/api/breeds/image/random/4');
	// return response;

	// fetch('https://dog.ceo/api/breeds/image/random/4')
	// 	.then((response) => response.json())
	// 	.then((json) => showData(json.message));

	let jsondata;
	fetch('https://dog.ceo/api/breeds/image/random/4')
		.then(function(u) {
			return u.json();
		})
		.then(function(json) {
			jsondata = json;
		});
}

// function getLinkData() {
// 	fetch('https://dog.ceo/api/breeds/list/all')
// 		.then((response) => response.json())
// 		.then((json) => showData(Object.keys(json.message)));
// }

function showData(data) {
	// console.log(data);
	// console.log(data);
	let x = data;
}

async function getData() {
	//await the response of the fetch call
	let response = await fetch('https://dog.ceo/api/breeds/image/random/4');
	//proceed once the first promise is resolved.
	let data = await response.json(); // this is probably a sync function, you don't need await here
	//proceed only when the second promise is resolved
	return data;
}

async function main() {
	const dataset = await getData();
	console.log(dataset);
}

function firstFetch() {
	// getImageData().forEach((x) => postImage(x));
	// getLinkData().forEach((x) => postDog(x));
}

function postImage(url) {
	console.log(url);
	let list = document.querySelector('#dog-image-container');
	let newItem = document.createElement('img');
	newItem.src = url;
	newItem.style.height = '100px';
	newItem.style.marginLeft = '10px';
	list.append(newItem);
}

function postDog(item) {
	let list = document.querySelector('#dog-breeds');
	let newItem = document.createElement('li');
	newItem.classList = 'dog';
	newItem.innerText = item;
	newItem.addEventListener('mousedown', (e) => {
		e.target.style.color = 'red';
	});
	list.append(newItem);
}
