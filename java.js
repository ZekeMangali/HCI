const dish = document.getElementById("dish");
const dish1 = document.getElementById("Korean1");
const dish2 = document.getElementById("Korean2");
const dish3 = document.getElementById("Filipino1");
const dish4 = document.getElementById("Filipino2");
const dish5 = document.getElementById("Coffee1");
const dish6 = document.getElementById("Coffee2");

dish1.addEventListener("click", () => {
  dish.src = "/HMP/Korean1.png";
});
dish2.addEventListener("click", () => {
  dish.src = "/HMP/Korean2.png";
});
dish3.addEventListener("click", () => {
  dish.src = "/HMP/Filipino1.png";
});
dish4.addEventListener("click", () => {
  dish.src = "/HMP/Filipino2.png";
});
dish5.addEventListener("click", () => {
  dish.src = "/HMP/Coffee1.png";
});
dish6.addEventListener("click", () => {
  dish.src = "/HMP/Coffee2.png";
});
