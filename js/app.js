const products = [
  {
    id: 1,
    category: "mobile",
    brand: "OPPO",
    name: "OPPO Reno5",
    price: 299,
    oldPrice: 349,
    rating: 5,
    image:
      "https://imgs.search.brave.com/h3Vpso5SEHZvpf5CssfoboLoMNG6_XVveq2S5d8WUaA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YW5kcm9pZGhlYWRs/aW5lcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDIv/T3Bwby1SZW5vNS1Q/cm8tNUctQUgtSFIt/VmVyZGljdC0xNDIw/eDEwNjUud2VicA",
    description:
      "Slim AMOLED smartphone with a 64 MP camera and fast charging for everyday use.",
    options: {
      color: ["Black", "Blue"],
      storage: ["128 GB", "256 GB"],
    },
    optionPrices: {
      storage: { "256 GB": 40 },
    },
    specifications: {
      Display: '6.43" AMOLED',
      Processor: "Qualcomm Snapdragon 720G",
      RAM: "8 GB",
      Storage: "128 GB",
      "Rear Camera": "64 MP",
      "Front Camera": "44 MP",
      Battery: "4310 mAh",
      "Operating System": "Android",
      Network: "4G LTE",
    },
  },
  {
    id: 2,
    category: "mobile",
    brand: "Samsung",
    name: "Galaxy A54 5G",
    price: 349,
    oldPrice: 399,
    rating: 4,
    image:
      "https://images.priceoye.pk/samsung-galaxy-a54-5g-pakistan-priceoye-vyzoh.jpg",
    description:
      "Reliable mid-range 5G phone with a bright Super AMOLED screen.",
    options: {
      color: ["Graphite", "Lime"],
      storage: ["128 GB", "256 GB"],
    },
    optionPrices: {
      storage: { "256 GB": 50 },
    },
    specifications: {
      Display: '6.4" Super AMOLED',
      Processor: "Exynos 1380",
      RAM: "8 GB",
      Storage: "128 GB",
      "Rear Camera": "50 MP",
      "Front Camera": "32 MP",
      Battery: "5000 mAh",
      "Operating System": "Android",
      Network: "5G",
    },
  },
  {
    id: 3,
    category: "mobile",
    brand: "Apple",
    name: "iPhone 15",
    price: 799,
    oldPrice: null,
    rating: 5,
    image:
      "https://imgs.search.brave.com/h_uJjNw13CGLM50jlD2mBxVK4u9HriB51MYQnxbJN74/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9p/bWFnZXMvcHJvZHVj/dHMvNjU4OC82NTg4/NTA4X3NkLmpwZztt/YXhIZWlnaHQ9NDI3/O21heFdpZHRoPTY0/MD9mb3JtYXQ9d2Vi/cA",
    description:
      "Dynamic Island, a 48 MP main camera and USB-C in a lightweight design.",
    options: {
      color: ["Black", "Blue", "Pink"],
      storage: ["128 GB", "256 GB", "512 GB"],
    },
    optionPrices: {
      storage: { "256 GB": 100, "512 GB": 300 },
    },
    specifications: {
      Display: '6.1" Super Retina XDR',
      Processor: "Apple A16 Bionic",
      RAM: "6 GB",
      Storage: "128 GB",
      "Rear Camera": "48 MP",
      "Front Camera": "12 MP",
      Battery: "Up to 20 h video playback",
      "Operating System": "iOS",
      Network: "5G",
    },
  },
  {
    id: 4,
    category: "mobile",
    brand: "Xiaomi",
    name: "Redmi Note 12",
    price: 199,
    oldPrice: 229,
    rating: 4,
    image:
      "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680031226.49084509.jpg",
    description:
      "Large AMOLED display and a big battery at an entry-level price.",
    options: {
      color: ["Gray", "Blue"],
      storage: ["128 GB", "256 GB"],
    },
    optionPrices: {
      storage: { "256 GB": 30 },
    },
    specifications: {
      Display: '6.67" AMOLED',
      Processor: "Snapdragon 685",
      RAM: "6 GB",
      Storage: "128 GB",
      "Rear Camera": "50 MP",
      "Front Camera": "13 MP",
      Battery: "5000 mAh",
      "Operating System": "Android",
      Network: "4G LTE",
    },
  },
  {
    id: 5,
    category: "mobile",
    brand: "SoundCore",
    name: "Wireless Earbuds",
    price: 49,
    oldPrice: 69,
    rating: 4,
    image:
      "https://imgs.search.brave.com/YcMfa8MiVE_9q41OeqFhx8HrnmSJrdHFqK1toKNrqT0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/dXBsb2Fkcy5oZWFk/cGhvbmVjaGVjay5j/b20vdXBsb2Fkcy9z/aXRlcy8yLzIwMjMv/MDgvU291bmRjb3Jl/LUxpYmVydHktNC1O/Qy1ieS1Bbmtlci0z/LTcwNHgzOTYuanBn",
    description: "Compact true wireless earbuds with a charging case.",
    options: {
      color: ["White", "Black"],
    },
    specifications: {
      Type: "In-ear, true wireless",
      Bluetooth: "5.3",
      "Battery Life": "Up to 8 h (case: 24 h)",
      Charging: "USB-C",
      "Water Resistance": "IPX4",
      Color: "White / Black",
    },
  },
  {
    id: 6,
    category: "mobile",
    brand: "FitPro",
    name: "Smart Watch S2",
    price: 89,
    oldPrice: null,
    rating: 4,
    image:
      "https://imgs.search.brave.com/kHZZFjdIbYyldRH2yGZwCjDG8JTRSTyrtelGY_JH7KE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSDFlOGRk/MjAxZjYxYzQ2YjJi/OTFlNzQxZTMzZWIy/YjUwMS5qcGdfMzAw/eDMwMC5qcGc",
    description:
      "Fitness-focused smart watch with heart-rate and sleep tracking.",
    options: {
      color: ["Black", "Silver"],
    },
    specifications: {
      Display: '1.69" TFT',
      Sensors: "Heart rate, SpO2",
      Battery: "Up to 7 days",
      "Water Resistance": "5 ATM",
      Compatibility: "Android / iOS",
      Color: "Black / Silver",
    },
  },
  {
    id: 7,
    category: "pc",
    brand: "ASUS",
    name: "VivoBook 15",
    price: 549,
    oldPrice: 629,
    rating: 4,
    image:
      "https://imgs.search.brave.com/KX_8VOMhrK4QRspH7jfHdUg8WKyaSIzzdOt7uwro6Ag/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kbGNk/bndlYmltZ3MuYXN1/cy5jb20vZmlsZXMv/bWVkaWEvYWUwZjJk/ZWQtOWEyNC00ZGY4/LTg0NTAtNzAzMGRm/YmUyNmI1L3YxL2Zl/YXR1cmVzL2ltYWdl/cy9sYXJnZS8xeC9z/Ny9tYWluLmpwZw",
    description:
      "Everyday laptop for study and office work with a Full HD display.",
    options: {
      ram: ["8 GB", "16 GB"],
      storage: ["512 GB SSD", "1 TB SSD"],
    },
    optionPrices: {
      ram: { "16 GB": 50 },
      storage: { "1 TB SSD": 60 },
    },
    specifications: {
      Processor: "Intel Core i5",
      RAM: "8 GB",
      Storage: "512 GB SSD",
      Display: '15.6" Full HD',
      Graphics: "Intel Iris Xe",
      Battery: "42 Wh",
      "Operating System": "Windows 11",
      Weight: "1.7 kg",
    },
  },
  {
    id: 8,
    category: "pc",
    brand: "Lenovo",
    name: "IdeaPad Slim 3",
    price: 479,
    oldPrice: null,
    rating: 4,
    image:
      "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/URVDym47JC-lenovo-83k100cfin-laptop-494494652-i-1-1200wx1200h.jpeg",
    description: "Light and affordable laptop with a comfortable keyboard.",
    options: {
      ram: ["8 GB", "16 GB"],
      storage: ["512 GB SSD", "1 TB SSD"],
    },
    optionPrices: {
      ram: { "16 GB": 50 },
      storage: { "1 TB SSD": 60 },
    },
    specifications: {
      Processor: "AMD Ryzen 5",
      RAM: "8 GB",
      Storage: "512 GB SSD",
      Display: '15.6" Full HD',
      Graphics: "AMD Radeon",
      Battery: "45 Wh",
      "Operating System": "Windows 11",
      Weight: "1.6 kg",
    },
  },
  {
    id: 9,
    category: "pc",
    brand: "HELLO Build",
    name: "Gaming PC RTX 4060",
    price: 1099,
    oldPrice: 1249,
    rating: 5,
    image:
      "https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/-/831ede26a9c74f29adda9372134cd83d?quality=75&version=0&x=3840",
    description:
      "Prebuilt desktop for 1080p gaming with a dedicated graphics card.",
    options: {
      configuration: ["Standard", "Pro"],
      ram: ["16 GB", "32 GB"],
      storage: ["1 TB SSD", "2 TB SSD"],
    },
    optionPrices: {
      ram: { "32 GB": 90 },
      storage: { "2 TB SSD": 100 },
    },
    specifications: {
      CPU: "Intel Core i5",
      GPU: "NVIDIA RTX 4060",
      RAM: "16 GB",
      Storage: "1 TB SSD",
      Motherboard: "B760 ATX",
      "Power Supply": "650 W 80+ Bronze",
      Case: "Mid-tower, tempered glass",
      "Operating System": "Windows 11",
    },
  },
  {
    id: 10,
    category: "pc",
    brand: "Dell",
    name: "Dell 24 Monitor",
    price: 129,
    oldPrice: 159,
    rating: 4,
    image:
      "https://imgs.search.brave.com/SS4vrbLrRMU0F1_EFdiNwkIVcdHSHzzb_b0wZYz1j8k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2lzL2lt/YWdlL0RlbGxDb250/ZW50L2NvbnRlbnQv/ZGFtL3NzMi9wcm9k/dWN0LWltYWdlcy9k/ZWxsLWNsaWVudC1w/cm9kdWN0cy9wZXJp/cGhlcmFscy9tb25p/dG9ycy9wLXNlcmll/cy9wMjQyM2QtL21l/ZGlhLWdhbGxlcnkv/bW9uaXRvci1wMjQy/M2QtZ2FsbGVyeS0z/LnBzZD9mbXQ9cG5n/LWFscGhhJnBzY2Fu/PWF1dG8mc2NsPTEm/aGVpPTgwNCZ3aWQ9/ODMzJnFsdD0xMDAs/MSZyZXNNb2RlPXNo/YXJwMiZzaXplPTgz/Myw4MDQmY2hyc3M9/ZnVsbA",
    description: "24-inch Full HD IPS monitor with slim bezels.",
    options: {
      configuration: ["24 inch", "27 inch"],
    },
    specifications: {
      "Screen Size": '23.8"',
      Resolution: "1920 x 1080",
      Panel: "IPS",
      "Refresh Rate": "75 Hz",
      Ports: "HDMI, VGA",
      Mount: "VESA 100 x 100",
    },
  },
  {
    id: 11,
    category: "pc",
    brand: "Keychron",
    name: "Mechanical Keyboard",
    price: 79,
    oldPrice: null,
    rating: 5,
    image:
      "https://imgs.search.brave.com/HKQzvX7Pn3vrh93v_ykz1xm0mTFHq_N7KnWAnJwTNAs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/a2V5Y2hyb24uY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL2tleWNo/cm9uLWsxLXY1LXVs/dHJhLXNsaW0td2ly/ZWxlc3MtbWVjaGFu/aWNhbC1rZXlib2Fy/ZC04Ny1rZXlzLXdo/aXRlLWJhY2tsaWdo/dC1rZXljaHJvbi1v/cHRpY2FsLWxvdy1w/cm9maWxlLXJlZC1z/d2l0Y2guanBnP3Y9/MTYzODM1NDUyNiZ3/aWR0aD0xMjE0",
    description: "Compact mechanical keyboard with hot-swappable switches.",
    options: {
      configuration: ["Red Switch", "Brown Switch", "Blue Switch"],
    },
    specifications: {
      Layout: "75%",
      Switches: "Mechanical (hot-swappable)",
      Connection: "USB-C / Bluetooth",
      Backlight: "RGB",
      Compatibility: "Windows / macOS",
    },
  },
  {
    id: 12,
    category: "pc",
    brand: "Logitech",
    name: "Wireless Mouse",
    price: 25,
    oldPrice: 35,
    rating: 4,
    image:
      "https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m185/gallery/2025-update-assets/m185-grey-3qtr-angle-2.png",
    description: "Quiet wireless mouse with long battery life.",
    options: {
      configuration: ["Black", "Gray"],
    },
    specifications: {
      Connection: "2.4 GHz USB receiver",
      Sensor: "Optical",
      DPI: "1000",
      Battery: "1 AA battery",
      Compatibility: "Windows / macOS",
    },
  },
  {
    id: 13,
    category: "fashion",
    brand: "Nike",
    name: "Air Force 1",
    price: 110,
    oldPrice: 130,
    rating: 5,
    image:
      "https://cdn.media.amplience.net/i/sportinglife/25457839_WHITE_0/Mens-Air-Force-1-07-Shoe-WHITE?%24default%24=&fmt=auto",
    description: "Classic low-top sneaker with a clean leather upper.",
    options: {
      size: ["39", "40", "41", "42", "43"],
      color: ["White", "Black"],
    },
    specifications: {
      Brand: "Nike",
      Model: "Air Force 1",
      Material: "Leather / Synthetic",
      Style: "Low-top",
      Closure: "Lace-up",
      "Available Sizes": "39 / 40 / 41 / 42 / 43",
      "Available Colors": "White / Black",
    },
  },
  {
    id: 14,
    category: "fashion",
    brand: "Adidas",
    name: "Everyday Sneakers",
    price: 75,
    oldPrice: null,
    rating: 4,
    image:
      "https://imgs.search.brave.com/-R5AsOAaQKDqxieWwkqukrhF559o5nSRXgs2Oq-hoUQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2xKRUFB/ZVN3OTBWcXYwVHEv/cy1sMTIwMC53ZWJw",
    description: "Lightweight sneakers for daily wear.",
    options: {
      size: ["39", "40", "41", "42", "43"],
      color: ["White", "Navy"],
    },
    specifications: {
      Brand: "Adidas",
      Model: "Everyday Sneakers",
      Material: "Mesh / Synthetic",
      Style: "Low-top",
      Closure: "Lace-up",
      "Available Sizes": "39 / 40 / 41 / 42 / 43",
      "Available Colors": "White / Navy",
    },
  },
  {
    id: 15,
    category: "fashion",
    brand: "HELLO Basics",
    name: "Basic T-Shirt",
    price: 15,
    oldPrice: 20,
    rating: 4,
    image:
      "https://imgs.search.brave.com/NiQ6_kHaiurljkVLq1cDuJGjrsG64od3mHTXQQL1ubQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEyZmlCU2VacEwu/anBn",
    description: "Soft cotton t-shirt with a relaxed everyday fit.",
    options: {
      size: ["S", "M", "L", "XL"],
      color: ["White", "Black", "Gray"],
    },
    specifications: {
      Brand: "HELLO Basics",
      Model: "Basic T-Shirt",
      Material: "100% Cotton",
      Style: "Regular fit",
      Closure: "Pullover",
      "Available Sizes": "S / M / L / XL",
      "Available Colors": "White / Black / Gray",
    },
  },
  {
    id: 16,
    category: "fashion",
    brand: "HELLO Basics",
    name: "Oversized Hoodie",
    price: 39,
    oldPrice: 49,
    rating: 5,
    image:
      "https://imgs.search.brave.com/GOl0A2EB9LetzTXUZ1f5lwcj4RBZydi7-QlzfuseeIE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFnbFVUR1FuVUwu/anBn",
    description: "Heavy fleece hoodie with an oversized cut.",
    options: {
      size: ["S", "M", "L", "XL"],
      color: ["Black", "Gray"],
    },
    specifications: {
      Brand: "HELLO Basics",
      Model: "Oversized Hoodie",
      Material: "Cotton / Polyester fleece",
      Style: "Oversized",
      Closure: "Pullover with drawstring",
      "Available Sizes": "S / M / L / XL",
      "Available Colors": "Black / Gray",
    },
  },
  {
    id: 17,
    category: "fashion",
    brand: "HELLO Basics",
    name: "Cargo Pants",
    price: 45,
    oldPrice: null,
    rating: 4,
    image:
      "https://imgs.search.brave.com/FFkEVfAlK00_SFihhZ0tAfpeJMIhRxee7Vz3JIBIm7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF6NEx0cEZQY0wu/anBn",
    description: "Relaxed cargo pants with multiple pockets.",
    options: {
      size: ["28", "30", "32", "34"],
      color: ["Olive", "Black"],
    },
    specifications: {
      Brand: "HELLO Basics",
      Model: "Cargo Pants",
      Material: "Cotton twill",
      Style: "Relaxed fit",
      Closure: "Zip and button",
      "Available Sizes": "28 / 30 / 32 / 34",
      "Available Colors": "Olive / Black",
    },
  },
];

