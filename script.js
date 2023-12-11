// Get the products from the API
async function getProducts() {
    const response = await fetch(' https://api.escuelajs.co/api/v1/products');
    const products = await response.json();
    console.table(products);
}

