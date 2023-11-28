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
modalOpenBtn.forEach((item) => {
  item.addEventListener("click", function () {
    modalWindow.classList.add("active");
  });
});
function closeModal() {
  modalWindow.classList.remove("active");
}

modalCloseBtn.addEventListener("click", closeModal);

modalWindow.addEventListener("click", function (e) {
  if (e.target === modalWindow) {
    closeModal();
  }
});

$(".slider-block").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
