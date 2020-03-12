document.addEventListener('DOMContentLoaded', pageSetup);

function pageSetup() {
	console.log('connected');
	processUrl();
	document.querySelector('#breed-dropdown').addEventListener('click', filterDogs);
}

function getImageUrl() {
	return 'https://dog.ceo/api/breeds/image/random/4';
}

function getLinksUrl() {
	return 'https://dog.ceo/api/breeds/list/all';
}

function processUrl() {
	console.log('Processing URLs');
	fetch(getImageUrl()).then((response) => response.json()).then((json) => processImgData(json));
	fetch(getLinksUrl()).then((response) => response.json()).then((json) => processLinkData(json));
}
//! Challenge 1
function processImgData(data) {
	data['message'].forEach((image) => postImage(image));
}
function postImage(url) {
	let list = document.querySelector('#dog-image-container');
	let newItem = document.createElement('img');
	newItem.src = url;
	newItem.style.height = '100px';
	newItem.style.marginLeft = '10px';
	list.append(newItem);
}

//! Challenge 2 + 3
function processLinkData(data) {
	let dogObject = data['message'];
	let dogList = Object.keys(dogObject);
	dogList.forEach((dog) => postDog(dog));
}

function postDog(item) {
	let list = document.querySelector('#dog-breeds');
	let newItem = document.createElement('li');
	newItem.style.width = '100px';
	newItem.style.border = 'solid black 0.5px';
	newItem.classList = 'dog';
	newItem.id = item;
	newItem.innerText = item;
	newItem.addEventListener('mouseover', (e) => {
		e.target.style.color = 'red';
	});
	list.append(newItem);
}
//! Challenge 4

function getSelection() {
	let selected = document.querySelector('#breed-dropdown').value;
	return selected;
}

function AllDogs() {
	let allDogs = document.getElementsByClassName('dog');
	return allDogs;
}

function filterDogs() {
	let allDogs = AllDogs();
	let selection = getSelection();
	const keys = Object.keys(allDogs);
	console.log(allDogs);
	if (selection === 'all') {
		for (dog of allDogs) {
			dog.style.display = 'list-item';
		}
	} else {
		for (const key of keys) {
			if (allDogs[key].innerText[0] != selection) {
				allDogs[key].style.display = 'none';
			} else {
				allDogs[key].style.display = 'list-item';
			}
		}
	}
}
