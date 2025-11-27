import rice from '../assets/images/rice.jpg';
import beans from '../assets/images/beans.jpg';
import potatoes from '../assets/images/potatoes.jpg';
import tomatoes from '../assets/images/tomatoes.jpg';   
const products = [
    {
        id:1, 
        img: rice, 
        name:"Premium Rice", 
        size: "50KG Bag", 
        price: 50000, 
        status: "Fresh",

        description: [
            "High-quality long-grain rice sourced from trusted local farms. ",
             "Perfect for households, restaurants, and bulk buyers. ",
             "Processed and polished to ensure clean, stone-free grains."
        ],
    
    details: [
        {label: "Variety", value: "Long Grain"},
        {label: "Moisture Content", value: "12%"},
        {label: "Shelf Life", value: "24 months"},
        {label: "Storage", value: "Store in a cool, dry place"},
        {label: "Origin", value: "Benue State"},
    ],

    benefits: [
        "Rich in carbohydrates for energy",
        "Long shelf life when stored properly",
        "Versatile for various culinary uses",
        "Suitable for bulk storage",
    ],
},
    {
        id:2, 
        img: beans, 
        name:"Brown Beans (Oloyin)", 
        size: "25KG Bag", 
        price: 35800, 
        status: "Fresh",

        description: [
            "Sweet-tasting Oloyin brown beans known for their natural honey-like flavor. ",
             "Thoroughly cleaned and sorted to remove stones and impurities. ",
             "Ideal for preparing akara, moi-moi, and other local dishes."
        ],

        details: [
        {label: "Variety", value: "Oloyin Sweet Beans"},
        {label: "Moisture Content", value: "10%"},
        {label: "Shelf Life", value: "8 - 10 months"},
        {label: "Storage", value: "Keep in airtight container to prevent weevils"},
        {label: "Origin", value: "Oyo State"},
        ],

    benefits: [
        "High in protein for muscle growth",
        "Rich in fiber for digestion",
        "Sweet natural taste",
        "Great for moi-moi, akara, and porridge",
    ],
    },
    {
        id:3, 
        img: potatoes, 
        name:"Potatoes", 
        size: "50KG Bag", 
        price: 45000, 
        status: "Fresh",

        description: [
            "Freshly harvested potatoes with firm texture and natural sweetness. ",
            "Sourced directly from local farms to guarantee freshness. ",
            "Suitable for frying, boiling, roasting, and mashing."
    ],

        details:[
            {label: "Variety", value: "Irish Potatoes"},
            {label: "Moisture Content", value: "80%"},
            {label: "Shelf Life", value: "3-5 weeks"},
            {label: "Storage", value: "Store in a cool, ventilated area away fron sunlight"},
            {label: "Origin", value: "Kaduna State"},]
    ,

    benefits: [
        "Rich in vitamins B & C",
        "Good source of potassium",
        "Versatile for cooking (frying, baking, boiling)",
        "Popular in both homes and restaurants",
    ],
    },
    {
        id:4, 
        img: tomatoes, 
        name:"Tomatoes", 
        size: "30KG Basket", 
        price: 28500, 
        status: "Fresh",

        description: [
            "Fresh red tomatoes ideal for stews, soups, and sauces. ",
            "Hand-picked to ensure only healthy, ripe fruits are selected. ",
            "Juicy and full of natural flavor."
    ],

         details: [
            {label: "Variety", value: "Roma Tomatoes"},
            {label: "Moisture Content", value: "94%"},
            {label: "Shelf Life", value: "1-2 weeks"},
            {label: "Storage", value: "Keep in a cool place; avoid direct sunlight"},
            {label: "Origin", value: "Kano State"},
         ],

    benefits: [
        "Rich in antioxidants like lycopene",
        "Greate for sauces and stews",
        "Enhances meal flavor and color",
        "Essential kitchen staple for hoouseholds",
    ],
    }
  ];

  export default products;