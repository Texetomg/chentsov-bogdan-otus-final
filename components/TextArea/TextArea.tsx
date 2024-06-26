import React, { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import cn from 'classnames';
import styles from './TextArea.module.css';

export const TextArea = forwardRef(({ className, error, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => (
 <div className={cn(styles.textareaWrapper, className)}>
    <textarea
      className={cn(styles.textarea, {
        [styles.error]: error
      })}
      ref={ref}
      {...props}
    />
    {error && (
      <span
        role='alert'
        className={styles.errorMessage}
      >
        {error.message}
      </span>
    )}
  </div>
));