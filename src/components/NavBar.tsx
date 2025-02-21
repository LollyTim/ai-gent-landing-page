import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "", label: "Pricing" },
        { href: "", label: "Integration" },
        { href: "", label: "Privacy" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 w-full  backdrop-blur-sm z-50">
            <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto max-w-6xl py-4 md:py-6">
                <div className="flex items-center justify-between relative">
                    {/* Logo */}
                    <h1 className="font-medium text-base sm:text-lg text-white">
                        AI-Gent
                    </h1>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {/* Mobile Navigation - Repositioned */}
                    <div
                        className={`lg:hidden absolute right-0 top-full mt-2 w-[60%] bg-zinc-900/95 backdrop-blur-sm rounded-xl border border-zinc-800 transition-all duration-300 ease-in-out ${isMenuOpen
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 -translate-y-2 invisible'
                            }`}
                    >
                        <div className="flex flex-col py-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/40 text-sm hover:text-white hover:bg-zinc-800/50 transition-colors duration-200 px-4 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;