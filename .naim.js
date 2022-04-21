let img_slider = document.getElementsByClassName('img_slider');

let etape =0;

let nbr_img = img_slider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');
function enleveractiveimage() {
    for (let i = 0; i < nbr_img; i++){
        img_slider[i].classList.remove('active');
         }     
    }
    
suivant.addEventListener('click', function(){
etape++;
if (etape>= nbr_img) {
    etape=0;
}
enleveractiveimage();
img_slider[etape].classList.add('active');
}) 

precedent.addEventListener('click', function(){
    etape--;
    if(etape <0){
        etape= nbr_img -1;
    }
    img_slider[etape].classList.add('active');
})

setInterval( function() {
    etape++;
if (etape>= nbr_img) {
    etape=0;
}
enleveractiveimage();
img_slider[etape].classList.add('active');
    
}, 3000);



const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
       
       const currentlyActiveaccordionItemHeader = document.querySelector(".accordion-Item-header-action.active");
        if(currentlyActiveaccordionItemHeader && currentlyActiveaccordionItemHeader!==accordionItemHeader) {
            currentlyActiveaccordionItemHeader.classList.toggle("active");
            currentlyActiveaccordionItemHeader.nextElementSibling.style.maxHeigh = 0;  
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItembody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")){
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";  
        }
        else {
             accordionItemBody.style.maxHeight = 0;
            
        }

    });
});

let myform = document.getElementById('myforme')
myform.addEventListener('submit', function (e) {
    let myinput = document.getElementById('usernam')


    if (myinput.value.trim() == "") {
        let myerro = document.getElementById('erro');
        myerro.innerHTML = "le champs usermane est requis.";
        myerro.style.color = "red"
        e.preventDefault();

    }
})
myform.addEventListener('submit', function (e) {
    let myinput = document.getElementById('usernamee')


    if (myinput.value.trim() == "") {
        let myerrore = document.getElementById('errore');
        myerrore.innerHTML = "le champs usermane est requis.";
        myerrore.style.color = "red"
        e.preventDefault();

    }
})