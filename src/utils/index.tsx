import { BsHeadphones, BsMouse, BsPhone, BsRouter } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { IoBicycle, IoGameControllerOutline, IoWatchOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineCar, AiOutlinePrinter } from "react-icons/ai";
import { RiRobot2Line } from "react-icons/ri";
import { TbDrone } from "react-icons/tb";

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
    },
    {
        name: 'Networking',
        icon: <BsRouter />,
        items: []
    },
    {
        name: 'Office solutions',
        icon: <AiOutlinePrinter />,
        items: []
    },
    {
        name: 'Home & Outdoor',
        icon: <RiRobot2Line />,
        items: []
    },
    {
        name: 'Sport & Health',
        icon: <IoBicycle />,
        items: []
    },
    {
        name: 'Smart Watches',
        icon: <IoWatchOutline />,
        items: []
    },
    {
        name: 'Toy & Games',
        icon: <TbDrone />,
        items: []
    },
    {
        name: 'Automotive & Industrial',
        icon: <AiOutlineCar />,
        items: []
    }
]
