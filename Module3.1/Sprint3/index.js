window.onload = () => {
  // alert("hi");
  getCategoriesList();
  var formData = document.getElementById("form");
  // console.log(formData)
  formData.addEventListener("submit", handleFormDetails);
};

var baseURL = "https://developers.zomato.com/api/v2.1";
var queryURL = "";

//get categories list onload
const getCategoriesList = () => {
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let categoriesUrl = baseURL + "/categories";
    request.open("GET", categoriesUrl);
    request.setRequestHeader("user-key", "f1224548eeafdb1bdbbca67fbee66617");
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
      // console.log(JSON.parse(res).categories);
      res = JSON.parse(res).categories;
      displayCategories(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
//handle form and get all queries

const handleFormDetails = () => {
  event.preventDefault();
  var formData = new FormData(event.target);
  var urlSearchParams = new URLSearchParams(formData);
  queryURL = baseURL + "/search?" + urlSearchParams.toString();
  getRestaurantDetails(queryURL);
};

//get restaurant details

const getRestaurantDetails = (url) => {
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("user-key", "f1224548eeafdb1bdbbca67fbee66617");
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
      console.log(JSON.parse(res));
      res = JSON.parse(res);
      console.log(res);
      const { results_found, restaurants } = res;
      let totalPages = Math.ceil(results_found / 10);
      displayCards(totalPages, restaurants);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Generate page numbers dynamically
const handlePagination = (event) => {
  console.log(event.target.value);
  const currentUrl = new URL(queryURL);
  console.log(currentUrl);

  let activePage = Number(event.target.value)
  let start = (activePage - 1) * 10;
  let count = 10;
  var params = new URLSearchParams(currentUrl.search);
  params.set("start", start);
  params.set("count", count);
  queryURL = currentUrl + params.toString();
  // console.log(queryURL)
  getRestaurantDetails(queryURL);
};
//render details to the dom
const displayCards = (totalPages, restaurants) => {
  console.log(totalPages, restaurants);
  var display = document.getElementById("box");
  display.innerHTML = "";
  let totalDiv = "";
  restaurants.forEach(
    (item) =>
      (totalDiv += `<div class="card__item">
            <div class = "card__img">
            <img src=${item.restaurant.thumb}/>
            </div>
            <div>
            <h2>${item.restaurant.name}</h2>
            <p>Address :+${item.restaurant.location.address}</p>
            <h3>City :${item.restaurant.location.city}</h3>
            <p>Rating : ${item.restaurant.user_rating.aggregate_rating}</p>
            <p>Phone : ${item.restaurant.phone_numbers}</p>
            </div>
            </div>`)
  );
  display.innerHTML = totalDiv;

  var div = document.getElementById("pageNums");
  div.innerHTML = "";
  for (var i = 1; i < totalPages; i++) {
    let button = document.createElement("button");
    div.appendChild(button);
    button.innerHTML = i;
    button.setAttribute("value", i);
    button.addEventListener("click", handlePagination);
  }
};
//onload get all categories and display in dropdown Menu
const displayCategories = (arr) => {
  let selectDiv = document.getElementById("selectCategory");
  for (var i = 0; i < arr.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", arr[i].categories.id);
    option.textContent = arr[i].categories.name;
    selectDiv.appendChild(option);
  }
};
