import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.topSection}>
                    <div className={styles.brandInfo}>
                        <Link to="/" className={styles.logo}>
                            CRAFTORY
                        </Link>
                        <p className={styles.description}>
                            Elevating digital experiences through cinematic design and advanced technology.
                        </p>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Company</h4>
                            <Link to="/about" className={styles.link}>About</Link>
                            <Link to="/services" className={styles.link}>Services</Link>
                            <Link to="/work" className={styles.link}>Work</Link>
                            <Link to="/contact" className={styles.link}>Contact</Link>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Legal</h4>
                            <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
                            <Link to="/terms" className={styles.link}>Terms of Service</Link>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Socials</h4>
                            <div className={styles.socialLinks}>
                                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                                <a href="#" aria-label="GitHub"><Github size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {currentYear} Craftory Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
