window.onload = function () {
  var mobileMenuButton = document.querySelector(".header-menu-icon");
  var headerMenu = document.querySelector(".header-menu");

  //   Mobile menu display setting
  mobileMenuButton.addEventListener("click", function () {
    headerMenu.classList.toggle("header-menu--closed");
    if (headerMenu.classList.contains("header-menu--closed")) {
      mobileMenuButton.querySelector("img").src = "assets/icons/menu.svg";
    } else {
      mobileMenuButton.querySelector("img").src = "assets/icons/x.svg";
    }
  });

  //   Redirect user to product.html when click on product-card
  var productCards = document.querySelectorAll(".product-card");

  productCards.forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = "product.html";
    });
  });

  //   Footer Current year display
  var currentYear = new Date().getFullYear();
  document.querySelector("#current-year").innerHTML = currentYear;
};
