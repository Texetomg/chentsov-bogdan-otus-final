import React from 'react';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './P.module.css';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({  ...props }: SidebarProps): JSX.Element => (
  <div {...props}>
    <Menu />
  </div>
);