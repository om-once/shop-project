const btns = document.querySelectorAll(".product-card__btn-product");
const productCount = document.querySelector(".products-count");

btns.forEach((item) => {
  item.addEventListener("click", function () {
    let count = +productCount.textContent;
    console.log("clicked");
    productCount.textContent = ++count;
  });
});

const likeBtns = document.querySelectorAll(".btn-like");

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});

const modalOpenBtn = document.querySelectorAll(".more-details");
const modalWindow = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".close");
const modalOverlay = document.querySelector(".modal__overlay");
modalOpenBtn.forEach((item) => {
  item.addEventListener("click", function () {
    modalWindow.classList.add("active");
  });
});

modalCloseBtn.addEventListener("click", function () {
  modalWindow.classList.remove("active");
});

modalOverlay.addEventListener("click", function () {
  modalWindow.classList.remove("active");
});