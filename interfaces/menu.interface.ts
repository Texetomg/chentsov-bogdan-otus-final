import { TopLevelCategory } from './page.interface';

export interface MenuItem {
  _id: {
    secondCategory: string;
  }
  pages: PageItem[];
  isOpened?: boolean;
}

export interface PageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}