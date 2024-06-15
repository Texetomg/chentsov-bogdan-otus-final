import React from 'react';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './Check.svg';
import styles from './Advantages.module.css';


export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => (
  <>
    {advantages.map(a => (
      <div key={a._id} className={styles.advantage}>
        <CheckIcon/>
        <div className={styles.title}>{a.title}</div>
        <hr className={styles.vline}/>
        <div className={styles.description}>{a.description}</div>
      </div>
    ))}
  </>
);