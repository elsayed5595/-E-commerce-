const sliderWrapper = document.querySelector('.sliderWrapper');
const navBottom = document.querySelectorAll('.navBottom h3');
const productimg = document.querySelector('.productimg');



const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];


let choosproduct = products[0];
const currentImg = document.querySelector('.productimg');
const titleProduct = document.querySelector('.productTitle');
const productprice = document.querySelector('.productprice');
const color = document.querySelectorAll('.color');
const size = document.querySelectorAll('.size');

navBottom.forEach((item, index) => {
    item.addEventListener('click', () => {
        //chang the current slide 
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

        //chand the choosen product 
        choosproduct = products[index]

        //chand the text product 
        titleProduct.textContent = choosproduct.title;
        productprice.textContent = "$" + choosproduct.price;
        currentImg.src = `../${choosproduct.colors[0].img}`
        //assign new color
        color.forEach((color, index) => {
            color.style.backgroundColor = choosproduct.colors[index].code
        })

    });

}); 
