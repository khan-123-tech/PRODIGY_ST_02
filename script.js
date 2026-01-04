let cartCount = 0;

// Add to cart
function addToCart(button) {
  cartCount++;
  document.getElementById("cart-count").innerText = `🛒 ${cartCount}`;
  alert("Product added to cart!");
}

// Search filter
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    let title = product.querySelector("h3").innerText.toLowerCase();
    product.style.display = title.includes(input) ? "block" : "none";
  });
}

// Modal functions
function openModal(title, description, image) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalImage").src = image;
  document.getElementById("productModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("productModal").style.display = "none";
}
// Filter by category
function filterCategory(category) {
  let products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    if (category === "all") {
      product.style.display = "block";  // show all products
    } else {
      let productCat = product.getAttribute("data-category");
      product.style.display = (productCat === category) ? "block" : "none";
    }
  });
}
