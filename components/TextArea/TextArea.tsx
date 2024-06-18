import React, { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import cn from 'classnames';
import styles from './TextArea.module.css';

export const TextArea = forwardRef(({ className, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => (
  <textarea
    className={cn(className, styles.input)}
    ref={ref}
    {...props}
  />
));