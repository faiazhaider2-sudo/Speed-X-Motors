const products = [
  {
    name: "Ferrari 488",
    category: "Italian Supercar",
    description: "A powerful and stylish sports car designed for high performance and luxury driving.",
    price: 280000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "3.9L Twin-Turbo V8", horsepower: "661 HP", topSpeed: "211 MPH", transmission: "7-Speed Automatic", year: "2024" }
  },
  {
    name: "Lamborghini Huracan",
    category: "V10 Beast",
    description: "An exotic supercar built to dominate roads and tracks with relentless speed and character.",
    price: 260000,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "5.2L V10", horsepower: "631 HP", topSpeed: "202 MPH", transmission: "7-Speed Automatic", year: "2024" }
  },
  {
    name: "Porsche 911",
    category: "Iconic Coupe",
    description: "The benchmark for precision, balance, and timeless performance on every drive.",
    price: 210000,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "3.0L Twin-Turbo Flat-6", horsepower: "379 HP", topSpeed: "182 MPH", transmission: "8-Speed PDK", year: "2024" }
  },
  {
    name: "McLaren 720S",
    category: "Track-Focused",
    description: "An engineering masterpiece delivering astonishing speed and razor-sharp handling.",
    price: 315000,
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "710 HP", topSpeed: "212 MPH", transmission: "7-Speed Automatic", year: "2024" }
  },
  {
    name: "Audi R8",
    category: "Mid-Engine Icon",
    description: "A thrilling supercar blending raw power, modern technology, and luxury comfort.",
    price: 170000,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "5.2L V10", horsepower: "562 HP", topSpeed: "205 MPH", transmission: "7-Speed Automatic", year: "2023" }
  },
  {
    name: "BMW M4",
    category: "Luxury Coupe",
    description: "A refined performance coupe with a strong identity and dynamic driving character.",
    price: 78000,
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "3.0L Twin-Turbo I6", horsepower: "473 HP", topSpeed: "155 MPH", transmission: "6-Speed Manual", year: "2024" }
  },
  {
    name: "Mercedes AMG GT",
    category: "Grand Tourer",
    description: "An elegant grand tourer delivering comfort, presence, and serious performance.",
    price: 110000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "577 HP", topSpeed: "198 MPH", transmission: "9-Speed Automatic", year: "2024" }
  },
  {
    name: "Nissan GT-R",
    category: "Godzilla",
    description: "An icon of all-weather performance, speed, and fierce engineering DNA.",
    price: 120000,
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "3.8L Twin-Turbo V6", horsepower: "565 HP", topSpeed: "205 MPH", transmission: "6-Speed Dual-Clutch", year: "2024" }
  },
  {
    name: "Ford Mustang",
    category: "American Muscle",
    description: "A classic roar, aggressive styling, and impressive power on every road.",
    price: 60000,
    image: "https://images.unsplash.com/photo-1537621085574-29a4d7a8e6d6?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "5.0L V8", horsepower: "450 HP", topSpeed: "155 MPH", transmission: "10-Speed Automatic", year: "2024" }
  },
  {
    name: "Chevrolet Corvette",
    category: "American Icon",
    description: "A legendary sports machine combining American power with precision handling.",
    price: 69000,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "6.2L V8", horsepower: "495 HP", topSpeed: "194 MPH", transmission: "8-Speed Automatic", year: "2024" }
  },
  {
    name: "Aston Martin Vantage",
    category: "British Power",
    description: "A sculpture of performance with luxury craftsmanship and true grand touring feel.",
    price: 150000,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "4.0L Twin-Turbo V8", horsepower: "503 HP", topSpeed: "195 MPH", transmission: "8-Speed Automatic", year: "2023" }
  },
  {
    name: "Bentley Continental",
    category: "Luxury Grand Tourer",
    description: "A sophisticated performance car with breathtaking comfort and powerful presence.",
    price: 240000,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "6.0L W12", horsepower: "650 HP", topSpeed: "208 MPH", transmission: "8-Speed Automatic", year: "2024" }
  },
  {
    name: "Maserati MC20",
    category: "Italian Performance",
    description: "A lightweight exotic coupe delivering pure emotion and track-inspired character.",
    price: 210000,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "3.0L Twin-Turbo V6", horsepower: "621 HP", topSpeed: "202 MPH", transmission: "8-Speed Dual-Clutch", year: "2024" }
  },
  {
    name: "Lotus Emira",
    category: "Lightweight Sport",
    description: "Precise, agile, and beautifully balanced for an exhilarating driving experience.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "2.0L Turbo I4", horsepower: "360 HP", topSpeed: "167 MPH", transmission: "6-Speed Manual", year: "2024" }
  },
  {
    name: "Toyota Supra",
    category: "JDM Legend",
    description: "A modern legend that blends heritage style with thrilling performance.",
    price: 50000,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "2.0L Turbo I4", horsepower: "382 HP", topSpeed: "155 MPH", transmission: "8-Speed Automatic", year: "2024" }
  },
  {
    name: "Honda NSX",
    category: "Hybrid Hypercar",
    description: "A bold hybrid performance machine combining electric torque and race-inspired design.",
    price: 160000,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "3.5L Twin-Turbo V6 Hybrid", horsepower: "573 HP", topSpeed: "191 MPH", transmission: "9-Speed Dual-Clutch", year: "2024" }
  },
  {
    name: "Koenigsegg Jesko",
    category: "Hypercar",
    description: "A rare hypercar delivering extreme speed, design, and engineering ambition.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "5.0L Twin-Turbo V8", horsepower: "1600 HP", topSpeed: "248 MPH", transmission: "9-Speed Automatic", year: "2024" }
  },
  {
    name: "Pagani Huayra",
    category: "Art of Speed",
    description: "A handcrafted exotic machine celebrated for its artistry, detail, and power.",
    price: 400000,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "6.0L Twin-Turbo V12", horsepower: "764 HP", topSpeed: "220 MPH", transmission: "7-Speed Automatic", year: "2024" }
  },
  {
    name: "Bugatti Chiron",
    category: "Ultimate Hypercar",
    description: "A world-class hypercar engineered for breathtaking performance and raw power.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "8.0L Quad-Turbo W16", horsepower: "1500 HP", topSpeed: "261 MPH", transmission: "7-Speed Automatic", year: "2024" }
  },
  {
    name: "Dodge Challenger",
    category: "Muscle Power",
    description: "A bold and thrilling classic with unmistakable road presence and strength.",
    price: 43000,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    specs: { engine: "6.2L V8", horsepower: "807 HP", topSpeed: "203 MPH", transmission: "8-Speed Automatic", year: "2024" }
  }
];

