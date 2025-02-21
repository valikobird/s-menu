import { useEffect, useState } from 'react';
import data from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';
import Title from './components/Title';

const App = () => {
  const [menuCategories, setMenuCategories] = useState([]);
  const [dishes, setDishes] = useState(data);

  useEffect(() => {
    const categories = data.reduce((acc, item) => {
      acc.add(item.category);
      return acc;
    }, new Set());
    setMenuCategories(['all', ...categories]);
  }, []);

  const showCategory = (category) => {
    if (category === 'all') {
      setDishes(data);
      return;
    }
    const menuItems = data.filter((item) => item.category === category);
    setDishes(menuItems);
  };

  return (
    <main className='menu'>
      <Title text='Our Menu' />
      <Categories categories={menuCategories} showCategory={showCategory} />
      <Menu dishes={dishes} />
    </main>
  );
};

export default App;
