import React from 'react';
import { SortEnum, SortProps } from './Sort.props';
import cn from 'classnames';
import styles from './Sort.module.css';
import SortIcon from './Sort.svg';

export const Sort = ({ sort, setSort, className, ...props}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span  
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon className={styles.sortIcon}/> По&nbsp;рейтингу
      </span>
      <span  
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon className={styles.sortIcon}/> По&nbsp;цене
      </span>
    </div>
  );
};