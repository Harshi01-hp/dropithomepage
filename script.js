
    
document.addEventListener('DOMContentLoaded', function() {


const navbar = `
    <div class="navbar-item">
        <img src="./assets/logo.png" alt="Drop It">
        <a href="index.html"><h1>Drop It</h1></a>
    </div>
    <div class="navbar-item">
        <div class="search-container">
            <div class="dropdown">
            <span class="all-products-dropdown">
                <i class="fas fa-bars"></i>
                All Categories 
                <i class="fas fa-chevron-down" style="color: black;"></i>
            </span>
            <div class="dropdown-content">
                <a href="vegetables.html">Vegetables</a>
                <a href="fruits.html">Fruits</a>
                <a href="meat.html">Meat</a>
                <a href="electronics.html">Electronics</a>
                <a href="home-essentials.html">Home Essentials</a>
            </div>
        </div>

            <div class="search-input-container">
                <input type="text" id="search-input" placeholder="">
                <span id="placeholder-text" class="placeholder-text">Search for "Ice cream"</span>
            </div>
            <button type="button" class="search-button"><i class="fas fa-search"></i></button>
        </div>
    </div>
    <div class="navbar-item navbar-right">
        <div class="navbar-item">
            <a href="wishlist.html"><img src="./assets/heart.png" alt="Heart"></a>
        </div>
        <div class="navbar-item dropdown">
            <a href=""><img src="./assets/li-cart.png" alt="Cart"><span id="cart-quantity" class="cart-quantity"></span></a>
        </div>
        <div class="navbar-item dropdown">
        <img src="./assets/signup.png" alt="Sign Up">                
        <div class="dropdown-content">
                <a href="profile.html">Profile</a>
                <a href="login.html">Login</a>
            </div>
        </div>
    </div>
`;

document.getElementById('navbar').innerHTML = navbar;


const placeholders = ['Search for "Ice cream"', 'Search for "Biscuits"', 'Search for "Detergents"', 'Search for "Dog Food"', 'Search for "Makeup"', 'Search for "Sunscreen"'];
let placeholderIndex = 0;
let placeholderInterval;

function updatePlaceholder() {
    const placeholderText = document.getElementById('placeholder-text');
    placeholderText.classList.add('scroll-up');

    setTimeout(() => {
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        placeholderText.textContent = placeholders[placeholderIndex];
        placeholderText.classList.remove('scroll-up');
    }, 500);
}

function startAnimation() {
    placeholderInterval = setInterval(updatePlaceholder, 4000);
}

function stopAnimation() {
    clearInterval(placeholderInterval);
}

startAnimation();

const searchInput = document.getElementById('search-input');
const placeholderText = document.getElementById('placeholder-text');

searchInput.addEventListener('input', function() {
    if (searchInput.value.length > 0) {
        stopAnimation();
        placeholderText.style.display = 'none';
    } else {
        placeholderText.style.display = 'block';
        startAnimation();
    }
});

const cartQuantityNum = document.getElementById('cart-quantity');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

let totalQuantity = 0;
cartItems.forEach(item => {
    totalQuantity += item.quantity;
});

if (totalQuantity > 0) {
    cartQuantityNum.textContent = totalQuantity;
    cartQuantityNum.style.display = 'inline-block';
} else {
    cartQuantityNum.style.display = 'none';
}
});

document.addEventListener('DOMContentLoaded', function () {
// Store timing logic
const header = document.querySelector('.header');
const now = new Date();
const currentHour = now.getHours();
// Store timings: 6:00 AM to 12:00 AM (midnight)
if (currentHour < 6 || currentHour >= 24) {
header.style.backgroundColor = '#800080';
}

// Add to cart logic
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
button.addEventListener('click', function () {
  const productId = button.dataset.productId;
  // Handle the add to cart logic for the specific product
  console.log(`Product ID: ${productId} added to cart`);
  // Redirect to cart page
//   window.location.href = 'cart.html';
});
});

// Rating stars logic
const ratings = document.querySelectorAll('.rating');
ratings.forEach(rating => {
const stars = rating.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('click', function () {
    const value = this.dataset.value;
    const productId = rating.dataset.productId;
    // Handle the rating logic for the specific product
    console.log(`Product ID: ${productId}, Rating: ${value}`);
    // Update the UI based on rating (optional)
    stars.forEach(s => {
      s.style.color = s.dataset.value <= value ? '#f5c518' : '#ccc';
    });
  });
});
});

// Sidebar selection logic
const listItems = document.querySelectorAll('.sidebar ul li');
listItems.forEach(item => {
item.addEventListener('click', function () {
  // Remove the 'selected' class from all items
  listItems.forEach(li => li.classList.remove('selected'));
  // Add the 'selected' class to the clicked item
  this.classList.add('selected');
});
});

