import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import styles from './Services.module.css';

export const Services = () => {
    return (
        <div className={styles.servicesPage}>
            <div className={styles.backgroundGlow} />

            <div className={`container ${styles.contentContainer}`} style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionLabel}>OUR EXPERTISE</h2>
                    <p className={styles.subtitle}>
                        We craft digital experiences where aesthetics meet engineering — built for longevity, clarity, and measurable impact.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link to={`/services/${service.id}`} key={service.id} className={styles.cardLink}>
                                <motion.div
                                    className={styles.card}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className={styles.iconWrapper}>
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDescription}>{service.description}</p>

                                    <ul className={styles.tagList}>
                                        {service.tags.map(tag => (
                                            <li key={tag} className={styles.tag}>{tag}</li>
                                        ))}
                                    </ul>

                                    <div className={styles.cardGlow} />
                                </motion.div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