function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

function getUrlParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getProductById(id) {
  return products.find(function (product) {
    return product.id === Number(id);
  });
}

function calculateDiscount(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function filterProducts(category) {
  if (!category) return products;
  return products.filter(function (product) {
    return product.category === category;
  });
}

function getDealProducts() {
  return products.filter(function (product) {
    return calculateDiscount(product.price, product.oldPrice) > 0;
  });
}

function renderStars(rating) {
  let html = "";

  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? "★" : '<span class="empty">★</span>';
  }

  return (
    '<span class="stars" aria-label="Rating ' +
    rating +
    ' of 5">' +
    html +
    "</span>"
  );
}

function createProductCard(product) {
  const discount = calculateDiscount(product.price, product.oldPrice);
  const badge = discount ? '<span class="badge">-' + discount + "%</span>" : "";
  const oldPrice = discount
    ? '<span class="old-price">' + formatPrice(product.oldPrice) + "</span>"
    : "";

  return (
    '<article class="product-card">' +
    '<a class="card-image" href="product.html?id=' +
    product.id +
    '">' +
    '<img src="' +
    product.image +
    '" alt="' +
    product.name +
    '" loading="lazy" referrerpolicy="no-referrer">' +
    badge +
    "</a>" +
    '<div class="card-body">' +
    '<span class="card-brand">' +
    product.brand +
    "</span>" +
    '<h3 class="card-name">' +
    product.name +
    "</h3>" +
    renderStars(product.rating) +
    '<div class="price-row"><span class="price">' +
    formatPrice(product.price) +
    "</span>" +
    oldPrice +
    "</div>" +
    '<a class="btn" href="product.html?id=' +
    product.id +
    '">View Details</a>' +
    "</div>" +
    "</article>"
  );
}

