import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import styles from './Contact.module.css';

export const Contact = () => {
    // Placeholder for form state
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => setIsSubmitting(false), 1500);
    };

    return (
        <section className={styles.contactSection}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.infoContent}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>Let's Build the Future</h2>
                    <p className={styles.subtitle}>
                        Ready to elevate your digital presence? Reach out to our team of experts and let's discuss your next breakthrough project.
                    </p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <div className={styles.iconWrapper}><Mail size={24} /></div>
                            <div>
                                <h4 className={styles.detailLabel}>Email Us</h4>
                                <a href="mailto:hello@craftorystudio.com" className={styles.detailText}>hello@craftorystudio.com</a>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <div className={styles.iconWrapper}><Phone size={24} /></div>
                            <div>
                                <h4 className={styles.detailLabel}>Call Us</h4>
                                <a href="tel:+15551234567" className={styles.detailText}>+1 (555) 123-4567</a>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <div className={styles.iconWrapper}><MapPin size={24} /></div>
                            <div>
                                <h4 className={styles.detailLabel}>Visit Us</h4>
                                <span className={styles.detailText}>100 Innovation Drive<br />Tech District, CA 94103</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formContent}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" required className={styles.input} placeholder="John Doe" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input type="email" id="email" required className={styles.input} placeholder="john@example.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service" className={styles.label}>Service of Interest</label>
                            <select id="service" className={styles.input}>
                                <option value="web">Website Design & Dev</option>
                                <option value="mobile">Mobile Application</option>
                                <option value="ai">AI / Automation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Project Details</label>
                            <textarea id="message" rows={5} required className={styles.textarea} placeholder="Tell us about your project goals..."></textarea>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
