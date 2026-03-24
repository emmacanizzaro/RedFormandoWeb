// === INICIALIZACIÓN GLOBAL UNIFICADA ===
document.addEventListener("DOMContentLoaded", function () {
  // MENÚ HAMBURGUESA MULTI-SECCIÓN
  function setupHamburgerMenus() {
    const hamburgerBtns = document.querySelectorAll(".js-hamburger-menu");
    hamburgerBtns.forEach((hamburgerBtn) => {
      // Buscar el menú hamburguesa hermano
      const menuHamburguesa =
        hamburgerBtn.parentElement.querySelector(".menu-hamburguesa");
      if (!menuHamburguesa) return;
      hamburgerBtn.addEventListener("click", (e) => {
        if (document.body.classList.contains("modal-open")) return;
        const isOpen = menuHamburguesa.classList.toggle("open");
        hamburgerBtn.classList.toggle("open", isOpen);
        hamburgerBtn.setAttribute("aria-expanded", isOpen);
        menuHamburguesa.setAttribute("aria-hidden", !isOpen);
        // Cerrar otros menús abiertos
        document
          .querySelectorAll(".menu-hamburguesa.open")
          .forEach((otherMenu) => {
            if (otherMenu !== menuHamburguesa) {
              otherMenu.classList.remove("open");
              const otherBtn =
                otherMenu.parentElement.querySelector(".js-hamburger-menu");
              if (otherBtn) {
                otherBtn.classList.remove("open");
                otherBtn.setAttribute("aria-expanded", "false");
              }
              otherMenu.setAttribute("aria-hidden", "true");
            }
          });
        e.stopPropagation();
      });
      // Cerrar menú al hacer click fuera
      document.addEventListener("click", (e) => {
        if (
          menuHamburguesa.classList.contains("open") &&
          !menuHamburguesa.contains(e.target) &&
          e.target !== hamburgerBtn
        ) {
          menuHamburguesa.classList.remove("open");
          hamburgerBtn.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
          menuHamburguesa.setAttribute("aria-hidden", "true");
        }
      });
      // Cerrar con Escape
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuHamburguesa.classList.contains("open")) {
          menuHamburguesa.classList.remove("open");
          hamburgerBtn.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
          menuHamburguesa.setAttribute("aria-hidden", "true");
        }
      });
    });
  }
  setupHamburgerMenus();

  // Inicialización de recursos y eventos
  if (typeof applyRuntimeConfig === "function") {
    applyRuntimeConfig();
  }
});
// === INSCRIPCIÓN EVENTO ===
document.addEventListener("DOMContentLoaded", function () {
  const abrirInscripcionBtn = document.getElementById(
    "abrir-inscripcion-evento",
  );
  const inscripcionSection = document.getElementById("inscripcion-evento");
  // Delegación para cerrar (X y Cancelar)
  document.body.addEventListener("click", function (e) {
    if (!inscripcionSection) return;
    // Botón X
    if (e.target && e.target.id === "cerrar-inscripcion-x") {
      inscripcionSection.hidden = true;
      inscripcionSection.setAttribute("aria-hidden", "true");
      inscripcionSection.classList.remove("is-open");
      document.body.classList.remove("modal-open");
    }
    // Botón Cancelar
    if (e.target && e.target.id === "cerrar-inscripcion-evento") {
      inscripcionSection.hidden = true;
      inscripcionSection.setAttribute("aria-hidden", "true");
      inscripcionSection.classList.remove("is-open");
      document.body.classList.remove("modal-open");
    }
    // Fondo oscuro
    if (e.target === inscripcionSection) {
      inscripcionSection.hidden = true;
      inscripcionSection.setAttribute("aria-hidden", "true");
      inscripcionSection.classList.remove("is-open");
      document.body.classList.remove("modal-open");
    }
  });
  // Escape
  window.addEventListener("keydown", function (event) {
    if (
      inscripcionSection &&
      event.key === "Escape" &&
      !inscripcionSection.hidden
    ) {
      inscripcionSection.hidden = true;
      inscripcionSection.setAttribute("aria-hidden", "true");
      inscripcionSection.classList.remove("is-open");
      document.body.classList.remove("modal-open");
    }
  });
  // Abrir
  if (abrirInscripcionBtn && inscripcionSection) {
    abrirInscripcionBtn.addEventListener("click", function () {
      inscripcionSection.hidden = false;
      inscripcionSection.setAttribute("aria-hidden", "false");
      inscripcionSection.classList.add("is-open");
      document.body.classList.add("modal-open");
      // Foco accesible
      const cerrarBtn = document.getElementById("cerrar-inscripcion-evento");
      if (cerrarBtn) cerrarBtn.focus();
    });
  }
  // Pagar
  const btnPagarInscripcion = document.getElementById("btn-pagar-inscripcion");
  if (btnPagarInscripcion) {
    btnPagarInscripcion.addEventListener("click", function () {
      const moneda = document.querySelector('input[name="moneda"]:checked');
      if (!moneda) return;
      if (moneda.value === "ars") {
        window.open("https://www.mercadopago.com.ar/", "_blank");
      } else {
        window.open("https://www.paypal.com/paypalme/redformando", "_blank");
      }
    });
  }
});
// === MODAL INSCRIPCIÓN EVENTO ===
const abrirModalBtn = document.getElementById("abrir-modal-evento");
const modal = document.getElementById("modal-inscripcion");
const cerrarModalBtn = document.getElementById("cerrar-modal-inscripcion");

