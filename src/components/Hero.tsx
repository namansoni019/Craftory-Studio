import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import styles from './Hero.module.css';
import { Button } from './ui/Button';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Scroll parallax for when scrolling down the page
    const { scrollYProgress } = useScroll();

    const yOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const yText = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
    const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const blurVideo = useTransform(scrollYProgress, [0, 1], [0, 12]);

    // Mouse movement 3D effect parameters
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    // Rotate container based on mouse position
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Parallax values for individual elements to give depth
    const buttonZ = useSpring(useTransform(mouseY, [-0.5, 0.5], [40, 100]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Ensure video plays on load, specially for touch devices
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.error("Video autoplay failed:", e));
        }
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className={styles.heroContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            layout="position"
        >
            <motion.div
                className={styles.videoWrapper}
                style={{ scale: scaleVideo, filter: `blur(${blurVideo}px)` }}
            >
                <div className={styles.overlay} />

                {/* Fallback glow/pulse before anything loads */}
                {!isVideoLoaded && (
                    <motion.div
                        className={styles.loadingSkeleton}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                )}

                <motion.video
                    ref={videoRef}
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
                    onLoadedData={() => setIsVideoLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVideoLoaded ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <source src="/hero_video.mp4" type="video/mp4" />
                </motion.video>
            </motion.div>

            <motion.div
                className={styles.contentOverlay}
                style={{
                    opacity: yOpacity,
                    y: yText,
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
            >
                <div className="container" style={{ transformStyle: "preserve-3d" }}>
                    <div className={styles.textContent} style={{ transformStyle: "preserve-3d" }}>
                        {/* Craftory title & Subtext removed as requested. CTA pushed down. */}

                        <motion.div
                            style={{ translateZ: buttonZ }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                            className={styles.ctaWrapper}
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.1, translateZ: 30 }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <Button size="lg" variant="secondary" className={styles.ctaButton}>
                                    Start a Project
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
