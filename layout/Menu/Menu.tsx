import { AppContext } from '@/context/app.context';
import { useContext } from 'react';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map(menuEl => <li key={menuEl._id.secondCategory}>{menuEl._id.secondCategory}</li>)}
      </ul>
    </div>
  );
};