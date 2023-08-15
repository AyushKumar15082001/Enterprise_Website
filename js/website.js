function menuToggle() {
    var x = document.getElementById("idofToggleMenu");
    var bars = document.getElementsByClassName("bar");
    if (x.className === "toggleMenu") {
        x.className += " active";
        bars[0].style.animation = "barAnimation 500ms ease-in-out both";
        bars[1].style.backgroundColor = "white";
        bars[2].style.animation = "barAnimation2 500ms ease-in-out both";
        x.style.animation = "hamAnimation 500ms ease-in-out";
        // disabling touch after menu  comes out
        document.body.className = " menuout";
        x.style.pointerEvents = "all";
    }
    else {
        x.className = "toggleMenu";
        x.style.animation = "hamAnimation2 500ms ease-in-out";
        bars[0].style.animation = "barAnimation3 500ms ease-in-out both";
        bars[1].style.backgroundColor = "black";
        bars[2].style.animation = "barAnimation4 500ms ease-in-out both";
        document.body.className = "";

    }
    var y = document.getElementById("idofNavigation");
    if (y.className === "navigation") {
        y.className += " active";
    } 
    else {
        y.className = "navigation";
    }
}
//for closing of nav menu when clicked outside
document.addEventListener("click", (e) => {
    const y = document.getElementById("idofNavigation");
    const x = document.getElementById("idofToggleMenu");
    let targetEl = e.target; // clicked element      
    do {
        if (targetEl == y || targetEl == x) {
            // This is a click inside, does nothing, just return.
            return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.
    if (y.className == "navigation active") {
        menuToggle();
    }
});


//for sub-menu
const sublist = document.querySelectorAll('.sublist');
var activeSubMenu = document.querySelector('#activeSubMenu');
function activeLink() {
    sublist.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
sublist.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

function defaultlink() {
    sublist.forEach((item) =>
        item.classList.remove('active'));
    if (activeSubMenu != null) {
        activeSubMenu.classList.add('active');
    }

}
sublist.forEach((item) =>
    item.addEventListener('mouseout', defaultlink));

//for sub-menu2
const sublist2 = document.querySelectorAll('.subsublist');
var activeSubMenu = document.querySelector('#activeSubMenu');
function activeLink2() {
    sublist2.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
sublist2.forEach((item) =>
    item.addEventListener('mouseover', activeLink2));

function defaultlink2() {
    sublist2.forEach((item) =>
        item.classList.remove('active'));
    if (activeSubMenu != null) {
        activeSubMenu.classList.add('active');
    }

}
sublist2.forEach((item) =>
    item.addEventListener('mouseout', defaultlink2));


// //for underlining of links
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.navlinks');
var active = document.querySelector('#active');
var submenu = document.getElementById('sub-menu1');

window.addEventListener('load', (e) => {
    marker.style.left = active.offsetLeft + "px";
    marker.style.width = active.offsetWidth + "px";
})
submenu.addEventListener('mouseover', (e) => {
    marker.style.left = item[2].offsetLeft + "px";
    marker.style.width = item[2].offsetWidth + "px";
})
submenu.addEventListener('mouseout', (e) => {
    marker.style.left = active.offsetLeft + "px";
    marker.style.width = active.offsetWidth + "px";
})

function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('mouseover', (e) => {
        indicator(e.target);
    })
    item[i].addEventListener('mouseout', (e) => {
        marker.style.left = active.offsetLeft + "px";
        marker.style.width = active.offsetWidth + "px";
    })
};
//for changing navigation bar while scrolling
window.addEventListener("scroll", function () {
    nav = document.querySelector("nav");
    goTop = document.getElementById("gotoTop");
    nav.classList.toggle("sticky", window.scrollY > 300);
    goTop.classList.toggle("visible", window.scrollY > 400);
})
// ------to scroll to the top of document,when the user clicks button------
function topfunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// for button hovering
const btn = document.querySelector('.btn');
if(btn != null){
    btn.onmousemove = function(e){
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;
    
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    }
}
//loader animations
var loader = document.getElementById("preloader");
        window.addEventListener("load", function(){
            loader.style.display = "none";
            // document.body.style.overflowY = "scroll";
        })


//scroll reveal animations
const  sr = ScrollReveal({
    distance: '60px', 
    duration: 2800,
    // reset:true,
    viewOffset: { top:0, right: 0, bottom: -700, left: 0 },
})
sr.reveal('.company-name, .typing, .card, .first_review, .contactTitle, .galleryTitle, .productTitle, .aboutTitle, .Sub_productTitle, .product_Desc',{
    origin: 'top',
    interval:100,    
})
sr.reveal('.about, .for, .table1', {
    origin:'left',
    interval:100,
    viewOffset: { top:0, right: 0, bottom: -500, left: 0 },
})
if (document.title != "Gallery | Narayani Enterprises") sr.reveal('.contactContainer, .quicklinks, .products, .businesshours', {
    origin:'bottom',
    interval:100,
})
sr.reveal('.swiper, .cont, .table2', {
    origin:'right',
    interval:100,
})


//   ---for map cookies----
document.cookie = "SIDCC =AJi4QfGjLqfdnv7HeBQ6AX3v3YGkViBNBo9KgwFkOlBdBvHC1fy7fzaPMPEP7qxNZv3Nm0kDbA ;SameSite=Strict"
// Set-Cookie= SIDCC =AJi4QfGjLqfdnv7HeBQ6AX3v3YGkViBNBo9KgwFkOlBdBvHC1fy7fzaPMPEP7qxNZv3Nm0kDbA ;SameSite=Strict
// document.cookie = "SIDCC; Max-Age=2600000; Strict"
document.cookie = "SIDCC ==AJi4QfGjLqfdnv7HeBQ6AX3v3YGkViBNBo9KgwFkOlBdBvHC1fy7fzaPMPEP7qxNZv3Nm0kDbA ; Max-Age=2600000; SameSite=Strict"
// "SIDCC; Max-Age=2600000; Strict"
