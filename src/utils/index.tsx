import { FaLaptop } from "react-icons/fa";

// TYPES and INTERFACES
type Product = {
    _id: number;
    name: string;
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

export const category = [
    {
        name: 'Laptops',
        icon: <FaLaptop />
    }
]
