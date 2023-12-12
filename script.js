const productContainer = document.getElementById("product-container");
let products;

// Get the products from the API
async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (response.ok) {
    products = await response.json();
    displayProducts();
  } else {
    console.log("error loading products");
  }
}

// Call getProducts to fetch and display
getProducts();

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

  // Get the name of the product and add to h2 element
  productName.textContent = p.title;
  // Get the img of the product and add to img element
  productImage.src = p.image;
  // Get the price and add to p element
  productPrice.textContent = `$${p.price}`;

  // Add class for all cards
  productCard.classList.add("product-card");

  // Append h2 to card div
  productCard.appendChild(productName);
  // Append img to card 
  productCard.appendChild(productImage);
  // Append price to card 
  productCard.appendChild(productPrice);

   // Append all cards to the container div 
   productContainer.appendChild(productCard);
}

function displayProducts() {
    const productItems = products.map(displayOnSite);
}
