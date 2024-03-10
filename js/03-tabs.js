const tabsHeaders = document.querySelectorAll("[data-tab]");
const listBlocks = document.querySelectorAll("[data-tab-content]");

tabsHeaders.forEach(function (item, index) {
  item.addEventListener("click", function () {
    console.log(this.dataset.tab);
    hideTabs();
    const contentBlock = document.querySelector("#" + this.dataset.tab);
    contentBlock.classList.remove("hidden");
  });
});

function hideTabs() {
  listBlocks.forEach(function (item) {
    item.classList.add("hidden");
  });
}
