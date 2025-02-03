
import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";  
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Header() {                                                                                                                    
    return (
        <div>                                                                                         
            {/* Header Container */}
            <div className="h-[50px] w-full bg-[#7E33E0] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 space-x-4">
                {/* Left Section: Envelope and Phone */}
                <div className="flex items-center space-x-4">
                    {/* Envelope Icon and Email */}
                    <div className="flex items-center space-x-2">
                        <RxEnvelopeClosed className="w-4 h-4 text-white" />
                        <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
                            asmamunir2023@gmail.com
                        </span>
                    </div>

                    {/* Phone Icon and Number */}
                    <div className="flex items-center space-x-2">
                        <PiPhoneCallBold className="w-4 h-4 text-white" />
                          <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
                            (12345)67890
                        </span>
                    </div>
                </div>

                {/* Right Section: Language, Currency, Login, Wishlist, and Cart */}
                <div className="flex items-center space-x-4">
                    {/* English Dropdown */}
                    <div className="hidden sm:flex items-center space-x-1">
                        <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
                            English
                        </span>
                        <RiArrowDropDownLine className="w-4 h-4 text-white" />

                    </div>

                    {/* USD Dropdown */}
                    <div className="hidden sm:flex items-center space-x-1">
                        <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
                            USD
                        </span>
                        <RiArrowDropDownLine className="w-4 h-4 text-white" />
                    </div>

                    {/* Login Section */}
                    <div className="flex items-center space-x-1">
                        <Link  className="hidden sm:inline text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base"href="/login">
                            Login
                        </Link>
                        <FiUser className="w-4 h-4 text-white" />
                    </div>

                    {/* Wishlist Section */}
                    <div className="flex items-center space-x-1">
                        <span className="hidden sm:inline text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
                            Wishlist
                        </span>
                        <CiHeart className="w-4 h-4 text-white" />
                    </div>

                    {/* Cart Icon */}
                    <FiShoppingCart className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Navbar Container */}
            <div className="w-full h-[60px] bg-white flex items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
                {/* Hekto Logo */}
                <div className="text-[#0D0E43] font-[Josefin Sans] font-bold text-lg md:text-xl lg:text-2xl">
                    Hekto
                </div>

                {/* Navbar Links */}
                <div className="hidden sm:flex items-center space-x-4 ml-8">
                    <Link className="text-[#FB2E86] font-[Lato] text-sm md:text-base hover:text-[#e0336a] cursor-pointer"href="/Home">
                        Home
                    </Link>
                    <Link className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer" href="/about">
                        About
                    </Link>
                
                    <Link className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer" href="/shoplist">
                        Shop
                    </Link>
                    <Link className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer" href="/Faq">
                        Faq
                    </Link>
                    <Link className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer" href="/cart">
                        Cart
                    </Link>
                </div>
<div  ></div>

                {/* Search Bar */}
                <div className="flex items-center ml-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        className="hidden md:inline-block w-[200px] lg:w-[300px] h-[40px] border border-[#aea6a6] px-4 text-sm md:text-base rounded-l"
                    />
                    <div className="w-[40px] h-[40px] bg-[#FB2E86] flex items-center justify-center rounded-r">
                        <CiSearch className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </div>

    );
}