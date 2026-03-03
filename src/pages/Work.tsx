import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Work.module.css';

// Placeholder realistic project data
const projects = [
    {
        id: 1,
        title: 'Aura Fintech',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Dashboard visual
        color: '#3b82f6'
    },
    {
        id: 2,
        title: 'Lumina Smart Home',
        category: 'Native Mobile App',
        image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800', // Tech/Mobile visual
        color: '#10b981'
    },
    {
        id: 3,
        title: 'Nexus Data AI',
        category: 'AI Pipeline & Dashboard',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', // Abstract data visual
        color: '#8b5cf6'
    },
    {
        id: 4,
        title: 'Vanguard E-Commerce',
        category: 'Full-Stack Platform',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', // E-commerce backend visual
        color: '#f59e0b'
    }
];

export const Work = () => {
    return (
        <section className={styles.workSection}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>Selected Work</h2>
                    <p className={styles.subtitle}>
                        A showcase of digital experiences we've engineered for industry leaders.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                        >
                            <div className={styles.imageWrapper}>
                                <div
                                    className={styles.imageOverlay}
                                    style={{ background: `linear-gradient(to top, rgba(9, 9, 11, 0.9), transparent), ${project.color}20` }}
                                />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                    loading="lazy"
                                />
                                <div className={styles.projectDetails}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                </div>

                                <div className={styles.hoverLink}>
                                    <ExternalLink size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
