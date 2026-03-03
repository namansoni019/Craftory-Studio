import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';

const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'Work', path: '#work' },
    { name: 'About', path: '#about' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const location = useLocation();

    const { scrollY } = useScroll();

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    // Transition background from transparent to solid almost immediately on scroll
    const background = useTransform(
        scrollY,
        [0, 50],
        ['rgba(9, 9, 11, 0)', 'rgba(9, 9, 11, 0.85)']
    );

    const backdropFilter = useTransform(
        scrollY,
        [0, 50],
        ['blur(0px)', 'blur(12px)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <motion.header
            className={clsx(styles.header, { [styles.scrolled]: isScrolled })}
            style={{ background, backdropFilter }}
        >
            <div className={clsx("container", styles.navContainer)}>
                <Link to="/" className={styles.logo}>
                    <img
                        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' width='200' height='60'><style>text{font-family:sans-serif;font-weight:900;font-size:24px;fill:white;text-transform:uppercase;letter-spacing:4px;}</style><text x='10' y='38'>CRAFTORY</text></svg>"
                        alt="Craftory Studio Logo"
                        className={styles.logoImage}
                    />
                </Link>

                {/* Right side group (Navigation + Actions) wrapped in a pill */}
                <div className={styles.rightGroup}>
                    {/* Desktop Navigation */}
                    <nav className={styles.desktopNav}>
                        <ul className={styles.navList}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.path}
                                        className={clsx(styles.navLink, {
                                            [styles.active]: location.hash === link.path || (location.hash === '' && link.path === '#home')
                                        })}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.headerActions}>
                        <button
                            onClick={toggleTheme}
                            className={styles.themeToggle}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a href="#contact" tabIndex={-1}>
                            <Button variant="outline" size="sm" className={styles.desktopCta}>
                                Contact Us
                            </Button>
                        </a>

                        <button
                            className={styles.mobileMenuButton}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <motion.div
                className={styles.mobileNav}
                initial={{ opacity: 0, y: "-100%" }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    y: isMobileMenuOpen ? 0 : "-100%"
                }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                <ul className={styles.mobileNavList}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.path}
                                className={clsx(styles.mobileNavLink, {
                                    [styles.active]: location.hash === link.path || (location.hash === '' && link.path === '#home')
                                })}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className={styles.mobileNavLink}>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </motion.div>
        </motion.header>
    );
};
