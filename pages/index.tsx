import { Button, Htag, Input, P, Rating, Tag, TextArea } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';

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
      <Input placeholder='test'/>
      <TextArea placeholder='test'/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};
