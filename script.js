console.log("Hallo, Welt!");

window.onload = function () {
  insertAge();
  setupHamburgerMenu();
  setupTopButtonClick();
  handleTopButtonVisibility();
};

window.onscroll = function () {
  handleTopButtonVisibility();
};


function insertAge() {
  const birthDate = new Date(2002, 1, 11);  
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  var hasBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayThisYear) {
    age = age - 1;
  }

  var ageSpan = document.getElementById("age");
  if (ageSpan) {
    ageSpan.innerHTML = age;
  }
}

function setupHamburgerMenu() {
  var menuButton = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");

  if (!menuButton || !navLinks) {
    return;
  }

  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("nav-open");

    var isOpen = navLinks.classList.contains("nav-open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  function closeMenu() {
    navLinks.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  var links = navLinks.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", closeMenu);
  }
}


function setupTopButtonClick() {
  var topBtn = document.getElementById("topBtn");
  if (!topBtn) {
    return;
  }

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function handleTopButtonVisibility() {
  var topBtn = document.getElementById("topBtn");
  if (!topBtn) {
    return;
  }

  var scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPos > 150) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
}
