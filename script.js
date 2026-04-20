const products = [
  {
    id: 1,
    title: "Cloudline Hoodie",
    category: "hoodies",
    price: 39,
    oldPrice: 52,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Oversized everyday hoodie in a soft neutral tone for campus mornings, coffee runs, and lazy late-night city walks.",
    badge: "Best seller",
    material: "Cotton fleece",
    fit: "Relaxed oversized",
    occasion: "University and daily wear",
    delivery: "1-3 days",
    story:
      "This hoodie is built around the core Meoowl Store idea: easy, wearable fashion that looks current without trying too hard. It is soft, simple, and made to survive long days without feeling heavy.",
    highlights: [
      "Soft brushed inside for a cozy feel",
      "Easy neutral color for mixing with denim and cargos",
      "Clean shape that works on both phone and laptop shopping screens",
    ],
    image:
      "https://images.unsplash.com/photo-1567893493475-13f4d04403d8?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/K_mQ7seoRnM",
  },
  {
    id: 2,
    title: "Street Ease Jeans",
    category: "jeans",
    price: 42,
    oldPrice: 56,
    sizes: ["28", "30", "32", "34"],
    description:
      "Straight-leg jeans with a casual modern fit that works for classes, daily plans, and low-effort street looks.",
    badge: "New fit",
    material: "Blue denim",
    fit: "Straight leg",
    occasion: "Daily wear",
    delivery: "2-4 days",
    story:
      "The cut stays simple on purpose. No weird circus silhouette, no desperate trend-chasing, just denim that does its damn job and still looks sharp.",
    highlights: [
      "Balanced waist and leg line",
      "Easy styling with tees, hoodies, or sweaters",
      "Reliable shape for long everyday wear",
    ],
    image:
      "https://images.unsplash.com/photo-1577210897949-1f56f943bf82?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/womens-blue-denim-bottoms-i227dPHaQ7s",
  },
  {
    id: 3,
    title: "Cotton Mood Tee",
    category: "t-shirts",
    price: 22,
    oldPrice: 29,
    sizes: ["XS", "S", "M", "L"],
    description:
      "Clean cotton t-shirt with an easy silhouette and a minimal look that slides into almost any outfit.",
    badge: "Core basic",
    material: "100% cotton",
    fit: "Regular fit",
    occasion: "Layering and basics",
    delivery: "1-2 days",
    story:
      "A proper basic is harder to find than people admit. This one keeps the line clean, the shape reliable, and the vibe far away from bargain-bin garbage.",
    highlights: [
      "Breathable cotton feel",
      "Works solo or under hoodies and jackets",
      "Minimal product look inspired by social-first fashion pages",
    ],
    image:
      "https://images.unsplash.com/photo-1651761179569-4ba2aa054997?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/a-white-shirt-on-a-white-background-4rUYuwJ2vGw",
  },
  {
    id: 4,
    title: "Evening Flow Dress",
    category: "dresses",
    price: 48,
    oldPrice: 63,
    sizes: ["S", "M", "L"],
    description:
      "A simple party-ready dress with a fluid shape, soft drape, and enough elegance for evening plans.",
    badge: "Party pick",
    material: "Smooth satin blend",
    fit: "Slim flowing fit",
    occasion: "Parties and events",
    delivery: "2-4 days",
    story:
      "This one leans into the project brief directly: modern, stylish, and easy. It does not scream for attention like a drunk uncle at a wedding, but it definitely gets noticed.",
    highlights: [
      "Elegant shape with clean movement",
      "Works with heels or simple accessories",
      "Strong event piece without losing comfort",
    ],
    image:
      "https://images.unsplash.com/photo-1765229285144-9adddf61410e?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/a-woman-in-a-long-elegant-green-dress-IT-x_jevbw8",
  },
  {
    id: 5,
    title: "Campus Mini Crossbody",
    category: "accessories",
    price: 26,
    oldPrice: 34,
    sizes: ["One size"],
    description:
      "Compact crossbody bag for essentials, perfect for students and busy people who want style without bulk.",
    badge: "Daily carry",
    material: "Textured vegan leather",
    fit: "Adjustable strap",
    occasion: "Commute and city errands",
    delivery: "1-3 days",
    story:
      "A small bag can save an outfit or kill it stone dead. This one keeps it sharp and practical without looking like your stuff is packed into a sad little lunchbox.",
    highlights: [
      "Hands-free daily carry",
      "Works with hoodies, denim, and dresses",
      "Minimal silhouette with enough structure",
    ],
    image:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/grey-leather-crossbody-bag-ZB4eQcNqVUs",
  },
  {
    id: 6,
    title: "Linen Touch Sweater",
    category: "hoodies",
    price: 44,
    oldPrice: 58,
    sizes: ["S", "M", "L"],
    description:
      "Lightweight sweater with a breathable feel that keeps the cozy side of the brand without overheating the whole fit.",
    badge: "Soft neutral",
    material: "Linen-cotton knit",
    fit: "Loose fit",
    occasion: "Everyday comfort",
    delivery: "2-3 days",
    story:
      "The texture is the whole point here. It gives the catalog a warmer mood and keeps the outfit from feeling flat as week-old soda.",
    highlights: [
      "Breathable knit texture",
      "Neutral palette built for warm website styling",
      "Comfortable layer for phone-to-campus life",
    ],
    image:
      "https://images.unsplash.com/photo-1612636676503-77f496c96ef8?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/person-wearing-brown-knit-sweater-INhcvGnVV3w",
  },
  {
    id: 7,
    title: "Night Shift Hoodie",
    category: "hoodies",
    price: 41,
    oldPrice: 55,
    sizes: ["M", "L", "XL"],
    description:
      "Dark pullover hoodie for colder evenings, simple street styling, and that low-key clean look people always chase.",
    badge: "Street mood",
    material: "Heavy cotton blend",
    fit: "Relaxed fit",
    occasion: "Evening wear",
    delivery: "2-4 days",
    story:
      "A darker option for people who want their outfit to look serious without turning into full funeral-core. It is straightforward, clean, and actually wearable.",
    highlights: [
      "Dense fabric feel",
      "Easy match with denim and sneakers",
      "Sharper mood for late-day styling",
    ],
    image:
      "https://images.unsplash.com/photo-1546863929-b9c543a2aec7?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/woman-wearing-black-pullover-hoodie-z_wLeitKd70",
  },
  {
    id: 8,
    title: "Brown Note Purse",
    category: "accessories",
    price: 31,
    oldPrice: 40,
    sizes: ["One size"],
    description:
      "Structured brown purse with a polished finish for simple outfits that need one richer detail.",
    badge: "Warm accent",
    material: "Leather finish",
    fit: "Compact shoulder carry",
    occasion: "Daily styling and casual events",
    delivery: "1-3 days",
    story:
      "This piece mirrors the warm beige-brown palette from the brief. It adds that polished touch without making the whole outfit look like it is begging for approval.",
    highlights: [
      "Warm tone matches the site palette",
      "Compact shape with practical carry space",
      "Easy upgrade for neutral outfits",
    ],
    image:
      "https://images.unsplash.com/photo-1669893903189-2c981358e1d0?auto=format&fit=crop&w=900&q=80",
    source: "https://unsplash.com/photos/a-brown-leather-purse-9g7jaMTpgxo",
  },
];

