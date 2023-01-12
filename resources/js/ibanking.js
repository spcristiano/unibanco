//================================================= Control for the Internet banking starts here ========================================================

const fitting = document.getElementById("fit");
const pword = document.getElementById("password");
const showImgPass = document.getElementById("showImgPass");
const hideImgPass = document.getElementById("hideImgPass");
// const pwordVisibilityContainer = document.getElementById("pwordVisibilityContainer");

pword.addEventListener("focus", function(){
    // fitting.style.borderColor = "var(--orange)";
    fitting.style.border = "0.14rem solid var(--orange)";
    fitting.style.transition = "0.3s all ease-in-out";
})

pword.addEventListener("blur", function(){
    fit.style.border = "0.14rem solid transparent";
    fit.style.transition = "0.5s all ease-in-out";
})

showImgPass.addEventListener("click", function(){
    showImgPass.classList.toggle("hideImg")
    showImgPass.classList.remove("showImg")
    hideImgPass.classList.toggle("showImg")
    hideImgPass.classList.remove("hideImg")
    pword.type = "text"
    pword.style.padding = "0.8rem 0rem"
    pword.style.borderColor = "transparent"
})

hideImgPass.addEventListener("click", function(){
    showImgPass.classList.toggle("showImg")
    showImgPass.classList.remove("hideImg")
    hideImgPass.classList.toggle("hideImg")
    hideImgPass.classList.remove("showImg")
    pword.type = "password"
    // showImg.src = "../images/hidden.png"
    pword.type = "password"
    pword.style.borderColor = "transparent"
})

//================================================= Control for the Internet banking Ends here ========================================================

