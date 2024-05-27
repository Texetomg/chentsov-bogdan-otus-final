import React from 'react';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './P.module.css';

export const Header = ({  ...props }: HeaderProps): JSX.Element => (
  <div {...props}>
    Header
  </div>
);