const grid = document.querySelector("#productGrid");
const template = document.querySelector("#productCardTemplate");
const searchInput = document.querySelector("#searchInput");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const bagCount = document.querySelector("#bagCount");
const bagButton = document.querySelector("#bagButton");

const modal = document.querySelector("#productModal");
const modalCloseButton = document.querySelector("#modalCloseButton");
const modalImage = document.querySelector("#modalImage");
const modalBadge = document.querySelector("#modalBadge");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalPrice = document.querySelector("#modalPrice");
const modalOldPrice = document.querySelector("#modalOldPrice");
const modalDescription = document.querySelector("#modalDescription");
const modalHighlights = document.querySelector("#modalHighlights");
const modalMaterial = document.querySelector("#modalMaterial");
const modalFit = document.querySelector("#modalFit");
const modalOccasion = document.querySelector("#modalOccasion");
const modalDelivery = document.querySelector("#modalDelivery");
const modalStory = document.querySelector("#modalStory");
const sizeOptions = document.querySelector("#sizeOptions");
const qtyMinus = document.querySelector("#qtyMinus");
const qtyPlus = document.querySelector("#qtyPlus");
const qtyValue = document.querySelector("#qtyValue");
const modalAddButton = document.querySelector("#modalAddButton");
const relatedGrid = document.querySelector("#relatedGrid");

let currentFilter = "all";
let bagItems = 0;
let activeProduct = null;
let selectedSize = null;
let selectedQty = 1;

function formatCategory(category) {
  return category.replace("-", " ");
}

function formatPrice(value) {
  return `$${value}`;
}

function updateBagCount() {
  bagCount.textContent = String(bagItems);
}

function addToBag(product, amount) {
  bagItems += amount;
  updateBagCount();
  bagButton.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.08)" },
      { transform: "scale(1)" },
    ],
    { duration: 260, easing: "ease-out" }
  );
  bagButton.setAttribute(
    "aria-label",
    `${product.title} added. Shopping bag now has ${bagItems} item${bagItems === 1 ? "" : "s"}`
  );
}

function createHighlight(text) {
  const node = document.createElement("article");
  node.className = "modal-point";
  node.textContent = text;
  return node;
}

