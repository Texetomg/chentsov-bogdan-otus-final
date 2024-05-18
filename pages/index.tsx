import { Button, Htag, P, Rating } from '@/components';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(5);
  return (
    <div>
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
    </div>
  );
}
