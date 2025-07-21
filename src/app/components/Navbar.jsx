import Link from "next/link";
import NavLink from "./NavLink";
import React, { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLink = [
    { title: "About", path: "#About" },
    { title: "Projects", path: "#Projects" },
    { title: "Contact", path: "#Contact" }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4">

                {/* Logo */}
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    Logo
                </Link>

                {/* Desktop Menu (Always Visible on Large Screens) */}
                <div className="hidden md:flex md:space-x-8">
                    {navLink.map((link, index) => (
                        <NavLink key={index} href={link.path} title={link.title} />
                    ))}
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="mobile-menu block md:hidden">
                    {
                        navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white"
                            >
                                <Bars2Icon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
 
                {navbarOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 top-[64px] bg-[#121212] opacity-95 z-20"
                    >
                        <MenuOverlay links={navLink} />
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
