import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { useContext } from 'react';
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './Menu.module.css';
import cn from 'classnames';


const firtstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses', name: 'курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses,
  },
  {
    route: 'services', name: 'сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services,
  },
  {
    route: 'books', name: 'книги', icon: <BooksIcon />, id: TopLevelCategory.Books,
  },
  {
    route: 'products', name: 'продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products,
  }
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firtstLevelMenu.map(m => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id ===  firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem ) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBLockOpened]: m.isOpened
            })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
          [styles.firstLevelActive]: false
        })}>
          {p.category}
        </a>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      <ul>
        {buildFirstLevel()}
      </ul>
    </div>
  );
};