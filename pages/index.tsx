import { Button, Htag, P, Rating, Tag } from '@/components';
import { withLayout } from '@/layout/Layout';
import { useState } from 'react';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(5);
  return (
    <>
      <Htag tag='h1'>
        Текст
      </Htag> 
      <Button appearance='primary' arrow='right' onClick={() => console.log('click')}>
        Кнопка
      </Button>
       <Button appearance='ghost' arrow='down'>
        Кнопка
      </Button>
      <P size='l'>
        Большой
      </P>
      <P>
        Средний
      </P>
      <P size='s'>
        Маленький
      </P>
      <Rating rating={rating} setRating={setRating} isEditable/>
      <Tag size='s'>Маленький</Tag>
      <Tag size='m' color='red'>Маленький</Tag>
      <Tag size='s' color='green'>Маленький</Tag>
      <Tag size='s' color='primary'>Маленький</Tag>
    </>
  );
}

export default withLayout(Home);