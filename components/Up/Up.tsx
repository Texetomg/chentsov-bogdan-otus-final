import React, { useEffect } from 'react';
import styles from './Up.module.css';
import { useScrollY } from '@/hooks/useScrollY';
import { useAnimation, motion  } from 'framer-motion';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

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
    <motion.div 
      animate={controls}
      className={styles.up}
      initial={{opacity: 0}}
    >
      <ButtonIcon 
        onClick={scrollToTop}
        appearance='primary'
        icon='up'
        aria-label='Наверх'
      />
    </motion.div>
  );
};
