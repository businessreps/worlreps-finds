
const products = [
  {
    name: "Prada T-Shirt",
    image: "img/prada.jpg",
    price: "20 €",
    category: "T-Shirts",
    link: "https://cnfans.com/product/?platform=WEIDIAN&id=7453213813&ref=1198104"
  },
  {
    name: "Stussy T-Shirts",
    image: "img/stussy.jpg",
    price: "17 €",
    category: "T-Shirts",
    link: "https://cnfans.com/product/?platform=WEIDIAN&id=7453117103&ref=1198104"
  },
  {
    name: "Ralph Lauren Hoodie",
    image: "img/ralph.jpg",
    price: "25 €",
    category: "Hoodies",
    link: "https://cnfans.com/product?platform=WEIDIAN&id=7258962778&ref=1198104"
  }
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(filtered) {
  productList.innerHTML = "";
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="card-content">
        <h3>${product.name}</h3>
        <p><strong>${product.price}</strong></p>
        <p>${product.category}</p>
        <a href="${product.link}" target="_blank">Ver producto</a>
      </div>
    `;
    productList.appendChild(card);
  });
}

function updateFilter() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const filtered = products.filter(p =>
    (selectedCategory === "all" || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);
}

function populateCategories() {
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

searchInput.addEventListener("input", updateFilter);
categoryFilter.addEventListener("change", updateFilter);

populateCategories();
displayProducts(products);
