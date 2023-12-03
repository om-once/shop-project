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

// counter func style
let incrementBtn = document.querySelectorAll(".increment-btn");
let productQuantity = document.querySelectorAll(".product-quantity");
productQuantity.forEach((item) => {
  incrementBtn = item.querySelector(".increment-btn");
  decrementBtn = item.querySelector(".decrement-btn");
  inputField = item.querySelector(".quantity-value");
  function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
      incrementBtn,
      decrementBtn,
      inputField,
    };
    this.toggleButtonState = function () {
      let count = this.domRefs.inputField.value;
      this.domRefs.decrementBtn.disabled = count <= 1;
      this.domRefs.incrementBtn.disabled = count >= 10;
    };
    this.toggleButtonState();

    this.increment = function () {
      this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
      this.toggleButtonState();
    };
    this.decrement = function () {
      this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
      this.toggleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener(
      "click",
      this.increment.bind(this)
    );
    this.domRefs.decrementBtn.addEventListener(
      "click",
      this.decrement.bind(this)
    );
  }

  const counter1 = new Counter(incrementBtn, decrementBtn, inputField);
  console.log(counter1);
});

// let currentCount = +inputFields.value;

// function toggleButtonState(count) {
//   // if (count <= minCount) {
//   //   decrementBtns.disabled = true;
//   //   incrementBtns.disabled = false;
//   // } else if (count > minCount && count >= maxCount) {
//   //   decrementBtns.disabled = false;
//   //   incrementBtns.disabled = true;
//   // }
//   decrementBtns.disabled = count <= minCount;
//   incrementBtns.disabled = count >= maxCount;
// }

// toggleButtonState(currentCount);

// incrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   let nextCount = currentCount + 1;
//   inputFields.value = nextCount;
//   toggleButtonState(nextCount);
// });

// decrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   let nextCount = currentCount - 1;
//   inputFields.value = nextCount;

//   toggleButtonState(nextCount);
// });

// oop style
// let audi = {
//   model: "A4",
//   year: "2020",
//   color: "black",
// };

// let bmw = {
//   model: "328",
//   year: "2008",
//   color: "red",
// };

// let lexus = {
//   model: "IS250",
//   year: "2010",
//   color: "grey",
// };

// function Car(model, year, color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.hi = function () {
//     return "Hi " + this.model;
//   };
//   console.log(this);
// }

// const audi = new Car("Audi A4", "2020", "Black");
// const bmw = new Car("BMW 328", "2006", "White");
// const lexus = new Car("Lexus is250", "2010", "grey");

// console.log(audi);
// console.log(bmw);
// console.log(lexus);

// console.log(audi.hi());
// console.log(bmw.hi());
// console.log(lexus.hi());
