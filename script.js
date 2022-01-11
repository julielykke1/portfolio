const btn = document.querySelector("button");
const ul = document.querySelector("nav");
const c = document.querySelector("#container");
const s = document.querySelector("#sprite");

// Burger-menu

function toggleMenu() {
  ul.classList.toggle("shown");

  const menu = ul.classList.contains("shown");

  if (menu) {
    // hvis det er sandt, at ul har klassen "shown"  //   .. Så vil jeg gerne have at min menuknaps indhold er lig med burger-ikon.Hvis IKKE, menu indeholder hidden, og det altså er "falsk", så skal der i stedet for, vises et kryds.
    //btn.textContent = "Luk";
    btn.classList.add("open");
  } else {
    // hvis IKKE ul har klassen "shown", så skal den vise burger-menuen
    //btn.textContent = "Menu";
    btn.classList.remove("open");
  }
}

btn.addEventListener("click", toggleMenu);

// Slideshow, tema4 section 2
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
