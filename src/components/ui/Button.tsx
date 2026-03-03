import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={clsx(
                    styles.button,
                    styles[`variant-${variant}`],
                    styles[`size-${size}`],
                    className
                )}
                {...props}
            >
                <span className={styles.content}>{children}</span>
                <div className={styles.glow} />
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
