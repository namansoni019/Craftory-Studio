import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { servicesData } from '../data/servicesData';
import styles from './ServiceDetail.module.css';

const processSteps = [
    { num: '01', title: 'Discover' },
    { num: '02', title: 'Design' },
    { num: '03', title: 'Build' },
    { num: '04', title: 'Launch' }
];

export const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/" replace />;
    }

    const { detailContent } = service;

    return (
        <div className={styles.detailPage}>
            <div className={styles.container}>

                {/* SECTION 1 - SERVICE HERO */}
                <motion.section
                    className={styles.heroSection}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.label}>SERVICE</span>
                    <h1 className={styles.title}>{service.title}</h1>
                    <p className={styles.heroSub}>{detailContent.heroSub}</p>
                </motion.section>

                {/* SECTION 2 - WHAT WE DELIVER */}
                <motion.section
                    className={styles.deliverSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionHeader}>What We Deliver</h2>
                    <p className={styles.deliverText}>{detailContent.deliverablesText}</p>
                </motion.section>

                {/* SECTION 3 - CAPABILITIES */}
                <motion.section
                    className={styles.capabilitiesSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionHeader}>Core Capabilities</h2>
                    <div className={styles.capGrid}>
                        {detailContent.capabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.capItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className={styles.capIconWrapper}>
                                    <CheckCircle2 size={24} strokeWidth={1.5} />
                                </div>
                                <span className={styles.capText}>{cap}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* SECTION 4 - PROCESS */}
                <motion.section
                    className={styles.processSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionHeader}>Our Process</h2>
                    <div className={styles.processSteps}>
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.processStep}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                <div className={styles.stepNumber}>{step.num}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* SECTION 5 - TECHNOLOGY STACK */}
                <motion.section
                    className={styles.techSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.sectionHeader}>Technology Stack</h2>
                    <div className={styles.techList}>
                        {detailContent.technologies.map(tech => (
                            <div key={tech} className={styles.techItem}>{tech}</div>
                        ))}
                    </div>
                </motion.section>

                {/* SECTION 6 - FINAL CTA */}
                <motion.section
                    className={styles.ctaSection}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.ctaTitle}>Let's Build Something Exceptional</h2>
                    <div className={styles.ctaButtonWrapper}>
                        <Link to="/#contact" style={{ textDecoration: 'none' }}>
                            <Button size="lg" variant="primary">
                                Start a Project <ArrowRight size={20} style={{ marginLeft: 8 }} />
                            </Button>
                        </Link>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};
