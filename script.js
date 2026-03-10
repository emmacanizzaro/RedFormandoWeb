const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

const cartItems = [];
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartPanel = document.getElementById("cart-panel");
const productCarousel = document.getElementById("product-carousel");
const carouselStatus = document.getElementById("carousel-status");
const donationOpenIntentKey = "redformando:open-donaciones";

function setupDonationIntentTracking() {
  const donationButtons = document.querySelectorAll(".btn-donaciones");
  if (!donationButtons.length) return;

  donationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sessionStorage.setItem(donationOpenIntentKey, "1");
    });
  });
}

function getYouTubeThumbnailUrl(videoUrl) {
  if (!videoUrl) return null;

  try {
    const parsed = new URL(videoUrl);
    let videoId = "";

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.replace("/", "").trim();
    } else if (parsed.hostname.includes("youtube.com")) {
      videoId = parsed.searchParams.get("v") || "";

      if (!videoId && parsed.pathname.includes("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1]?.split("/")[0] || "";
      }
    }

    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return null;
  }
}

function applyRuntimeConfig() {
  const cfg = window.RED_CONFIG;
  if (!cfg) return;

  const nosotrosImg = document.getElementById("nosotros-image");
  if (nosotrosImg && cfg.nosotrosImage) {
    nosotrosImg.src = cfg.nosotrosImage;
  }

  const socialMap = [
    ["ana-facebook", cfg.social?.anaFacebook],
    ["ana-instagram", cfg.social?.anaInstagram],
    ["alberto-facebook", cfg.social?.albertoFacebook],
    ["alberto-instagram", cfg.social?.albertoInstagram],
  ];

  socialMap.forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (el && href) {
      el.href = href;
    }
  });

  if (Array.isArray(cfg.blogPdfLinks)) {
    cfg.blogPdfLinks.forEach((url, idx) => {
      const card = document.getElementById(`blog-pdf-${idx + 1}`);
      if (card && url) {
        card.href = url;
      }
    });
  }

  const webinarLink = document.getElementById("course-webinar-link");
  if (webinarLink && cfg.courses?.webinarForm) {
    webinarLink.href = cfg.courses.webinarForm;
  }

  const webinarImage = document.getElementById("course-webinar-image");
  if (webinarImage && cfg.courses?.webinarImage) {
    webinarImage.src = cfg.courses.webinarImage;
  }

  const edmiLink = document.getElementById("course-edmi-link");
  if (edmiLink && cfg.courses?.edmiForm) {
    edmiLink.href = cfg.courses.edmiForm;
  }

  const edmiImage = document.getElementById("course-edmi-image");
  if (edmiImage && cfg.courses?.edmiImage) {
    edmiImage.src = cfg.courses.edmiImage;
  }

  const bienalLink = document.getElementById("bienal-link");
  if (bienalLink && cfg.bienal?.verMasLink) {
    bienalLink.href = cfg.bienal.verMasLink;
  }

  const bienalDetailImage = document.getElementById("bienal-detail-image");
  if (bienalDetailImage && cfg.bienal?.imageUrl) {
    bienalDetailImage.src = cfg.bienal.imageUrl;
  }

  const bienalVideoLink = document.getElementById("bienal-video-link");
  if (bienalVideoLink && cfg.bienal?.videoUrl) {
    bienalVideoLink.href = cfg.bienal.videoUrl;

    const bienalVideoImage = bienalVideoLink.querySelector("img");
    const thumbnailUrl = getYouTubeThumbnailUrl(cfg.bienal.videoUrl);
    if (bienalVideoImage && thumbnailUrl) {
      bienalVideoImage.src = thumbnailUrl;
      bienalVideoImage.alt = "Portada del video en YouTube";
    }
  }

  const bienalPdfLink = document.getElementById("bienal-pdf-link");
  if (bienalPdfLink && cfg.bienal?.pdfUrl) {
    bienalPdfLink.href = cfg.bienal.pdfUrl;
  }

  const bienalMaterialLink = document.getElementById("bienal-material-link");
  if (bienalMaterialLink && cfg.bienal?.materialUrl) {
    bienalMaterialLink.href = cfg.bienal.materialUrl;
  }
}

function setupBienalSection() {
  const detailSection = document.getElementById("bienal-detalle");
  const openButton = document.getElementById("bienal-link");
  const closeButton = document.getElementById("bienal-close");
  if (!detailSection || !openButton || !closeButton) return;

  let lastFocusTarget = openButton;

  function openBienalSection() {
    if (document.activeElement instanceof HTMLElement) {
      lastFocusTarget = document.activeElement;
    }

    detailSection.hidden = false;
    detailSection.setAttribute("aria-hidden", "false");
    detailSection.classList.add("is-open");
    document.body.classList.add("modal-open");
    closeButton.focus();
  }

  function closeBienalSection() {
    detailSection.hidden = true;
    detailSection.setAttribute("aria-hidden", "true");
    detailSection.classList.remove("is-open");
    document.body.classList.remove("modal-open");

    if (window.location.hash === "#bienal-detalle") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    if (lastFocusTarget && typeof lastFocusTarget.focus === "function") {
      lastFocusTarget.focus();
    } else {
      openButton.focus();
    }
  }

  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    openBienalSection();
  });

  closeButton.addEventListener("click", closeBienalSection);

  detailSection.addEventListener("click", (event) => {
    if (event.target === detailSection) {
      closeBienalSection();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !detailSection.hidden) {
      closeBienalSection();
    }
  });

  if (window.location.hash === "#bienal-detalle") {
    detailSection.hidden = false;
    detailSection.setAttribute("aria-hidden", "false");
    detailSection.classList.add("is-open");
    document.body.classList.add("modal-open");
  }
}