function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list.map(createProductCard).join("");
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("open");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("open");
  if (modalId === "login-modal") pendingBuy = false;
}

function initNavbar() {
  const menuButton = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const categoryItem = document.querySelector(".has-mega");
  const categoryButton = document.querySelector(".nav-toggle-cat");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  if (categoryButton && categoryItem) {
    categoryButton.addEventListener("click", function () {
      categoryItem.classList.toggle("open");
    });
  }
}

document.addEventListener("click", (event) => {
  const overlay = event.target;

  if (overlay.classList.contains("modal-overlay") && !overlay.dataset.persist) {
    closeModal(overlay.id);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  document.querySelectorAll(".modal-overlay.open").forEach((modal) => {
    if (modal.dataset.persist) {
      closeCheckout();
    } else {
      closeModal(modal.id);
    }
  });
});

const COUPON_CODE = "HELLO30%";
const COUPON_RATE = 0.3;

const categoryNames = {
  pc: "PC",
  mobile: "Mobile",
  fashion: "Fashion",
};

const optionLabels = {
  color: "Color",
  storage: "Storage",
  size: "Size",
  ram: "RAM",
  configuration: "Configuration",
};

const categoryImages = {
  pc: "https://imgs.search.brave.com/LarY3FmnKcdLJGA6r-67-akpp-Llvm9g35PUqSlYlxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/ODgyMzgwNi9waG90/by9kZXNrdG9wLXBj/LWNvbXB1dGVyLXRv/d2VyLXdpdGgtZmxh/dC1zY3JlZW4ta2V5/Ym9hcmQtYW5kLW1v/dXNlLW9uLXdoaXRl/LWRlc2suanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTNIcnRf/TVBYTk5CclRqd2FR/SFVMbE9rU2YzeG1r/dDBsUUR3TVpwWEha/S009",
  mobile:
    "https://imgs.search.brave.com/q6zcUGl-0DQJhHc1fJX_kbILUZUfrgRhc7LUrm43YGA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODA5ODU1/NTEwMDktMDUxMDdj/ZDI3NTJjP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE1YeDhZ/VzVrY205cFpDVXlN/SEJvYjI1bGZHVnVm/REI4ZkRCOGZId3c",
  fashion:
    "https://imgs.search.brave.com/5Pzs8qNL56sTkp-m1Ywcw4zUREwIHZLUWz_eE0dZrBs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/NzEwNzcwNC9waG90/by9mYXNoaW9uLWRl/dGFpbHMtb2YtYmxh/Y2stbG9uZy1za2ly/dC1yZWQtZ2xvdmVz/LWFuZC1sZWF0aGVy/LWhhbmRiYWcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXhQ/MEk4eE40Um1WbGV2/ZnV1SlpaWTFOLVIt/VWNmOFE1V2diY0pY/TDQxYVk9",
};

const categoryMenu = [
  {
    cat: "pc",
    title: "PC",
    items: ["Laptops", "Desktop", "Monitors", "Accessories"],
  },
  {
    cat: "mobile",
    title: "Mobile",
    items: ["Smartphones", "Tablets", "Audio", "Smart Watches"],
  },
  {
    cat: "fashion",
    title: "Fashion",
    items: ["Shoes", "T-Shirts", "Hoodies", "Pants"],
  },
];

const iconPaths = {
  Laptops: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
  Desktop:
    '<rect x="3" y="4" width="13" height="10" rx="1"/><path d="M7 18h5M9.5 14v4"/><rect x="18" y="6" width="3" height="12" rx="1"/>',
  Monitors:
    '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
  Accessories:
    '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01M7 14h10"/>',
  Smartphones:
    '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  Tablets:
    '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M11 18h2"/>',
  Audio:
    '<path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  "Smart Watches":
    '<rect x="7" y="7" width="10" height="10" rx="2.5"/><path d="M9 7l1-4h4l1 4M9 17l1 4h4l1-4M12 10v2.5l1.5 1"/>',
  Shoes:
    '<path d="M3 17v-4c2 0 3-1 4-3 1 2 3 3 6 4 3 1 8 1 8 5v1H3z"/><path d="M3 20h18M10 13l1.5-2"/>',
  "T-Shirts":
    '<path d="M9 3L3 6.5 5.5 10 8 8.5V21h8V8.5l2.5 1.5L21 6.5 15 3a3 3 0 01-6 0z"/>',
  Hoodies:
    '<path d="M9 4L3 7.5 5 11l3-1.5V21h8V9.5l3 1.5 2-3.5L15 4c0 3-6 3-6 0z"/><path d="M12 11v4M9 17h6"/>',
  Pants: '<path d="M7 3h10l1 18h-5l-1-12-1 12H6z"/><path d="M7 7h10"/>',
};

function iconSvg(name) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true">' + iconPaths[name] + "</svg>";
}

