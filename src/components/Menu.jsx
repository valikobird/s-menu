import MenuItem from './MenuItem';

const Menu = ({ dishes }) => {
  return (
    <section className='menuContainer'>
      {dishes.map((dish) => {
        return <MenuItem dish={dish} key={dish.id} />;
      })}
    </section>
  );
};

export default Menu;
