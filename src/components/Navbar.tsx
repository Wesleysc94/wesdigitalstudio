import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const navLinks = [
    { label: 'Projetos', href: '#case-study' },
    { label: 'Sobre', href: '#about' },
    { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
                    scrolled
                        ? 'bg-white/70 dark:bg-zinc-900/70 aura:bg-[#09090B]/70 ruby:bg-[#050505]/70 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 aura:border-white/10 ruby:border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]'
                        : 'bg-transparent border border-transparent'
                }`}
            >
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`font-serif italic text-xl px-4 py-1 transition-colors duration-300 ${
                        scrolled
                            ? 'text-slate-900 dark:text-white aura:text-white ruby:text-white'
                            : 'text-slate-800 dark:text-white aura:text-white ruby:text-white'
                    }`}
                >
                    W
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`px-4 py-2 rounded-full font-sans text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                                scrolled
                                    ? 'text-slate-600 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 aura:hover:text-amber-400 ruby:hover:text-rose-400 hover:bg-slate-100/60 dark:hover:bg-zinc-800/60 aura:hover:bg-zinc-800/60 ruby:hover:bg-zinc-800/60'
                                    : 'text-slate-600 dark:text-zinc-300 aura:text-zinc-300 ruby:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 aura:hover:text-amber-400 ruby:hover:text-rose-400'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block ml-2">
                    <Button
                        onClick={onOpenModal}
                        variant="primary"
                        className="!px-5 !py-2.5 !text-[11px] !shadow-md"
                    >
                        Orçamento
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={`md:hidden p-2.5 rounded-full transition-colors duration-300 ${
                        scrolled
                            ? 'text-slate-700 dark:text-zinc-200 aura:text-zinc-200 ruby:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 aura:hover:bg-zinc-800 ruby:hover:bg-zinc-800'
                            : 'text-slate-700 dark:text-zinc-200 aura:text-zinc-200 ruby:text-zinc-200'
                    }`}
                    aria-label="Menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 left-4 right-4 z-[55] md:hidden bg-white/90 dark:bg-zinc-900/90 aura:bg-[#09090B]/90 ruby:bg-[#050505]/90 backdrop-blur-2xl rounded-[1.5rem] border border-slate-200/50 dark:border-white/10 aura:border-white/10 ruby:border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] p-6 flex flex-col gap-2"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-3 rounded-xl font-sans text-base font-medium text-slate-700 dark:text-zinc-200 aura:text-zinc-200 ruby:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 aura:hover:bg-zinc-800 ruby:hover:bg-zinc-800 hover:text-cyan-600 dark:hover:text-cyan-400 aura:hover:text-amber-400 ruby:hover:text-rose-400 transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2">
                            <Button
                                onClick={() => {
                                    setMobileOpen(false);
                                    onOpenModal?.();
                                }}
                                variant="primary"
                                className="w-full"
                            >
                                Solicitar Orçamento
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
