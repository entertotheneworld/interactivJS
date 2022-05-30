// FOOTER CLIQUE

let footer = document.getElementsByTagName("footer")[0];

let numberClickFooter = 0;
footer.addEventListener("click", function(){
    numberClickFooter += 1;  
    console.log(`"clic numéro ${numberClickFooter}`); 
});

// Hamburger Menu

let collapse = document.getElementById("navbarHeader");
let hamburgerMenu = document.querySelectorAll("button.navbar-toggler")[0];

hamburgerMenu.addEventListener("click", function(){
    collapse.classList.toggle("collapse");
});


// Button edit premiere card red

let firstButtonEdit = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[0];
firstButtonEdit.addEventListener("click", function(){
    firstButtonEdit.style.color = "red";
});


// Button edit second card vert
let SecondButtonEdit = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[1];
SecondButtonEdit.addEventListener("click", function(){
    
    if (SecondButtonEdit.style.color === 'green'){
        SecondButtonEdit.style.color = '' ;
    } else {
        SecondButtonEdit.style.color = "green";
    }
});

// Désactiver bootstrap
let navbar = document.querySelector("header");
let link = document.querySelector("link");

navbar.addEventListener('dblclick', function (e) {
    if (link.disabled){
        link.removeAttribute('disabled');
    } else {
        link.setAttribute('disabled', false);
    }
});
