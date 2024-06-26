import React, { useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef, useRef } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './Star.svg';

export const Rating = forwardRef(({ isEditable = false, rating, setRating, tabIndex, error, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);
  console.log(ratingArrayRef);
  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };
    
  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }

    if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i === 0) {
      return tabIndex ?? 0;
    }
    if (r === i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => (
      <span
        ref={r => ratingArrayRef.current?.push(r)}
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
        tabIndex={computeFocus(rating, i)}
        onKeyDown={handleKey}
        
      >
        <StarIcon />
      </span>
    ));
    setRatingArray(updatedArray);
  };

 

  return (
    <div 
      ref={ref}
      className={cn(styles.ratingWrapper, {
        [styles.error]: error,
      })}
      {...props}
    >
      {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
      {error && (
        <span className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
});