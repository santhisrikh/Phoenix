let inputSearch = document.getElementById("inputSearch");
let nextBtn = document.getElementById("nextBtn");
let preBtn = document.getElementById("preBtn");
var page = 1;
let favArr = [];
let favUsers = JSON.parse(localStorage.getItem("favorites")) || [];

nextBtn.addEventListener("click", () => {
	mainFunc(++page);
});
preBtn.addEventListener("click", () => {
	mainFunc(--page);
});
console.log(inputSearch);
const mainFunc = function printInput(page) {
	console.log(page, "page");
	let query = inputSearch.value;
	console.log(query);
	let promise = new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		let queryRequest = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=1`;
		request.open("GET", queryRequest);
		request.onload = () => {
			if (request.status == 200) {
				resolve(request.response);
			} else {
				reject("Couldnot make web request");
			}
		};
		request.send();
	});
	promise
		.then((res) => {
			res = JSON.parse(res);
			displayCards(res);
		})
		.catch((err) => {
			console.log(err);
		});
};
inputSearch.addEventListener("keyup", debounce(mainFunc, 1000));
//function where debouncing is implemented
function debounce(callback, delay) {
	let timeout;
	return function () {
		clearTimeout(timeout);
		// console.log(timeout);
		timeout = setTimeout(() => {
			callback(page);
		}, delay);
	};
}
//display details
function displayCards(res) {
	// console.log
	let total = res.total_count;
  let user = res.items[0];
  let isFound = false
  // let favUsers = JSON.parse(localStorage.getItem("favorites"))
  if(favUsers){
   isFound = favUsers.find((item) => item.id == user.id);
  }
	// console.log(page, total);
	preBtn.disabled = page <= 1;
	nextBtn.disabled = page >= total;
	console.log(preBtn, nextBtn);
	var display = document.getElementById("cont");
	display.innerHTML = "";
	let cardDiv = document.createElement("div");
	cardDiv.setAttribute("class", "card");
	cardBody = makeCard(cardDiv, user);
	let btn = document.createElement("button");
	btn.innerText = "Add to favorites";
	if (isFound) {
		btn.style.color = "green";
		btn.innerText = "Added";
	}
	btn.addEventListener("click", () => {
		addToFav(user);
	});
	cardBody.appendChild(btn);
	cardDiv.appendChild(cardBody);
	display.append(cardDiv);

	// console.log(display.getElementById("fav"))
}
function makeCard(cardDiv, user) {
	let image = document.createElement("img");
	image.setAttribute("class", "card-img-top");
	image.setAttribute("src", user.avatar_url);
	cardDiv.appendChild(image);
	cardBody = document.createElement("div");
	cardBody.setAttribute("class", "card-body");
	let cardText1 = document.createElement("h2");
	cardText1.textContent = user.id;
	let cardText2 = document.createElement("p");
	cardText2.textContent = user.login;
	cardBody.appendChild(cardText1);
	cardBody.appendChild(cardText2);

	return cardBody;
}
function addToFav(user) {
	console.log(user);
	// favArr.push(user);
	favUsers = [...favUsers, user];
  localStorage.setItem("favorites", JSON.stringify(favUsers));
  displayFavorites()
}

// window.reload(
let showFav = document.querySelector("#showFav");
showFav.addEventListener("click", displayFavorites);
console.log(showFav);
function displayFavorites() {
	let favDiv = document.getElementById("favContainer");
	favDiv.innerHTML = "";
	let h2 = document.createElement("h2");
	h2.textContent = "Favourites";
	favDiv.appendChild(h2);
	let display = document.createElement("div");
	display.setAttribute("class", "card-deck");

	// let display = document.getElementsByClassName("card-deck");
	display.innerHTML = "";
	let totalDiv = "";
	console.log(favArr);
	// let storedUsers = JSON.parse(localStorage.getItem("favorites"))
	console.log(favUsers);
	favUsers.map((user) => {
		let cardDiv = document.createElement("div");
		cardDiv.setAttribute("class", "card");
		let cardBody = makeCard(cardDiv, user);
		let btn = document.createElement("button");
		btn.innerText = "Remove";
		cardBody.appendChild(btn);
		cardDiv.appendChild(cardBody);
		btn.addEventListener("click", () => {
			removeFun(user);
		});
		display.appendChild(cardDiv);
		let knowMoreBtn = document.createElement("button");
		knowMoreBtn.innerText = "Know more..";
		cardBody.appendChild(knowMoreBtn);
		knowMoreBtn.setAttribute("type", "button");
		knowMoreBtn.setAttribute("data-toggle", "modal");
		knowMoreBtn.setAttribute("data-target", "#more-details");
		knowMoreBtn.setAttribute("type", "button");
		// console.log(knowMoreBtn);
		knowMoreBtn.addEventListener("click", () => {
			showModal(user);
		});
	});

	favDiv.appendChild(display);
	console.log(display);
}

function removeFun(user) {
	console.log(user);
	let index = favUsers.findIndex((item) => item == user);
	console.log(index);
	favUsers.splice(index, 1);
	console.log(favUsers);
	localStorage.setItem("favorites", JSON.stringify(favUsers));
	displayFavorites();
}

function showModal(user) {
	console.log(user);
	var display = document.getElementById("more-details");
	// console.log(display)
	display.innerHTML = "";
	let totalDiv = "";
	totalDiv += `
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${user.login}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src = ${user.avatar_url} class = "card-img-top">
            <p>score : ${user.score}</p>
            <p>url:${user.url}</p>
            <p>repos URL :${user.repos_url}</p>
          </div>`;
	display.innerHTML = totalDiv;
}
