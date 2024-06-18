import React, { useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './Star.svg';

export const Rating = forwardRef(({ isEditable = false, rating, setRating, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

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
    
  const handleSpace = (i: number, e:KeyboardEvent<SVGElement> ) => {
    if (e.code !== 'Space' || !setRating){
      return;
    }

    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
      >
        <StarIcon 
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i, e)}
        />
      </span>
    ));
    setRatingArray(updatedArray);
  };

  return (
    <div 
      ref={ref}
      {...props}
    >
      {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
    </div>
  );
});