// Product sorting logic
const productsContainer = document.querySelector('.products');
const products = Array.from(document.querySelectorAll('.products .product'));
const resultsCount = document.getElementById('results-count');
const sortOptions = document.getElementById('sort-options');
const totalResults = products.length;
const displayResults = totalResults > 1000000 ? 1000000000 : totalResults;
resultsCount.textContent = `Showing 1-${displayResults} of ${totalResults} results`;
sortOptions.addEventListener('change', function() {
const selectedOption = this.value;
let sortedProducts = [...products]; // Clone the original array
switch (selectedOption) {
  case 'price-asc':
    sortedProducts.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    break;
  case 'price-desc':
    sortedProducts.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
    break;
  case 'rating-asc':
    sortedProducts.sort((a, b) => parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating));
    break;
  case 'rating-desc':
    sortedProducts.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
    break;
  case 'alpha-asc':
    sortedProducts.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
    break;
  case 'alpha-desc':
    sortedProducts.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
    break;
  default:
    sortedProducts = [...products]; // Default order
}
// Clear the current product list and append the sorted products
productsContainer.innerHTML = '';
sortedProducts.forEach(product => productsContainer.appendChild(product));
});
});
    const targetDateKey = 'timerTargetDate';
    function initializeTimer() {
        let targetDate = localStorage.getItem(targetDateKey);
        if (!targetDate) {
            targetDate = new Date();
            targetDate.setHours(targetDate.getHours() + 5);
            localStorage.setItem(targetDateKey, targetDate);
        } else {
            targetDate = new Date(targetDate);
        }

        function functionTimer() {
            const now = new Date();
            const timeDifference = targetDate - now;
            if (timeDifference <= 0) {
                document.getElementById('timer').innerHTML = "0 : 00 : 00";
                clearInterval(timerInterval);
                localStorage.removeItem(targetDateKey);
            } else {
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                document.getElementById('timer').innerHTML = `${hours} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
            }
        }
        const timerInterval = setInterval(functionTimer, 1000);
        functionTimer();
    }

    document.addEventListener('DOMContentLoaded', initializeTimer);




    function setActivePage() {
        const currentPage = window.location.pathname.split("/").pop();
        const links = document.querySelectorAll('.explore-button, .featured-button, .daily-best-button');

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('current');
            }
        });
    }

    setActivePage();



// SUBCRIBE
    document.getElementById("subscribe-btn").addEventListener("click", function() {
        const emailInput = document.getElementById("email-input").value;

        // Simple validation to check if the email is not empty
        if (emailInput === "") {
            alert("Please enter a valid email address.");
            return;
        }

        // Prepare the data to be sent
        const data = { email: emailInput };

        // Send email to the backend via POST request
        fetch("https://your-backend-endpoint.com/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert("Subscription successful!");
            } else {
                alert("Subscription failed. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    });



    
//    *********************************************************************** 
    // ADDING FROM FEATURED SECTION AND DAILY BEST SALES TO THE CART
    // Object to store cart items with their quantities
    let cartItems = {};

    // Function to handle adding/removing items from the wishlist
    function toggleWishlist(icon, productName) {
        if (icon.classList.contains('far')) {
            // Add to wishlist
            icon.classList.remove('far');
            icon.classList.add('fas');
            console.log(`${productName} added to wishlist`);
        } else {
            // Remove from wishlist
            icon.classList.remove('fas');
            icon.classList.add('far');
            console.log(`${productName} removed from wishlist`);
        }
    }

    // Function to handle adding an item to the cart
    function addToCart(button) {
        // Identify if the button belongs to a product-item or product-card
        const productContainer = button.closest('.product-item') || button.closest('.product-card');
        
        // Get the product name (or any unique identifier like product id)
        const productName = productContainer.querySelector('.product-title, .product-name-wrapper p').textContent;

        // If the product is already in the cart, increase its quantity, otherwise add it to the cart
        if (cartItems[productName]) {
            cartItems[productName]++;
        } else {
            cartItems[productName] = 1;
        }

        // Show the quantity controls and hide the Add to Cart button for individual products
        const quantityControls = productContainer.querySelector('.quantity-controls');
        const addToCartButton = productContainer.querySelector('.add-to-cart-button, .daily-add-to-cart-button');
        
        if (quantityControls) {
            addToCartButton.style.display = 'none';
            quantityControls.style.display = 'flex';
        }

        // Update the cart count by summing up the total quantities in the cart
        updateCartCount();
    }

    // Function to handle updating the quantity of a product
    function updateQuantity(button, increment) {
        const productContainer = button.closest('.product-item') || button.closest('.product-card');
        const quantityElement = productContainer.querySelector('.quantity, .daily-quantity');
        let currentQuantity = parseInt(quantityElement.textContent);

        // Update the quantity
        currentQuantity += increment;

        // Prevent the quantity from going below 1
        if (currentQuantity < 1) {
            currentQuantity = 1;
        }

        // Update the displayed quantity
        quantityElement.textContent = currentQuantity;

        // Update the cart object with the new quantity
        const productName = productContainer.querySelector('.product-title, .product-name-wrapper p').textContent;
        cartItems[productName] = currentQuantity;

        // Update the total cart count
        updateCartCount();
    }

    // Function to update the total cart item count and display it on the cart icon
    function updateCartCount() {
        // Calculate total items in the cart by summing quantities
        let totalCartCount = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

        // Get the cart quantity element
        const cartCountElement = document.querySelector('#cart-quantity');

        // Update the cart quantity display
        cartCountElement.textContent = totalCartCount;

        // Show the cart count only if there are items in the cart
        if (totalCartCount > 0) {
            cartCountElement.style.display = 'inline';  // Show the cart count
        } else {
            cartCountElement.style.display = 'none';  // Hide the cart count if it's 0
        }
    }



    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.signup-form');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the form from submitting and refreshing the page
    
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;
    
            // Simple validation checks
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
    
            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }
    
            // If all checks pass, you can proceed with form submission logic
            // e.g., send the data to the server or display a success message
    
            alert('Registration successful!');
            // Optionally, reset the form after successful submission
            form.reset();
        });
    
        // Helper function to validate email format
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    });
    