if (abrirModalBtn && modal && cerrarModalBtn) {
  abrirModalBtn.addEventListener("click", () => {
    modal.hidden = false;
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    // Enfoca el botón de cerrar para accesibilidad
    cerrarModalBtn.focus();
  });

  function cerrarModal() {
    modal.classList.remove("is-open");
    setTimeout(() => {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }, 300);
  }

  cerrarModalBtn.addEventListener("click", cerrarModal);

  // Cierra al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Cierra con Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) {
      cerrarModal();
    }
  });
}
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

const cartItems = [];
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cartPanel = document.getElementById("cart-panel");
const clearCartButton = document.getElementById("clear-cart");
const checkoutForm = document.getElementById("checkout-form");
const checkoutName = document.getElementById("checkout-name");
const checkoutPhone = document.getElementById("checkout-phone");
const checkoutEmail = document.getElementById("checkout-email");
const checkoutNotes = document.getElementById("checkout-notes");
const checkoutCurrencyInputs = document.querySelectorAll(
  'input[name="checkout-currency"]',
);
const checkoutSubmitButton = document.getElementById("checkout-submit");
const productCarousel = document.getElementById("product-carousel");
const carouselStatus = document.getElementById("carousel-status");
const donationOpenIntentKey = "redformando:open-donaciones";
const cartStorageKey = "redformando:cart";
const checkoutStorageKey = "redformando:checkout";

let checkoutConfig = {
  paymentLinks: {
    ars: "#",
    usd: "#",
  },
  paymentProviders: {
    ars: "Mercado Pago",
    usd: "PayPal",
  },
};

function getSelectedCurrency() {
  const selected = Array.from(checkoutCurrencyInputs).find(
    (input) => input.checked,
  );
  return selected?.value === "usd" ? "usd" : "ars";
}

function getCurrencyInfo(currency) {
  if (currency === "usd") {
    return {
      code: "USD",
      label: "u$d",
      paymentLink: checkoutConfig.paymentLinks.usd || "#",
      provider: checkoutConfig.paymentProviders.usd || "PayPal",
    };
  }

  return {
    code: "ARS",
    label: "$",
    paymentLink: checkoutConfig.paymentLinks.ars || "#",
    provider: checkoutConfig.paymentProviders.ars || "Mercado Pago",
  };
}

