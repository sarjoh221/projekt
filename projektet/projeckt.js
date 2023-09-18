
const carouel = document.querySelector(".carouel");
const arrowIcons = document.querySelectorAll(".wrapper i");

function körcaroel() {
    let firstImgWidth;

    if (window.innerWidth >= 1280) {
        firstImgWidth = document.querySelector(".carouel img").clientWidth + 14;
    } else {
        firstImgWidth = document.querySelector(".carouel img").clientWidth + 30;
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            if (icon.id == "left") {
                carouel.scrollLeft -= firstImgWidth;
            } else {
                carouel.scrollLeft += firstImgWidth;
            }
        })
    })
};

// Kör funktionen när sidan laddas
window.addEventListener("load", körcaroel);

console.log('dhs', Vue);

const createAddToCart  = Vue.createApp({
    data() {
        return {
            cart: 0,
            produkter:[
                {id:1, name:'Första bild'}
            ]
        }
    },
    methods: {
        najs() {
            this.cart++
        }
    }
}); createAddToCart.mount('#createAddToCart');




    
