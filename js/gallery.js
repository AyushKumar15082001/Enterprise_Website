// for using image -filter
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let datafilter = this.getAttribute('data-filter');
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if (itemBox[k].getAttribute('data-items') == datafilter || datafilter == "all") {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].style.opacity = 1;
            itemBox[k].style.transform = null;
        }
    });
}
// for pop up window
let img = document.querySelectorAll('#gallery img');
let popImg = document.querySelector('img.pop_up');
let popup_window = document.querySelector(".popup_window");
let popName = document.querySelector("span.pop_name");
let changeImg1 = document.querySelector(".changeImg.back");
let changeImg2 = document.querySelector(".changeImg.forward");
let hover_name = document.querySelectorAll('.hover_name');
for (let i = 0; i < img.length; i++) {
    // img[i].addEventListener('click', function () {
    if (hover_name.length != 0) {
        hover_name[i].addEventListener('click', function () {
            let imgSrc = img[i].getAttribute('src');
            let imgName = img[i].getAttribute('alt');
            popImg.setAttribute('src', imgSrc);
            popImg.style.display = "block";
            popName.innerHTML = imgName;
            popup_window.style.display = "flex";
            document.body.style.overflowY = "hidden";
        })
    }
    else{
        img[i].addEventListener('click', function () {
            let imgSrc = img[i].getAttribute('src');
            // let imgName = img[i].getAttribute('alt');
            popImg.setAttribute('src', imgSrc);
            popImg.style.display = "block";
            // popName.innerHTML = imgName;
            popup_window.style.display = "flex";
            document.body.style.overflowY = "hidden";
        })
    }

}
//for changing image when clicked next
function getImgNo() {
    for (let i = 0; i < img.length; i++) {
        if (img[i].getAttribute('src') == popImg.getAttribute('src')) {
            return i;
        }
    }
}
changeImg1.addEventListener('click', function () {
    let Img_no = getImgNo();
    if (Img_no == 0) {
        Img_no = img.length - 1;
    }
    else {
        Img_no--;
    }
    popImg.setAttribute('src', img[Img_no].getAttribute('src'));
    if(hover_name.length != 0){
        popName.innerHTML = img[Img_no].getAttribute('alt');
    }
});
changeImg2.addEventListener('click', function () {
    let Img_no = getImgNo();
    if (Img_no == img.length - 1) {
        Img_no = 0;
    }
    else {
        Img_no++;
    }
    popImg.setAttribute('src', img[Img_no].getAttribute('src'));
    if(hover_name.length != 0){
        popName.innerHTML = img[Img_no].getAttribute('alt');
    }
});

//for closing of pop up when clicked outside
function close_popup(e) {
    let targetEl = e.target; // clicked element      
    do {
        if (targetEl == popImg || targetEl == changeImg1 || targetEl == changeImg2) {
            // This is a click inside, does nothing, just return.
            return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.
    popImg.style.display = "none";
    popup_window.style.display = "none";
    document.body.style.overflowY = "scroll";
}
popImg.addEventListener("mouseout", (e) => {
    popup_window.style.cursor = "zoom-out";
})

//for dispalying img name when hovering
if(hover_name.length != 0){
    for (let i = 0; i < img.length; i++) {
        hover_name[i].innerHTML = img[i].getAttribute('alt');
    }
}
