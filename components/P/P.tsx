import React from 'react';
import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({ size = 'm', children, className, ...props}: PProps): JSX.Element => (
  <p className={cn(styles.p, className, {
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.l]: size === 'l',
  })}
  {...props}>
    {children}
  </p>
);