const url = "https://www.numitech.no/noroff/wp-json/wc/store/products?category=";
const container = document.querySelector(".flexbilder");
const title = document.querySelector(".title_padding");
const navbar = document.querySelector(".navbar_js");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
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

    container.innerHTML = `An error has occured.`;
  }
}

getData();

function createHtml(results) {
  if (category == 17) {
    title.innerHTML = "Men - All Jackets";
    navbar.innerHTML = `<ul>
    <li><a href="jackets.html?category=17" class="active">Men</a></li>
    <li><a href="jackets.html?category=16">Women</a></li>
    <li><a href="articles.html">Articles</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="cart.html">Cart</a></li>
    <li class="socialmobile">
      <a title="A link to Instagram" href="https://www.instagram.com/">
        <i class="fab fa-instagram"></i>
      </a>
      <a title="A link to Twitter" href="https://www.twitter.com/">
        <i class="fab fa-twitter"></i>
      </a>
      <a title="A link to Facebook" href="https://www.facebook.com/">
        <i class="fab fa-facebook-f"></i>
      </a>
    </li>
  </ul>`;
  } else {
    title.innerHTML = "Women - All Jackets";
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
