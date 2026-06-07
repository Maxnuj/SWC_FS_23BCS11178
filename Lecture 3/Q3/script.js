const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

const products = [
    "iPhone 16",
    "Samsung Galaxy S25",
    "MacBook Pro",
    "Dell XPS",
    "HP Pavilion",
    "Sony Headphones",
    "Boat Earbuds",
    "Apple Watch",
    "Nike Shoes",
    "Adidas Shoes",
    "Puma T-Shirt",
    "Canon Camera",
    "GoPro Hero",
    "Lenovo ThinkPad",
    "Asus ROG Laptop"
];

// Display all items initially
renderProducts(products);

function renderProducts(items) {

    results.innerHTML = "";

    if(items.length === 0){
        results.innerHTML = "<li>No results found</li>";
        return;
    }

    items.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;

        results.appendChild(li);
    });
}

// Debounce Function
function debounce(callback, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

// Search Logic
function filterProducts(){

    const query =
        searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(query)
    );

    renderProducts(filteredProducts);
}

// Debounced Search
const debouncedSearch =
    debounce(filterProducts, 300);

searchInput.addEventListener(
    "input",
    debouncedSearch
);
