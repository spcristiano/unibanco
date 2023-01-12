//========================================== Control for the Mobile view Navigation starts here ===============================================================

// assigning values to constants
const mobileMenu = document.getElementById("mobile-menu");
const menuCloseBtn = document.getElementById("close-mobile-menu");
const menuOpenBtn = document.getElementById("mobile-nav-link");

// This will open the mobile menu
menuOpenBtn.addEventListener("click",function(){
mobileMenu.classList.toggle("overlay");
});

// This will close the mobile menu
menuCloseBtn.addEventListener("click", function(){
    mobileMenu.classList.remove("overlay");
});

// this will increase the scale of the mobile hamburger menu at mouse hover
menuOpenBtn.addEventListener("mouseover", function(){
    menuOpenBtn.style.transform = "scale(1.05)";
});

// this will return the scale of the mobile hamburger menu to normal state at mouse out
menuOpenBtn.addEventListener("mouseout", function(){
    menuOpenBtn.style.transform = "scale(1)";
});

// this will increase the scale of the mobile hamburger close mennu button at mouse hover
menuCloseBtn.addEventListener("mouseover", function(){
    menuCloseBtn.style.transform = "scale(1.05)";
});

// this will return the scale of the mobile hamburger close mennu button at mouse out
menuCloseBtn.addEventListener("mouseout", function(){
    menuCloseBtn.style.transform = "scale(1)";
});

//================================================= Control for the Mobile view Navigation Ends here ========================================================


//================================================= Control for the Internet banking starts here ========================================================
const fit = document.getElementById("fit");
const pword = document.getElementById("password")
const showImg = document.getElementById("show")
const hideImg = document.getElementById("hide")
const visibility = document.getElementById("visibility")

pword.addEventListener("focus", function(){
    fit.style.border = "0.14rem solid var(--orange)"
    fit.style.transition = "0.5s all ease-in-out"

});

pword.addEventListener("blur", function(){
    fit.style.border = "0.14rem solid transparent"
    fit.style.transition = "0.5s all ease-in-out"
});

showImg.addEventListener("click", function(){
    showImg.classList.toggle("hide")
    showImg.classList.remove("show")
    hideImg.classList.toggle("show")
    hideImg.classList.remove("hide")
    pword.type = "text"
    pword.style.borderColor = "transparent"
})

hideImg.addEventListener("click", function(){
    showImg.classList.toggle("show")
    showImg.classList.remove("hide")
    hideImg.classList.toggle("hide")
    hideImg.classList.remove("show")
    pword.type = "password"
    // showImg.src = "../images/hidden.png"
    pword.type = "password"
    pword.style.borderColor = "transparent"
})
//================================================= Control for the Internet banking Ends here ========================================================


/*// assigning values to constants
const logoText = document.getElementById("logo");
const mobileMenu = document.getElementById("mobile-btn");
const menuCloseBtn = document.getElementById("close-btn");
const screenWidth = document.getElementById("width")

var screenInnerWidth = window.innerWidth;

if (screenInnerWidth > 992){
    logoText.innerHTML = "UNIBANCO"
}

screenWidth.innerHTML = window.innerWidth;
// This will clear the innerHtml in logo
mobileMenu.addEventListener("click",function(){
    logoText.innerHTML = "";
    });

menuCloseBtn.addEventListener("click", function(){
    logoText.innerHTML = "UNIBANCO"
});
*/

// This is the carousel start


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}
// This is the carousel end
