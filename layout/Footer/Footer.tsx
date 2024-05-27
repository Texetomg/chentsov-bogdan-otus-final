import React from 'react';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import format from 'date-fns/format';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => (
  <footer 
    className={cn(className, styles.footer)} 
    {...props}
  >
    <div>
      OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
    </div>
    <div>
      <a href='#' target='_blank'>Пользовательское соглашение</a>
    </div>
    <div>
      <a href='#' target='_blank'>Политика конфиденциальности</a>
    </div>
  </footer>
);