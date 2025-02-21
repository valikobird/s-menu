import { useEffect, useState } from 'react';
import data from './data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const App = () => {
  const [menuCategories, setMenuCategories] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const categories = data.reduce((acc, item) => {
      acc.add(item.category);
      return acc;
    }, new Set());
    setMenuCategories(['all', ...categories]);
    setDishes(data);
  }, []);

  const showCategory = (category) => {
    const menuItems = data.filter(
      (item) => category === 'all' || item.category === category
    );
    setDishes(menuItems);
  };

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <div className='under'></div>
      <Categories categories={menuCategories} showCategory={showCategory} />
      <Menu dishes={dishes} />
    </main>
  );
};

export default App;