const paymentMethods = [
  { id: "mastercard", name: "Mastercard", icon: "assets/icons/mastercard.svg" },
  { id: "paypal", name: "PayPal", icon: "assets/icons/paypal.svg" },
  { id: "bitcoin", name: "Bitcoin", icon: "assets/icons/bitcoin.svg" },
  { id: "ethereum", name: "Ethereum", icon: "assets/icons/ethereum.svg" },
  { id: "khqr", name: "KHQR", icon: "assets/icons/khqr.svg" },
];

function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem("helloUser"));
  } catch (error) {
    return null;
  }
}

let currentUser = getSavedUser();
let selectedProduct = null;
let selectedOptions = {};
let quantity = 1;
let couponApplied = false;
let couponMessage = null;
let selectedPayment = null;
let pendingBuy = false;
let orderNumber = "";

function buildLayout(page) {
  const activeMap = {
    home: "home",
    categories: "categories",
    products: "categories",
    product: "categories",
    deals: "support",
    about: "about",
    account: "account",
  };
  const active = activeMap[page];

  const navLink = (key, href, label) =>
    `<li><a href="${href}"${active === key ? ' class="active"' : ""}>${label}</a></li>`;

  const megaColumns = categoryMenu
    .map(
      (group) => `
    <div><h4>${group.title}</h4>
      ${group.items
        .map(
          (item) =>
            `<a href="products.html?cat=${group.cat}"><span class="mini-icon">${iconSvg(item)}</span>${item}</a>`
        )
        .join("")}
    </div>`
    )
    .join("");

  document.getElementById("site-header").innerHTML = `
    <header class="navbar"><div class="container">
      <a class="logo" href="index.html">HELLO<span>.</span></a>
      <button class="menu-btn" type="button" aria-label="Open menu">☰</button>
      <ul class="nav-links">
        ${navLink("home", "index.html", "Home")}
        <li class="has-mega">
          <button class="nav-toggle-cat${active === "categories" ? " active" : ""}" type="button">Categories ▾</button>
          <div class="mega-menu">
            <div class="mega-columns">${megaColumns}</div>
            <div class="mega-footer"><a href="categories.html">View All Categories →</a></div>
          </div>
        </li>
        ${navLink("support", "support.html", "Support")}
        ${navLink("about", "about.html", "About")}
        ${navLink("account", "account.html", "Account")}
      </ul>
    </div></header>`;

  document.getElementById("site-footer").innerHTML = `
    <footer class="footer"><div class="container">
      <strong>HELLO</strong>
      <span>Front-end demo store. No real payments are processed.</span>
    </div></footer>`;

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="modal-overlay" id="login-modal">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <h2 id="login-title">Login</h2>
        <div class="demo-note">Demo login: any email and password work. Only your name and email are saved in this browser.</div>
        <div class="form-group" id="login-name-group" hidden>
          <label for="login-name">Name</label><input id="login-name" type="text" autocomplete="off">
        </div>
        <div class="form-group"><label for="login-email">Email</label><input id="login-email" type="email" autocomplete="off"></div>
        <div class="form-group"><label for="login-password">Password</label><input id="login-password" type="password" autocomplete="off"></div>
        <p class="msg-error" id="login-error"></p>
        <div class="modal-actions">
          <button class="btn" type="button" id="login-submit" onclick="submitLogin()">Login</button>
          <p class="text-muted center"><span id="login-switch-text"></span> <button class="link-btn" type="button" id="login-switch"></button></p>
          <button class="btn btn-outline" type="button" onclick="closeModal('login-modal')">Cancel</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay" id="checkout-modal" data-persist="true">
      <div class="modal modal-wide" id="checkout-content" role="dialog" aria-modal="true"></div>
    </div>`
  );

  document.getElementById("login-switch").addEventListener("click", () => {
    setLoginMode(loginMode === "login" ? "register" : "login");
  });
}

let loginMode = "login";

function loginUser(email, password, name) {
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email address.";
  if (password.length < 4) return "Password must be at least 4 characters.";

  currentUser = { name: name || email.split("@")[0], email: email };
  localStorage.setItem("helloUser", JSON.stringify(currentUser));

  return "";
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("helloUser");

  if (document.body.dataset.page === "account") renderAccount();
}

function setLoginMode(mode) {
  loginMode = mode;
  const isRegister = mode === "register";

  document.getElementById("login-title").textContent = isRegister
    ? "Register"
    : "Login";
  document.getElementById("login-submit").textContent = isRegister
    ? "Create account"
    : "Login";
  document.getElementById("login-name-group").hidden = !isRegister;
  document.getElementById("login-switch-text").textContent = isRegister
    ? "Already have an account?"
    : "Don't have an account?";
  document.getElementById("login-switch").textContent = isRegister
    ? "Login"
    : "Register";
  document.getElementById("login-error").textContent = "";
}

function openLogin(mode) {
  setLoginMode(mode || "login");
  openModal("login-modal");
}

function submitLogin() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const name = document.getElementById("login-name").value.trim();
  const error = loginUser(
    email,
    password,
    loginMode === "register" ? name : ""
  );

  if (error) {
    document.getElementById("login-error").textContent = error;
    return;
  }

  const continueBuy = pendingBuy;

  ["login-email", "login-password", "login-name"].forEach((id) => {
    document.getElementById(id).value = "";
  });

  closeModal("login-modal");

  if (document.body.dataset.page === "account") renderAccount();
  if (continueBuy) startCheckout();
}

function getSelectedPrices() {
  let extra = 0;

  Object.keys(selectedOptions).forEach((key) => {
    const prices =
      selectedProduct.optionPrices && selectedProduct.optionPrices[key];

    if (prices && prices[selectedOptions[key]]) {
      extra += prices[selectedOptions[key]];
    }
  });

  const price = selectedProduct.price + extra;
  const oldPrice = selectedProduct.oldPrice
    ? Math.round((price * selectedProduct.oldPrice) / selectedProduct.price)
    : null;

  return { price: price, oldPrice: oldPrice };
}

function getSpecRows(addBasics) {
  const specs = selectedProduct.specifications;
  const rows = [];

  if (addBasics && !specs.Brand) rows.push(["Brand", selectedProduct.brand]);
  if (addBasics && !specs.Model) rows.push(["Model", selectedProduct.name]);

  Object.keys(specs).forEach((key) => {
    const chosen =
      key === "RAM" || key === "Storage"
        ? selectedOptions[key.toLowerCase()]
        : null;

    rows.push([key, chosen || specs[key]]);
  });

  return rows;
}

function renderOptions() {
  const box = document.getElementById("option-groups");
  if (!box) return;

  box.innerHTML = Object.keys(selectedProduct.options)
    .map(
      (key) => `
    <div class="option-group">
      <h4>${optionLabels[key]}: <span class="text-muted">${selectedOptions[key]}</span></h4>
      <div class="option-list">
        ${selectedProduct.options[key]
          .map(
            (value) => `
          <button type="button" class="option-btn${selectedOptions[key] === value ? " selected" : ""}"
            aria-pressed="${selectedOptions[key] === value}" onclick="selectOption('${key}', '${value}')">${value}</button>`
          )
          .join("")}
      </div>
    </div>`
    )
    .join("");
}

function renderPrice() {
  const prices = getSelectedPrices();
  const discount = calculateDiscount(prices.price, prices.oldPrice);

  document.getElementById("price-block").innerHTML =
    `<span class="detail-price">${formatPrice(prices.price)}</span>` +
    (discount
      ? `<span class="old-price">${formatPrice(prices.oldPrice)}</span><span class="save-badge">Save ${discount}%</span>`
      : "");
}

function renderSpecs() {
  document.getElementById("key-specs").innerHTML = getSpecRows(false)
    .slice(0, 4)
    .map(
      (row) =>
        `<div class="key-spec"><span class="text-muted">${row[0]}</span><strong>${row[1]}</strong></div>`
    )
    .join("");

  document.getElementById("spec-body").innerHTML = getSpecRows(true)
    .map((row) => `<tr><th>${row[0]}</th><td>${row[1]}</td></tr>`)
    .join("");
}

function updateProductView() {
  renderOptions();
  renderPrice();
  renderSpecs();
}

function selectOption(key, value) {
  selectedOptions[key] = value;
  updateProductView();
}

function renderProductDetails() {
  const container = document.getElementById("product-detail");
  const product = getProductById(getUrlParameter("id"));

  if (!product) {
    container.innerHTML =
      '<div class="container empty-state"><h2>Product not found</h2><p><a class="link-btn" href="products.html">Browse all products</a></p></div>';
    return;
  }

  selectedProduct = product;
  selectedOptions = {};

  Object.keys(product.options).forEach((key) => {
    selectedOptions[key] = product.options[key][0];
  });

  document.title = product.name + " — HELLO";

  container.innerHTML = `
    <div class="container section">
      <nav class="breadcrumb"><a href="index.html">Home</a> / <a href="products.html?cat=${product.category}">${categoryNames[product.category]}</a> / ${product.name}</nav>
      <div class="detail-grid">
        <div class="detail-image"><img src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer"></div>
        <div class="detail-info">
          <span class="card-brand">${product.brand}</span>
          <h1>${product.name}</h1>
          ${renderStars(product.rating)}
          <div class="price-row" id="price-block"></div>
          <div id="option-groups"></div>
          <button class="btn btn-lg btn-block" type="button" onclick="buyNow()">Buy Now</button>
        </div>
      </div>
      <h2 class="block-title">Key Specifications</h2>
      <div class="key-specs" id="key-specs"></div>
      <h2 class="block-title">Product Description</h2>
      <p class="prose">${product.description}</p>
      <h2 class="block-title">Full Specifications</h2>
      <div class="table-wrap"><table class="spec-table">
        <thead><tr><th>Specification</th><th>Details</th></tr></thead>
        <tbody id="spec-body"></tbody>
      </table></div>
    </div>`;

  updateProductView();
}

function buyNow() {
  if (!currentUser) {
    pendingBuy = true;
    openLogin("login");
    return;
  }

  startCheckout();
}

function resetCheckoutState() {
  quantity = 1;
  couponApplied = false;
  couponMessage = null;
  selectedPayment = null;
}

function startCheckout() {
  pendingBuy = false;
  resetCheckoutState();
  showCheckoutStep("summary");
  openModal("checkout-modal");
}

function closeCheckout() {
  closeModal("checkout-modal");
  resetCheckoutState();
}

function calculateTotal() {
  const prices = getSelectedPrices();
  const subtotal = prices.price * quantity;
  const originalTotal = (prices.oldPrice || prices.price) * quantity;
  const couponDiscount = couponApplied
    ? Math.round(subtotal * COUPON_RATE * 100) / 100
    : 0;

  return {
    originalTotal: originalTotal,
    subtotal: subtotal,
    couponDiscount: couponDiscount,
    total: subtotal - couponDiscount,
  };
}

function changeQuantity(value) {
  quantity = Number(value);
  showCheckoutStep("summary");
}

function applyCoupon(event) {
  event.preventDefault();

  const code = document
    .getElementById("coupon-input")
    .value.trim()
    .toUpperCase();

  if (code === COUPON_CODE) {
    couponApplied = true;
    couponMessage = { text: "Coupon applied — 30% OFF", type: "success" };
  } else {
    couponApplied = false;
    couponMessage = { text: "Invalid coupon code.", type: "error" };
  }

  showCheckoutStep("summary");
}

function selectPaymentMethod(methodId) {
  selectedPayment = methodId;
  showCheckoutStep("method");
}

function showCheckoutStep(step) {
  const steps = {
    summary: checkoutSummaryHtml,
    method: paymentMethodsHtml,
    form: paymentFormHtml,
    done: confirmationHtml,
  };

  document.getElementById("checkout-content").innerHTML = steps[step]();
}

function checkoutSummaryHtml() {
  const t = calculateTotal();
  const optionsText = Object.keys(selectedOptions)
    .map((key) => selectedOptions[key])
    .join(" / ");
  const message = couponMessage
    ? `<p class="msg-${couponMessage.type}">${couponMessage.text}</p>`
    : "";
  const couponRow = couponApplied
    ? `<div class="summary-row"><span>Coupon</span><span class="sale">-${formatPrice(t.couponDiscount)}</span></div>`
    : "";

  return `
    <h2>Checkout</h2>
    <div class="summary">
      <div class="summary-row"><span>Product</span><strong>${selectedProduct.name}</strong></div>
      ${optionsText ? `<div class="summary-row"><span>Options</span><span>${optionsText}</span></div>` : ""}
      <div class="summary-row"><span>Quantity</span>
        <select aria-label="Quantity" onchange="changeQuantity(this.value)">
          ${[1, 2, 3, 4, 5].map((n) => `<option value="${n}"${n === quantity ? " selected" : ""}>${n}</option>`).join("")}
        </select></div>
      <div class="summary-row"><span>Original</span><span>${formatPrice(t.originalTotal)}</span></div>
      <div class="summary-row"><span>Current</span><span>${formatPrice(t.subtotal)}</span></div>
      ${couponRow}
      <div class="summary-row total"><span>Total</span><strong>${formatPrice(t.total)}</strong></div>
    </div>
    <form class="coupon-form" onsubmit="applyCoupon(event)">
      <input id="coupon-input" type="text" placeholder="Coupon code" aria-label="Coupon code" autocomplete="off"
        value="${couponApplied ? COUPON_CODE : ""}"${couponApplied ? " disabled" : ""}>
      <button class="btn btn-outline" type="submit"${couponApplied ? " disabled" : ""}>Apply</button>
    </form>
    ${message}
    <div class="modal-actions">
      <button class="btn" type="button" onclick="showCheckoutStep('method')">${couponApplied ? "Continue to payment" : "Continue without coupon"}</button>
      <button class="btn btn-outline" type="button" onclick="closeCheckout()">Cancel</button>
    </div>`;
}

function paymentMethodsHtml() {
  return `
    <h2>Choose Payment Method</h2>
    <p class="text-muted center">Total <strong>${formatPrice(calculateTotal().total)}</strong></p>
    <div class="pay-grid">
      ${paymentMethods
        .map(
          (method) => `
        <button type="button" class="pay-card${selectedPayment === method.id ? " selected" : ""}"
          aria-pressed="${selectedPayment === method.id}" onclick="selectPaymentMethod('${method.id}')">
          <img src="${method.icon}" alt=""><span>${method.name}</span>
        </button>`
        )
        .join("")}
    </div>
    <div class="modal-actions">
      <button class="btn" type="button"${selectedPayment ? "" : " disabled"} onclick="showCheckoutStep('form')">Continue</button>
      <button class="btn btn-outline" type="button" onclick="showCheckoutStep('summary')">Back</button>
    </div>`;
}

function formatCardNumber(input) {
  input.value = input.value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(input) {
  const digits = input.value.replace(/\D/g, "").slice(0, 4);

  input.value =
    digits.length > 2 ? digits.slice(0, 2) + "/" + digits.slice(2) : digits;
}

function createFakeQr() {
  const size = 25;
  let cells = "";

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const inCorner =
        (row < 8 && col < 8) ||
        (row < 8 && col > size - 9) ||
        (row > size - 9 && col < 8);

      if (!inCorner && (row * 7 + col * 13 + row * col) % 5 < 2) {
        cells += `<rect x="${col}" y="${row}" width="1" height="1"/>`;
      }
    }
  }

  const finder = (x, y) =>
    `<rect x="${x}" y="${y}" width="7" height="7"/><rect x="${x + 1}" y="${y + 1}" width="5" height="5" fill="#fff"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;

  return `<svg class="qr" viewBox="0 0 ${size} ${size}" width="190" height="190" role="img" aria-label="Demo QR code, not scannable">
    <rect width="${size}" height="${size}" fill="#fff"/>
    <g fill="#1b1f3b">${cells}${finder(0, 0)}${finder(size - 7, 0)}${finder(0, size - 7)}</g>
    <rect x="7" y="10" width="11" height="5" fill="#fff"/>
    <text x="12.5" y="13.6" font-size="3.2" font-weight="700" text-anchor="middle" fill="#e5484d" font-family="Arial">DEMO</text></svg>`;
}

