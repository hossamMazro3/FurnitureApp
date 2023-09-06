const slider_header = document.querySelector("#slider-header");
const slider_p = document.querySelector("#slider-p");
const price = document.querySelector("#price");
const slider_img = document.querySelector("#slider-img");

let counter = 0;
let info = [
  {
    slider_header: "Cloth Covered Accent Chair",
    slider_p:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, exercitationem rerum inventore, adquas dolore enim rem accusantium unde asperiores assumenda placeat id recusandae beatae dicta dolorum, praesentium repellat corrupti!",
    price: "--- $ 499.00",
  },
  {
    slider_header: "Mapple Wood Accent Chair",
    slider_p:
      " Dolores, exercitationem rerum inventore, adquas dolore enim rem accusantium unde asperiores assumenda placeat id recusandae beatae dicta dolorum, praesentium repellat corrupti!",
    price: "--- --- $ 199.00",
  },
  {
    slider_header: "Valvet Accent Arm Chair",
    slider_p:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Unde asperiores assumenda placeat id recusandae beatae dicta dolorum, praesentium repellat corrupti!",
    price: "--- $ 499.00",
  },
];
setInterval(() => {
  slider_img.setAttribute(
    "src",
    `assets/images/slider/slider${counter % 3}.png`
  );
  slider_header.textContent = info[counter % 3].slider_header;
  slider_p.textContent = info[counter % 3].slider_p;
  price.textContent = info[counter % 3].price;
  ++counter;
}, 3000);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const iconContainer = document.querySelector(".icon-container");
const dropdownContent = iconContainer.querySelector(".dropdown-content");
const addCartBtn = document.querySelectorAll(".addCart");
addCartBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "custom-div");
    const newimg = document.createElement("img");
    newimg.setAttribute("src", `${elem.parentElement.children[0].src}`);
    const productTitle = document.createElement("div");
    productTitle.innerHTML = elem.parentElement.children[1].textContent;
    const productPrice = document.createElement("div");
    productPrice.innerHTML = elem.parentElement.children[2].textContent;
    newDiv.appendChild(newimg);
    newDiv.appendChild(productTitle);
    newDiv.appendChild(productPrice);
    dropdownContent.appendChild(newDiv);
  });
});