const galleryImages = [
  { name: "Ferrari", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" },
  { name: "Lamborghini", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80" },
  { name: "Porsche", image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80" },
  { name: "McLaren", image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80" },
  { name: "Bugatti", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80" },
  { name: "Mercedes", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80" },
  { name: "BMW", image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80" },
  { name: "Nissan GT-R", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80" }
];

function getCarImage(product) {
  const searchName = encodeURIComponent(`${product.name} sports car`).replace(/%20/g, ",");
  return `https://loremflickr.com/900/600/${searchName}?lock=${product.name.length}`;
}

products.forEach((product) => {
  product.image = getCarImage(product);
});

function getCarImage(product) {
  const searchName = encodeURIComponent(`${product.name} sports car`);
  return `https://loremflickr.com/900/600/${searchName.replace(/%20/g, ",")}?lock=${product.name.length}`;
}

products.forEach((product) => {
  product.image = getCarImage(product);
});

let cartCount = 0;

function updateDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  const liveTimeElement = document.getElementById("live-time");
  if (liveTimeElement) {
    liveTimeElement.textContent = formattedDateTime;
  }
}

function updateCartBadge() {
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

function showCartAlert(product) {
  Swal.fire({
    title: "Added to Cart!",
    html: `<strong>${product.name}</strong><br>Price: $${product.price.toLocaleString()}`,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#d90429"
  });
}

function addToCart(product) {
  cartCount += 1;
  updateCartBadge();
  showCartAlert(product);
}

function createProductCard(product, index) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-category">${product.category}</p>
      <p class="product-description">${product.description}</p>
      <div class="product-row">
        <span class="product-price">$${product.price.toLocaleString()}</span>
      </div>
      <div class="product-actions">
        <button class="view-btn" data-index="${index}">View Details</button>
        <button class="product-btn" data-index="${index}">Add to Cart</button>
      </div>
    </div>
  `;

  return card;
}

function renderProducts() {
  const productGrid = document.getElementById("product-grid");
  if (!productGrid) return;

  productGrid.innerHTML = "";

  products.forEach((product, index) => {
    const card = createProductCard(product, index);
    productGrid.appendChild(card);
  });

  document.querySelectorAll(".product-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = Number(event.target.dataset.index);
      addToCart(products[index]);
    });
  });

  document.querySelectorAll(".view-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = Number(event.target.dataset.index);
      openProductModal(products[index]);
    });
  });
}

function openProductModal(product) {
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("product-modal-body");

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="product-modal-content">
      <div class="product-modal-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-modal-info">
        <p class="section-tag">${product.category}</p>
        <h2>${product.name}</h2>
        <div class="product-modal-price">$${product.price.toLocaleString()}</div>
        <p>${product.description}</p>

        <ul class="spec-list">
          <li>Engine: ${product.specs.engine}</li>
          <li>Horsepower: ${product.specs.horsepower}</li>
          <li>Top Speed: ${product.specs.topSpeed}</li>
          <li>Transmission: ${product.specs.transmission}</li>
          <li>Year: ${product.specs.year}</li>
        </ul>

        <div class="modal-actions">
          <button class="product-btn add-from-modal" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
          <button id="close-product-modal-btn" class="view-btn">Close</button>
        </div>
      </div>
    </div>
  `;

  const addFromModalButton = document.querySelector(".add-from-modal");
  if (addFromModalButton) {
    addFromModalButton.addEventListener("click", () => {
      addToCart(product);
    });
  }

  const closeButton = document.getElementById("close-product-modal-btn");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  modal.classList.remove("hidden");
}

function renderGallery() {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  galleryImages.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.innerHTML = `<img src="${item.image}" alt="${item.name}" /><span>${item.name}</span>`;

    galleryItem.addEventListener("click", () => {
      openGalleryModal(item.image);
    });

    galleryGrid.appendChild(galleryItem);
  });
}

function openGalleryModal(imageSrc) {
  const galleryModal = document.getElementById("gallery-modal");
  const galleryImage = document.getElementById("gallery-modal-image");

  if (!galleryModal || !galleryImage) return;

  galleryImage.src = imageSrc;
  galleryImage.alt = "Expanded sports car image";
  galleryModal.classList.remove("hidden");
}

function setupExploreButton() {
  const exploreButton = document.getElementById("explore-btn");
  const galleryButton = document.getElementById("gallery-btn");

  if (exploreButton) {
    exploreButton.addEventListener("click", () => {
      document.getElementById("collection").scrollIntoView({ behavior: "smooth" });
    });
  }

  if (galleryButton) {
    galleryButton.addEventListener("click", () => {
      document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
    });
  }
}

function setupNewsletter() {
  const subscribeButton = document.getElementById("subscribe-btn");
  const emailInput = document.getElementById("newsletter-email");

  if (subscribeButton && emailInput) {
    subscribeButton.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (email === "") {
        Swal.fire({
          icon: "warning",
          title: "Email required",
          text: "Please enter your email address before subscribing.",
          confirmButtonColor: "#d90429"
        });
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
          icon: "warning",
          title: "Invalid email",
          text: "Please enter a valid email address.",
          confirmButtonColor: "#d90429"
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: `Thank you, ${email} has been added to our newsletter!`,
        confirmButtonColor: "#d90429"
      });

      emailInput.value = "";
    });
  }
}

function setupRegisterForm() {
  const registerForm = document.getElementById("register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = document.getElementById("full-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      const phone = document.getElementById("phone").value.trim();

      if (fullName === "") {
        Swal.fire({ icon: "warning", title: "Name required", text: "Please enter your full name." });
        return;
      }

      if (email === "") {
        Swal.fire({ icon: "warning", title: "Email required", text: "Please enter your email." });
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({ icon: "warning", title: "Invalid email", text: "Please enter a valid email address." });
        return;
      }

      if (password === "") {
        Swal.fire({ icon: "warning", title: "Password required", text: "Please enter your password." });
        return;
      }

      if (password.length < 6) {
        Swal.fire({ icon: "warning", title: "Password too short", text: "Password must contain at least 6 characters." });
        return;
      }

      if (confirmPassword === "") {
        Swal.fire({ icon: "warning", title: "Confirm password required", text: "Please confirm your password." });
        return;
      }

      if (password !== confirmPassword) {
        Swal.fire({ icon: "warning", title: "Passwords do not match", text: "Please make sure both passwords are the same." });
        return;
      }

      if (phone === "") {
        Swal.fire({ icon: "warning", title: "Phone required", text: "Please enter your phone number." });
        return;
      }

      if (!/^[0-9+()\-\s]{7,}$/.test(phone)) {
        Swal.fire({ icon: "warning", title: "Invalid phone", text: "Please enter a valid phone number." });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "Welcome to SpeedX Motors.",
        confirmButtonColor: "#d90429"
      });

      registerForm.reset();
    });
  }
}

function setupModalClosers() {
  const productModal = document.getElementById("product-modal");
  const galleryModal = document.getElementById("gallery-modal");

  const closeProductModal = document.getElementById("close-product-modal");
  if (closeProductModal && productModal) {
    closeProductModal.addEventListener("click", () => {
      productModal.classList.add("hidden");
    });
  }

  const closeGalleryModal = document.getElementById("close-gallery-modal");
  if (closeGalleryModal && galleryModal) {
    closeGalleryModal.addEventListener("click", () => {
      galleryModal.classList.add("hidden");
    });
  }

  if (productModal) {
    productModal.addEventListener("click", (event) => {
      if (event.target === productModal) {
        productModal.classList.add("hidden");
      }
    });
  }

  if (galleryModal) {
    galleryModal.addEventListener("click", (event) => {
      if (event.target === galleryModal) {
        galleryModal.classList.add("hidden");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (productModal) productModal.classList.add("hidden");
      if (galleryModal) galleryModal.classList.add("hidden");
    }
  });
}

function setupYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);
updateCartBadge();
renderProducts();
renderGallery();
setupExploreButton();
setupNewsletter();
setupRegisterForm();
setupModalClosers();
setupYear();