function paymentFormHtml() {
  const method = paymentMethods.find((item) => item.id === selectedPayment);
  const total = formatPrice(calculateTotal().total);
  let fields = "";
  let payLabel = "Pay " + total;

  if (selectedPayment === "mastercard") {
    fields = `
      <div class="form-group"><label for="card-name">Cardholder Name</label><input id="card-name" type="text" autocomplete="off"></div>
      <div class="form-group"><label for="card-number">Card Number</label>
        <input id="card-number" type="text" inputmode="numeric" placeholder="0000 0000 0000 0000" autocomplete="off" oninput="formatCardNumber(this)"></div>
      <div class="form-row">
        <div class="form-group"><label for="card-expiry">Expiry Date</label>
          <input id="card-expiry" type="text" inputmode="numeric" placeholder="MM/YY" autocomplete="off" oninput="formatExpiry(this)"></div>
        <div class="form-group"><label for="card-cvv">CVV</label>
          <input id="card-cvv" type="password" inputmode="numeric" maxlength="4" placeholder="•••" autocomplete="off"></div>
      </div>`;
  } else if (selectedPayment === "paypal") {
    payLabel = "Continue with PayPal";
    fields = `
      <div class="form-group"><label for="paypal-email">Email</label><input id="paypal-email" type="email" autocomplete="off"></div>
      <div class="form-group"><label for="paypal-password">Password</label><input id="paypal-password" type="password" autocomplete="off"></div>`;
  } else if (selectedPayment === "bitcoin" || selectedPayment === "ethereum") {
    payLabel = "Confirm Payment";

    const coins = [
      ["bitcoin", "Bitcoin"],
      ["ethereum", "Ethereum"],
      ["usdt", "USDT"],
    ];

    fields = `
      <div class="form-group"><label>Choose Cryptocurrency</label>
        ${coins.map((coin) => `<label class="radio"><input type="radio" name="coin" value="${coin[0]}"${coin[0] === selectedPayment ? " checked" : ""}> ${coin[1]}</label>`).join("")}
      </div>
      <div class="form-group"><label for="wallet-address">Wallet Address</label><input id="wallet-address" type="text" autocomplete="off"></div>
      <div class="summary-row"><span>Amount</span><strong>${total}</strong></div>`;
  } else if (selectedPayment === "khqr") {
    payLabel = "I've Paid";
    fields = `
      <p class="center">Amount <strong>${total}</strong></p>
      <div class="qr-box">${createFakeQr()}</div>
      <p class="text-muted center">KHQR DEMO — fake code, do not scan.</p>`;
  }

  return `
    <h2 class="pay-title"><img src="${method.icon}" alt="">${method.name}</h2>
    <div class="demo-note">Demo only. Nothing is charged and nothing you type is saved.</div>
    ${fields}
    <p class="msg-error" id="pay-error"></p>
    <div class="modal-actions">
      <button class="btn" type="button" onclick="payNow()">${payLabel}</button>
      <button class="btn btn-outline" type="button" onclick="closeCheckout()">Cancel</button>
      <button class="link-btn" type="button" onclick="showCheckoutStep('method')">Change payment method</button>
    </div>`;
}

