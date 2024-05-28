import { Button, Htag, P, Rating, Tag } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map(menuEl => <li key={menuEl._id.secondCategory}>{menuEl._id.secondCategory}</li>)}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number,
}