function setupCarouselControls() {
  if (!productCarousel || !carouselStatus) return;

  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const cards = Array.from(productCarousel.querySelectorAll(".product-card"));
  if (!cards.length || !prevBtn || !nextBtn) return;

  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + 14;
  }

  function getActiveIndex() {
    return Math.min(
      cards.length,
      Math.max(1, Math.round(productCarousel.scrollLeft / getCardWidth()) + 1),
    );
  }

  function updateStatus() {
    carouselStatus.textContent = `${getActiveIndex()} / ${cards.length}`;
  }

  prevBtn.addEventListener("click", () => {
    productCarousel.scrollBy({
      left: -getCardWidth(),
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    productCarousel.scrollBy({
      left: getCardWidth(),
      behavior: "smooth",
    });
  });

  productCarousel.addEventListener("scroll", updateStatus);
  window.addEventListener("resize", updateStatus);
  updateStatus();
}

function markActiveDropdownPage() {
  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
  if (!dropdownLinks.length) return;

  let activeFound = false;

  dropdownLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isActive = href === pageName;
    link.classList.toggle("active", isActive);
    if (isActive) {
      activeFound = true;
    }
  });

  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownSummary = document.querySelector(".nav-link-dropdown");
  if (!dropdown || !dropdownSummary) return;

  dropdownSummary.classList.toggle("active", activeFound);
}

function setupDonationSection() {
  const donationSection = document.getElementById("donaciones");
  if (!donationSection) return;

  const closeButton = document.getElementById("donation-close");
  const donationButtons = document.querySelectorAll(".btn-donaciones");
  let lastFocusTarget = null;

  function openDonationSection() {
    if (document.activeElement instanceof HTMLElement) {
      lastFocusTarget = document.activeElement;
    }

    donationSection.hidden = false;
    donationSection.setAttribute("aria-hidden", "false");
    donationSection.classList.add("is-open");
    document.body.classList.add("modal-open");

    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeDonationSection() {
    donationSection.hidden = true;
    donationSection.setAttribute("aria-hidden", "true");
    donationSection.classList.remove("is-open");
    document.body.classList.remove("modal-open");

    if (window.location.hash === "#donaciones") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    if (lastFocusTarget && typeof lastFocusTarget.focus === "function") {
      lastFocusTarget.focus();
    }
  }

  donationButtons.forEach((button) => {
    const href = button.getAttribute("href") || "";
    if (href !== "#donaciones") return;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      openDonationSection();
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeDonationSection);
  }

  donationSection.addEventListener("click", (event) => {
    if (event.target === donationSection) {
      closeDonationSection();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !donationSection.hidden) {
      closeDonationSection();
    }
  });

  if (window.location.hash === "#donaciones") {
    const hasOpenIntent = sessionStorage.getItem(donationOpenIntentKey) === "1";

    if (hasOpenIntent) {
      openDonationSection();
      sessionStorage.removeItem(donationOpenIntentKey);
    } else {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  }
}

function setActiveLink() {
  let currentId = "";

  sections.forEach((section) => {
    const offsetTop = section.offsetTop - 180;
    if (window.scrollY >= offsetTop) {
      currentId = section.id;
    }
  });

  links.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
}

function renderCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $ ${item.price.toLocaleString("es-AR")}`;
    cartItemsList.appendChild(li);
  });

  cartCount.textContent = String(cartItems.length);
  cartTotal.textContent = total.toLocaleString("es-AR");
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();
applyRuntimeConfig();
setupCarouselControls();
markActiveDropdownPage();
setupDonationIntentTracking();
setupDonationSection();
setupBienalSection();

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    if (!cartPanel || !cartItemsList || !cartTotal || !cartCount) return;

    cartItems.push({
      name: button.dataset.item,
      price: Number(button.dataset.price),
    });
    renderCart();
    cartPanel.classList.add("open");
    cartPanel.setAttribute("aria-hidden", "false");
  });
});

const openCartButton = document.getElementById("open-cart");
if (openCartButton && cartPanel) {
  openCartButton.addEventListener("click", () => {
    cartPanel.classList.toggle("open");
    const expanded = cartPanel.classList.contains("open");
    cartPanel.setAttribute("aria-hidden", String(!expanded));
  });
}

const closeCartButton = document.getElementById("close-cart");
if (closeCartButton && cartPanel) {
  closeCartButton.addEventListener("click", () => {
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
  });
}