function updateCheckoutSubmitLabel() {
  if (!checkoutSubmitButton) return;

  checkoutSubmitButton.textContent = "Finalizar compra";
}

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

  const eventsGrid = document.getElementById("events-grid");
  if (eventsGrid && Array.isArray(cfg.eventsBoard?.items)) {
    eventsGrid.innerHTML = "";

    cfg.eventsBoard.items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "event-card";

      const note = document.createElement("p");
      note.className = "event-note";
      note.textContent = item.note || "Próximo evento";

      const media = document.createElement("div");
      media.className = "event-media";

      const img = document.createElement("img");
      img.src = item.image || "assets/images/img-home.svg";
      img.alt = item.alt || "Banner del evento";

      const cta = document.createElement("a");
      cta.className = "event-link";
      cta.href = "#";
      cta.textContent = item.ctaLabel || "Más info";
      cta.addEventListener("click", function (e) {
        e.preventDefault();
        const inscripcionSection =
          document.getElementById("inscripcion-evento");
        if (inscripcionSection) {
          inscripcionSection.hidden = false;
          inscripcionSection.setAttribute("aria-hidden", "false");
          inscripcionSection.classList.add("is-open");
          document.body.classList.add("modal-open");
          const cerrarBtn = document.getElementById(
            "cerrar-inscripcion-evento",
          );
          if (cerrarBtn) cerrarBtn.focus();
        }
      });
      media.appendChild(img);
      card.append(note, media, cta);
      eventsGrid.appendChild(card);
    });
  }

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

  if (cfg.checkout) {
    const legacyLink = cfg.checkout.paymentLink || "#";

    checkoutConfig = {
      paymentLinks: {
        ars: cfg.checkout.paymentLinks?.ars || legacyLink,
        usd: cfg.checkout.paymentLinks?.usd || legacyLink,
      },
      paymentProviders: {
        ars: cfg.checkout.paymentProviders?.ars || "Mercado Pago",
        usd: cfg.checkout.paymentProviders?.usd || "PayPal",
      },
    };
  }

  updateCheckoutSubmitLabel();
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

function formatPrice(value) {
  return Number(value || 0).toLocaleString("es-AR");
}

function getCartTotal() {
  return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function saveCartToStorage() {
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify(cartItems));
  } catch {
    // Si el navegador bloquea almacenamiento, el carrito funciona en memoria.
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(cartStorageKey);
    if (!raw) return;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;

    cartItems.length = 0;
    parsed.forEach((item) => {
      const name = String(item.name || "").trim();
      const price = Number(item.price);
      const qty = Number(item.qty || 1);
      if (!name || Number.isNaN(price) || price <= 0 || qty <= 0) return;
      cartItems.push({ name, price, qty });
    });
  } catch {
    // Si el JSON está corrupto, seguimos con carrito vacío.
  }
}

function saveCheckoutData() {
  if (!checkoutForm) return;

  const payload = {
    name: checkoutName?.value?.trim() || "",
    phone: checkoutPhone?.value?.trim() || "",
    email: checkoutEmail?.value?.trim() || "",
    currency: getSelectedCurrency(),
    notes: checkoutNotes?.value?.trim() || "",
  };

  try {
    localStorage.setItem(checkoutStorageKey, JSON.stringify(payload));
  } catch {
    // Si falla almacenamiento, no bloqueamos el checkout.
  }
}

function loadCheckoutData() {
  if (!checkoutForm) return;

  try {
    const raw = localStorage.getItem(checkoutStorageKey);
    if (!raw) return;

    const data = JSON.parse(raw);
    if (checkoutName) checkoutName.value = data.name || "";
    if (checkoutPhone) checkoutPhone.value = data.phone || "";
    if (checkoutEmail) checkoutEmail.value = data.email || "";
    if (data.currency && checkoutCurrencyInputs.length) {
      checkoutCurrencyInputs.forEach((input) => {
        input.checked = input.value === data.currency;
      });
    }
    if (checkoutNotes) checkoutNotes.value = data.notes || "";
  } catch {
    // Ignoramos datos inválidos de almacenamiento.
  }
}

