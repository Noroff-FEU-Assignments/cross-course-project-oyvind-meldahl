const url = "https://www.numitech.no/noroff/wp-json/wc/store/products/";
const review_url =
  "https://www.numitech.no/noroff/wp-json/wc/v3/products/reviews/?per_page=100&consumer_key=ck_431121ccd83117b49f3dac917b4aca37476aa59e&consumer_secret=cs_347d0375faec9b79fe3a692f8115d7f464797e00";
const container_image = document.querySelector(".jacketdetail1");
const jacket_detail = document.querySelector(".jacketdetail_first");
const navbar_men = document.querySelector(".active_nav_men");
const navbar_women = document.querySelector(".active_nav_women");
const review_section = document.querySelector(".review_section");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jacket_id = params.get("id");
const category = params.get("category");

async function getData() {
  try {
    const response = await fetch(url + jacket_id);
    const results = await response.json();

    createHtml(results);
  } catch (error) {
    console.log(error);
    container_image.innerHTML = `<h1>An error has occured.</h1>`;
  }
}

getData();

function createHtml(results) {
  container_image.innerHTML = `<img src="${results.images[0].src}" class="jacketimage"> `;
  jacket_detail.innerHTML = `
    <h1>${results.name} </h1>
    <p><center><img src="${results.images[0].src}" class="jacketimage_mobile"></center></p>
    <p>${results.description}</p>
    <h2>NOK ${results.prices.price}</h2>`;

  if (category == 17) {
    navbar_men.innerHTML = `<a href="jackets.html?category=17" class="active">Men</a>`;
  } else {
    navbar_women.innerHTML = `<a href="jackets.html?category=16" class="active">Women</a>`;
  }
}

async function getReviewData() {
  try {
    const review_response = await fetch(review_url);
    const review_results = await review_response.json();

    review_section.innerHTML = "";
    for (let i = 0; i < review_results.length; i++) {
      if (Number(jacket_id) === review_results[i].product_id) {
        review_section.innerHTML += `<div class="review_box"><p>Customer <b>${review_results[i].reviewer}</b> gave the jacket <b>${review_results[i].rating} of 5</b> stars and said: <i>${review_results[i].review}</i></p></div>`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getReviewData();
