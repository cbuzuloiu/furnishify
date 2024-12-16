let items = document.getElementsByClassName("faq-item");

console.log(items);

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    this.classList.toggle("open");
  });
}