function validatePayment() {
  const value = (id) => {
    const field = document.getElementById(id);
    return field ? field.value.trim() : "";
  };

  if (selectedPayment === "mastercard") {
    if (!value("card-name")) return "Enter the cardholder name.";
    if (value("card-number").replace(/\s/g, "").length !== 16) {
      return "Card number must have 16 digits.";
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value("card-expiry"))) {
      return "Expiry date must be MM/YY.";
    }
    if (!/^\d{3,4}$/.test(value("card-cvv"))) {
      return "CVV must be 3 or 4 digits.";
    }
  } else if (selectedPayment === "paypal") {
    if (!/^\S+@\S+\.\S+$/.test(value("paypal-email"))) {
      return "Enter a valid email address.";
    }
    if (!document.getElementById("paypal-password").value) {
      return "Enter a password.";
    }
  } else if (selectedPayment === "bitcoin" || selectedPayment === "ethereum") {
    if (value("wallet-address").length < 6) return "Enter a wallet address.";
  }

  return "";
}

function payNow() {
  const error = validatePayment();

  if (error) {
    document.getElementById("pay-error").textContent = error;
    return;
  }

  showConfirmation();
}

function confirmationHtml() {
  return `
    <div class="confirm">
      <div class="confirm-check">✓</div>
      <h2>Order Confirmed</h2>
      <p class="text-muted">Thank you for shopping with HELLO.</p>
      <p class="order-number">Order #${orderNumber}</p>
      <button class="btn btn-block" type="button" onclick="finishOrder()">Continue Shopping</button>
    </div>`;
}

