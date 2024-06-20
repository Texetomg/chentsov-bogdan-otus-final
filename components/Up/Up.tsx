import React, { useEffect } from 'react';
import styles from './Up.module.css';
import UpIcon from './Up.svg';
import { useScrollY } from '@/hooks/useScrollY';
import { useAnimation, motion  } from 'framer-motion';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button 
      animate={controls}
      className={styles.up}
      onClick={scrollToTop}
      initial={{opacity: 0}}
    >
      <UpIcon/>
    </motion.button>
  );
};
