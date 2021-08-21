// Declaring Variables
// Base Price Field
const basePriceField = document.getElementById("cost-base");

// Memory Buttons
const btnMemory8GB = document.getElementById("btn-memory-8GB");
const btnMemory16GB = document.getElementById("btn-memory-16GB");

// Memory Field
const memoryField = document.getElementById("cost-memory");

// Storage Buttons
const btnStorage256GB = document.getElementById("btn-storage-256GB");
const btnStorage512GB = document.getElementById("btn-storage-512GB");
const btnStorage1TB = document.getElementById("btn-storage-1TB");

// Storage Field
const storageField = document.getElementById("cost-storage");

// Delivery Buttons
const btnDeliveryFree = document.getElementById("btn-delivery-free");
const btnDeliveryPaid = document.getElementById("btn-delivery-paid");

// Delivery Field
const deliveryField = document.getElementById("cost-delivery");

// Total Price Field
const totalPriceField = document.getElementById("price-total");

// Promo Code Field
const promoField = document.getElementById("promo-field");

// Promo Verification Button
const btnPromoVerify = document.getElementById("btn-promo-verify");

// Final Price Field
const finalPriceField = document.getElementById("price-final");

// Functions
// Function: Set Total Price
function setTotalPrice() {
  const getBasePrice = parseInt(basePriceField.innerText);
  const getMemoryPrice = parseInt(memoryField.innerText);
  const getStoragePrice = parseInt(storageField.innerText);
  const getDeliveryPrice = parseInt(deliveryField.innerText);

  const totalPrice =
    getBasePrice + getMemoryPrice + getStoragePrice + getDeliveryPrice;
  totalPriceField.innerText = totalPrice;
}

// Function Verify Promo
function verifyPromo(promoCode) {
  if (promoField.value.toLowerCase() == promoCode.toLowerCase()) {
    finalPriceField.innerText = parseFloat(totalPriceField.innerText) * 0.8;
  } else {
    finalPriceField.innerText = parseFloat(totalPriceField.innerText);
  }
}

// Function: Display price according to inputs
function displayPrice(variableName, fieldName, amountToSet) {
  variableName.addEventListener("click", function (e) {
    fieldName.innerText = amountToSet;
    setTotalPrice();
    verifyPromo("stevekaku");
    const children = e.target.parentNode.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].classList == "button-pressed") {
        children[i].classList.remove("button-pressed");
      }
    }
    e.target.classList.add("button-pressed");
  });
}

// Promo Code Verification
btnPromoVerify.addEventListener("click", function () {
  verifyPromo("stevekaku");
});

// Input Handling
// Memory Input Actions
displayPrice(btnMemory8GB, memoryField, 0);
displayPrice(btnMemory16GB, memoryField, 180);

// Storage Input Actions
displayPrice(btnStorage256GB, storageField, 0);
displayPrice(btnStorage512GB, storageField, 100);
displayPrice(btnStorage1TB, storageField, 180);

// Delivery Input Actions
displayPrice(btnDeliveryFree, deliveryField, 0);
displayPrice(btnDeliveryPaid, deliveryField, 20);
