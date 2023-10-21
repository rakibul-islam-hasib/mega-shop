import { BsHeadphones, BsMouse, BsPhone } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";

// TYPES and INTERFACES
type Product = {
    _id: number;
    name: string;
};

type Category = {
    name: string;
    icon: JSX.Element;
    items: [];
};

// DATA and EXPORTS

export const topProducts: Product[] = [
    {
        _id: 1,
        name: 'Iphone 12 Pro Max',
    },
    {
        _id: 2,
        name: 'GT 1080TI',
    },
    {
        _id: 3,
        name: 'Macbook Pro',
    },
    {
        _id: 4,
        name: 'Xbox Series X'
    },
    {
        _id: 5,
        name: 'Laptop Dell'
    },
    {
        _id: 6,
        name: 'Galaxy S21 Ultra'
    },
    {
        _id: 7,
        name: 'Acer Nitro 5'
    }

];

export const category: Category[] = [
    {
        name: 'Laptops & Computers',
        icon: <FaLaptop />,
        items: []
    },
    {
        name: 'Phones & Tablets',
        icon: <BsPhone />,
        items: []
    },
    {
        name: 'Headphones & Speakers',
        icon: <BsHeadphones />,
        items: []
    },
    {
        name: 'Game & Consoles',
        icon: <IoGameControllerOutline />,
        items: []
    },
    {
        name: 'TV & Home Theater',
        icon: <FiMonitor />,
        items: []
    },
    {
        name: 'Accessories',
        icon: <BsMouse />,
        items: []
    }
]