function renderCart() {
  if (!cartItemsList || !cartTotal || !cartCount) return;

  cartItemsList.innerHTML = "";
  const total = getCartTotal();

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item";

    const text = document.createElement("span");
    text.textContent = `${item.name} x${item.qty} - $ ${formatPrice(item.price * item.qty)}`;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "cart-remove-btn";
    removeButton.textContent = "Quitar";
    removeButton.addEventListener("click", () => {
      const index = cartItems.findIndex(
        (cartItem) => cartItem.name === item.name,
      );
      if (index < 0) return;

      if (cartItems[index].qty > 1) {
        cartItems[index].qty -= 1;
      } else {
        cartItems.splice(index, 1);
      }

      saveCartToStorage();
      renderCart();
    });

    li.append(text, removeButton);
    cartItemsList.appendChild(li);
  });

  if (!cartItems.length) {
    const li = document.createElement("li");
    li.className = "cart-empty";
    li.textContent = "Todavía no agregaste libros.";
    cartItemsList.appendChild(li);
  }

  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = String(totalQty);
  cartTotal.textContent = formatPrice(total);
}

function setupCheckoutForm() {
  if (!checkoutForm) return;

  loadCheckoutData();

  [checkoutName, checkoutPhone, checkoutEmail, checkoutNotes].forEach(
    (field) => {
      if (!field) return;
      field.addEventListener("input", saveCheckoutData);
    },
  );

  checkoutCurrencyInputs.forEach((input) => {
    input.addEventListener("change", () => {
      updateCheckoutSubmitLabel();
      saveCheckoutData();
    });
  });

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!cartItems.length) {
      window.alert("Agregá al menos un libro al carrito para continuar.");
      return;
    }

    saveCheckoutData();

    const selectedCurrency = getSelectedCurrency();
    const currencyInfo = getCurrencyInfo(selectedCurrency);
    if (currencyInfo.paymentLink === "#") {
      window.alert(
        `Configurá el link de pago en RED_CONFIG.checkout.paymentLinks.${selectedCurrency}.`,
      );
      return;
    }

    window.open(currencyInfo.paymentLink, "_blank", "noopener,noreferrer");
  });

  updateCheckoutSubmitLabel();
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();
applyRuntimeConfig();
setupCarouselControls();
markActiveDropdownPage();
setupDonationIntentTracking();
setupDonationSection();
setupBienalSection();
loadCartFromStorage();
renderCart();
setupCheckoutForm();
initEventLightbox();

function initEventLightbox() {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Vista ampliada del evento");

  const inner = document.createElement("div");
  inner.className = "lightbox-inner";

  const img = document.createElement("img");
  img.alt = "";

  const closeBtn = document.createElement("button");
  closeBtn.className = "lightbox-close";
  closeBtn.setAttribute("aria-label", "Cerrar imagen");
  closeBtn.textContent = "\u00D7";

  inner.append(img, closeBtn);
  overlay.appendChild(inner);
  document.body.appendChild(overlay);

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const target = e.target.closest(".event-media img");
    if (target) openLightbox(target.src, target.alt);
  });

  closeBtn.addEventListener("click", closeLightbox);

  overlay.addEventListener("click", (e) => {
    if (!inner.contains(e.target) || e.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open"))
      closeLightbox();
  });
}

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

    const name = button.dataset.item;
    const price = Number(button.dataset.price);
    if (!name || Number.isNaN(price) || price <= 0) return;

    const existingItem = cartItems.find((item) => item.name === name);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cartItems.push({
        name,
        price,
        qty: 1,
      });
    }

    saveCartToStorage();
    renderCart();
    cartPanel.classList.add("open");
    cartPanel.setAttribute("aria-hidden", "false");
  });
});

if (clearCartButton) {
  clearCartButton.addEventListener("click", () => {
    cartItems.length = 0;
    saveCartToStorage();
    renderCart();
  });
}

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
