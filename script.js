const productContainer = document.getElementById("product-container");
let products = [];

// Get the products from the API
async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (response.ok) {
    // Store fetched products on products array
    products = await response.json();
    console.table(products);
    displayProducts();
  } else {
    console.log("error loading products");
  }
}

// Call getProducts to fetch and display

// Create card div and display
function displayOnSite(p) {
  // Container card for each product
  const productCard = document.createElement("div");
  // Name of each product
  const productName = document.createElement("h2");
  // Image of each product
  const productImage = document.createElement("img");
  // Price of each product
  const productPrice = document.createElement("p");
  // Add to cart button
  const addToCart = document.createElement("button");

  // Get the name of the product and add to h2 element
  productName.textContent = p.title;
  // Get the img of the product and add to img element
  productImage.src = p.image;
  // Get the price and add to p element
  productPrice.textContent = `$${p.price}`;
  // Add text to add to cart button
  addToCart.innerText = "Add to cart";

  // Add class for all cards
  productCard.classList.add("product-card");
  // Add class to add to cart button
  addToCart.classList.add("cart-btn");

  // Append h2 to card div
  productCard.appendChild(productName);
  // Append img to card
  productCard.appendChild(productImage);
  // Append price to card
  productCard.appendChild(productPrice);
  // Append button to card
  productCard.appendChild(addToCart);

  // Append all cards to the container div
  productContainer.appendChild(productCard);
}

function displayProducts() {
  const productItems = products.map(displayOnSite);
}

// Get category links
const mensCat = document.getElementById("mens-cat");
const womsCat = document.getElementById("woms-cat");
const elecCat = document.getElementById("elec-cat");
const jeweCat = document.getElementById("jewe-cat");
const home = document.getElementById("home");

// Get cart
const cart = document.getElementById("cart");

// Filter and display based on category
function filterAndDisplay(category) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  // Clear products first
  productContainer.innerHTML = "";
  // Display filtered results
  filteredProducts.forEach(displayOnSite);
}

function displayAll(product) {
  productContainer.innerHTML = "";
  products.forEach(displayOnSite);
}

// Call get products based on click
getProducts().then(() => {
  // Listen for clicks on category links
  mensCat.addEventListener("click", function (event) {
    event.preventDefault();
    filterAndDisplay("men's clothing");
  });

  womsCat.addEventListener("click", function (event) {
    event.preventDefault();
    filterAndDisplay("women's clothing");
  });

  elecCat.addEventListener("click", function (event) {
    event.preventDefault();
    filterAndDisplay("electronics");
  });

  jeweCat.addEventListener("click", function (event) {
    event.preventDefault();
  });

  home.addEventListener("click", function (event) {
    event.preventDefault();
    displayAll();
    console.log("home");
  });

  // Listen for clicks on cart

  // Listen for click on cart
  cart.addEventListener("click", function (event) {
    event.preventDefault();
    productContainer.innerHTML = "";
  });
});


// Create cart array
let cartContent = [];

// Each add to cart button listens for clicks
addToCart.addEventListener("click", function (item) {
  const itemToAdd = item.target.id;
  console.log(itemToAdd);
});
// Add to cart array when add to cart button is clicked
