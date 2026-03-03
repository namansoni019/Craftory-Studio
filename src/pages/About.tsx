import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import clsx from 'clsx';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.backgroundBlobs} />

            <div className={clsx("container", styles.container)}>
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>
                        Crafting Digital <br />
                        <span className={styles.highlight}>Excellence</span>.
                    </h2>
                    <p className={styles.description}>
                        We are a collective of designers, engineers, and strategists driven by a singular purpose: to build digital products that not only function flawlessly but leave a lasting impression.
                    </p>
                    <p className={styles.description}>
                        At Craftory, we believe in the power of immersive experiences. We blend cutting-edge technology with cinematic aesthetics to elevate brands and create the digital future.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Projects Delivered</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>99%</span>
                            <span className={styles.statLabel}>Client Satisfaction</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>12+</span>
                            <span className={styles.statLabel}>Industry Awards</span>
                        </div>
                    </div>

                    <Button variant="primary" size="lg" className={styles.ctaButton}>
                        Learn More About Us
                    </Button>
                </motion.div>

                <motion.div
                    className={styles.imageContent}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.imageWrapper}>
                        {/* High-end abstract tech office/studio visual */}
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
                            alt="Craftory Studio Workspace"
                            className={styles.image}
                            loading="lazy"
                        />
                        <div className={styles.imageGlow} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