function showConfirmation() {
  orderNumber = "HELLO-" + (1000 + Math.floor(Math.random() * 9000));
  showCheckoutStep("done");
}

function finishOrder() {
  closeCheckout();
  window.location.href = "index.html";
}

function renderCategoryCards(containerId) {
  document.getElementById(containerId).innerHTML = categoryMenu
    .map(
      (group) => `
    <a class="category-card" href="products.html?cat=${group.cat}">
      <div class="category-image"><img src="${categoryImages[group.cat]}" alt="${group.title}" referrerpolicy="no-referrer"></div>
      <h3>${group.title}</h3>
      <p class="text-muted">${filterProducts(group.cat).length} products</p>
      <div class="sub-grid">
        ${group.items.map((item) => `<div class="sub-item"><span class="sub-icon">${iconSvg(item)}</span><span>${item}</span></div>`).join("")}
      </div>
      <span class="category-link">Shop ${group.title} →</span>
    </a>`
    )
    .join("");
}

function renderAccount() {
  const view = document.getElementById("account-view");

  if (!currentUser) {
    view.innerHTML =
      '<h1>Welcome to HELLO</h1><p class="text-muted">Login to buy products and see your account.</p><button class="btn" type="button" onclick="openLogin(\'login\')">Login</button>';
    return;
  }

  view.innerHTML =
    '<h1>Welcome back!</h1><p class="account-name"></p><p class="text-muted account-email"></p><button class="btn btn-outline" type="button" onclick="logoutUser()">Logout</button>';

  view.querySelector(".account-name").textContent = currentUser.name;
  view.querySelector(".account-email").textContent = currentUser.email;
}

