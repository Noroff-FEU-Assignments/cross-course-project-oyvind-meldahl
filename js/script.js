const url = "https://www.numitech.no/noroff/wp-json/wc/store/products?category=";
const container = document.querySelector(".flexbilder");
const title = document.querySelector(".title_padding");
const navbar = document.querySelector(".navbar_js");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const navbar_men = document.querySelector(".active_nav_men");
const navbar_women = document.querySelector(".active_nav_women");
const category = params.get("category");
let counter = 0;

async function getData() {
  try {
    const response = await fetch(url + category);
    const results = await response.json();

    console.log(results);
    container.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      createHtml(results[i]);
    }
  } catch (error) {
    console.log(error);

    container.innerHTML = `<h1>An error has occured.</h1>`;
  }
}

getData();

function createHtml(results) {
  if (category == 17) {
    title.innerHTML = "Men - All Jackets";
    navbar_men.innerHTML = `<a href="jackets.html?category=17" class="active">Men</a>`;
  } else {
    title.innerHTML = "Women - All Jackets";
    navbar_women.innerHTML = `<a href="jackets.html?category=16" class="active">Women</a>`;
  }
  container.innerHTML += `
    <div class="polaroid">
          <a href="details.html?id=${results.id}&category=${category}"> <img src="${results.images[0].src}" alt="5 Terre" class="jacket-picture">
          <div class="testcontainer">
            <p>${results.name}</p>
            <p>NOK ${results.prices.regular_price}</p>
          </a>
          </div>
        </div>
        `;
  counter += 1;
  if (counter === 3) {
    container.innerHTML += `
      <div class="break-flex"></div>
      `;
  }
}
