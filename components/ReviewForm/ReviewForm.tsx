import React, { useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '@/helpers/api';
import axios from 'axios';

export const ReviewForm = ({ productId,  className, ...props}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState, reset } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async(formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Что-то пошло не так');
      }
    } catch (e) {
      setError(e.message);
    }    
  };

  return (
    <form onSubmit={handleSubmit((onSubmit))}>
      <div 
        className={cn(styles.reviewForm, className)}
        {...props}
      >
        <Input 
          placeholder='Имя'
          {...register('name', { required: { value: true, message: 'Заполните имя'}})}
          error={formState.errors.name}
        />
        <Input 
          placeholder='Заголовок отзыва'
          className={styles.title}
          {...register('title', { required: { value: true, message: 'Заполните заголовок'}})}
          error={formState.errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller 
            control={control}
            name='rating'
            rules={{required: { value: true, message: 'Укажите рейтинг'}}}
            render={({ field }) => (
              <Rating
                error={formState.errors.rating}
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
              />
            )}
          />
        </div>
        <TextArea 
          placeholder='Текст отзыва'
          className={styles.description}
          {...register('description', { required: { value: true, message: 'Заполните отзыв'}})}
          error={formState.errors.description}
        />
        <div className={styles.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.panel, styles.success)}>
          <div className={styles.successTitle}>Ваш отзыва отправлен</div>
          <div className={styles.description}>
            Спасибо, ваш отзыв будет опубликован
          </div>
          <CloseIcon 
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={cn(styles.panel, styles.error)}>
          {error}
          <CloseIcon
            className={styles.close} 
            onClick={() => setError(undefined)}
          />
        </div>
      )}
    </form>
  );
};

 