function initProductsPage() {
  const cat = getUrlParameter("cat");
  const valid = Boolean(categoryNames[cat]);
  const list = valid ? filterProducts(cat) : cat ? [] : products;
  const title = valid ? categoryNames[cat] : "All Products";

  document.title = title + " — HELLO";
  document.getElementById("page-title").textContent = title;
  document.getElementById("product-count").textContent = list.length + " products";

  document.getElementById("chips").innerHTML = [["", "All"]]
    .concat(Object.keys(categoryNames).map((key) => [key, categoryNames[key]]))
    .map(
      (item) =>
        `<a class="chip${(cat || "") === item[0] ? " active" : ""}" href="products.html${item[0] ? "?cat=" + item[0] : ""}">${item[1]}</a>`
    )
    .join("");

  if (list.length === 0) {
    document.getElementById("product-grid").innerHTML =
      '<p class="empty-state">No products found. <a class="link-btn" href="products.html">Show all</a></p>';
    return;
  }

  renderProducts(list, "product-grid");
}

function initPage() {
  const page = document.body.dataset.page;

  buildLayout(page);
  initNavbar();

  if (page === "home") {
    renderCategoryCards("category-grid");
    renderProducts(
      [1, 3, 2, 7, 9, 13, 16, 5].map(getProductById),
      "featured-grid"
    );
    renderProducts(getDealProducts().slice(0, 4), "deals-grid");
  } else if (page === "categories") {
    renderCategoryCards("category-grid");
  } else if (page === "products") {
    initProductsPage();
  } else if (page === "product") {
    renderProductDetails();
  } else if (page === "account") {
    renderAccount();
  }
}

document.addEventListener("DOMContentLoaded", initPage);