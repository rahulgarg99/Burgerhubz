// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import burger1 from '../assets/burger1.png'
import sandwich2 from '../assets/sandwich2.png'
import noodle1 from '../assets/noodle1.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'veg Burger',
    'Chicken Burger',
    'Aloo Burger',
    'Cheese Burger',
    'Paneer Burger',
    'Maxican Burger'
];

const trendingDrinks = [
    "jal-Jeera",
    "Aam Panna",
    "Mango Lassi",
    "Thandai",
    "Lemonade",
    "Chaas",
]

const cards = [
    {
        imgSrc: burger1,
        alt: "burger",
        title: "Burger",
        rating: "4.9",
        price: "₹321.00"
    },
    {
        imgSrc: sandwich2,
        alt: "sandwich",
        title: "Sandwich",
        rating: "5.0",
        price: "₹280.00",
        active: true
    },
    {
        imgSrc: noodle1,
        alt: "noodles",
        title: "Noodles",
        rating: "4.7",
        price: "₹240.00"
    }
];