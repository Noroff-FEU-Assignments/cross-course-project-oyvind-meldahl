const url = "https://www.numitech.no/noroff/wp-json/wc/store/products/";
const review_url = "https://www.numitech.no/noroff/wp-json/wc/store/products/reviews/";
const container_image = document.querySelector(".jacketdetail1");
const jacket_detail = document.querySelector(".jacketdetail");
const navbar_men = document.querySelector(".active_nav_men");
const navbar_women = document.querySelector(".active_nav_women");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const category = params.get("category");

async function getData() {
  try {
    const response = await fetch(url + id);
    const results = await response.json();

    console.log(results);
    createHtml(results);
  } catch (error) {
    console.log(error);
  }
}

getData();

function createHtml(results) {
  container_image.innerHTML = `<img src="${results.images[0].src}" class="jacketimage"> `;
  jacket_detail.innerHTML = `
    <h1>${results.name} </h1>
    <p><center><img src="${results.images[0].src}" class="jacketimage_mobile"></center></p>
    <p>${results.description}</p>
    <h2>NOK ${results.prices.price}</h2>

    <p><b>Choose Size:</b></p>
    <form action="cart.html">
      <select class="jacketsizing" name="jackets">
        <option value="xs">Extra Small</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
        <option value="xl">Extra Large</option>
      </select>
      <p><input type="submit" value="Add to cart" /></p>
    </form>`;

  if (category == 17) {
    navbar_men.innerHTML = `<a href="jackets.html?category=17" class="active">Men</a>`;
  } else {
    navbar_women.innerHTML = `<a href="jackets.html?category=16" class="active">Women</a>`;
  }
}