function createSizeButton(size) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `size-button${selectedSize === size ? " is-active" : ""}`;
  button.textContent = size;
  button.addEventListener("click", () => {
    selectedSize = size;
    [...sizeOptions.querySelectorAll(".size-button")].forEach((item) => {
      item.classList.toggle("is-active", item.textContent === size);
    });
  });
  return button;
}

function renderRelatedProducts(product) {
  const related = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3);

  relatedGrid.innerHTML = "";

  if (!related.length) {
    relatedGrid.innerHTML = `
      <article class="related-card">
        <div class="related-card-copy">
          <strong>No twins here</strong>
          <span>This item stands on its own, smug little bastard.</span>
        </div>
      </article>
    `;
    return;
  }

  related.forEach((item) => {
    const card = document.createElement("article");
    card.className = "related-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="related-card-copy">
        <strong>${item.title}</strong>
        <span>${formatPrice(item.price)} · ${formatCategory(item.category)}</span>
      </div>
    `;
    card.addEventListener("click", () => openProductModal(item.id));
    relatedGrid.append(card);
  });
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  activeProduct = product;
  selectedSize = product.sizes[0];
  selectedQty = 1;

  modalImage.src = product.image;
  modalImage.alt = product.title;
  modalBadge.textContent = product.badge;
  modalCategory.textContent = formatCategory(product.category);
  modalTitle.textContent = product.title;
  modalPrice.textContent = formatPrice(product.price);
  modalOldPrice.textContent = formatPrice(product.oldPrice);
  modalDescription.textContent = product.description;
  modalMaterial.textContent = product.material;
  modalFit.textContent = product.fit;
  modalOccasion.textContent = product.occasion;
  modalDelivery.textContent = product.delivery;
  modalStory.innerHTML = `${product.story} <a href="${product.source}" target="_blank" rel="noreferrer">Photo source</a>.`;
  qtyValue.textContent = String(selectedQty);

  modalHighlights.innerHTML = "";
  product.highlights.forEach((point) => modalHighlights.append(createHighlight(point)));

  sizeOptions.innerHTML = "";
  product.sizes.forEach((size) => sizeOptions.append(createSizeButton(size)));

  renderRelatedProducts(product);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeProduct = null;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchesFilter = currentFilter === "all" || product.category === currentFilter;
    const searchableText = `${product.title} ${product.category} ${product.description} ${product.material} ${product.occasion}`.toLowerCase();
    return matchesFilter && searchableText.includes(query);
  });

  grid.innerHTML = "";

  if (!filteredProducts.length) {
    const emptyState = document.createElement("article");
    emptyState.className = "product-card";
    emptyState.innerHTML = `
      <div class="product-copy">
        <div class="product-meta">
          <span>No match</span>
          <span>Try again</span>
        </div>
        <h3 class="product-title">No products found</h3>
        <p class="product-description">
          Change the search text or switch the category filter to explore more of the Meoowl Store catalog.
        </p>
      </div>
    `;
    grid.append(emptyState);
    return;
  }

  filteredProducts.forEach((product) => {
    const node = template.content.firstElementChild.cloneNode(true);

    node.querySelector("img").src = product.image;
    node.querySelector("img").alt = product.title;
    node.querySelector(".product-badge").textContent = product.badge;
    node.querySelector(".product-category").textContent = formatCategory(product.category);
    node.querySelector(".product-price").textContent = formatPrice(product.price);
    node.querySelector(".product-title").textContent = product.title;
    node.querySelector(".product-description").textContent = product.description;
    node.querySelector(".product-sizes").textContent = `Sizes: ${product.sizes.join(", ")}`;

    node.querySelector(".product-view-button").addEventListener("click", () => {
      openProductModal(product.id);
    });

    node.querySelector(".product-add-button").addEventListener("click", () => {
      addToBag(product, 1);
    });

    node.querySelector(".product-visual").addEventListener("click", () => {
      openProductModal(product.id);
    });
    node.querySelector(".product-title").addEventListener("click", () => {
      openProductModal(product.id);
    });

    grid.append(node);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

qtyMinus.addEventListener("click", () => {
  selectedQty = Math.max(1, selectedQty - 1);
  qtyValue.textContent = String(selectedQty);
});

qtyPlus.addEventListener("click", () => {
  selectedQty += 1;
  qtyValue.textContent = String(selectedQty);
});

modalAddButton.addEventListener("click", () => {
  if (!activeProduct) return;
  addToBag(activeProduct, selectedQty);
});

modalCloseButton.addEventListener("click", closeProductModal);
modal.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeModal === "true") {
    closeProductModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeProductModal();
  }
});

bagButton.addEventListener("click", () => {
  const catalog = document.querySelector("#catalog");
  catalog?.scrollIntoView({ behavior: "smooth", block: "start" });
});

updateBagCount();
renderProducts();
