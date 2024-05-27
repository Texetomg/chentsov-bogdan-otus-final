import React from 'react';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './P.module.css';

export const Sidebar = ({  ...props }: SidebarProps): JSX.Element => (
  <div {...props}>
    Sidebar
  </div>
);