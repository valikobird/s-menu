const MenuItem = ({ dish }) => {
  const { title, price, img, desc } = dish;
  return (
    <article className='dish'>
      <img className='img' src={img} alt={title} />
      <div className='infoContainer'>
        <div className='titleContainer'>
          <h5 className='title'>{title}</h5>
          <span className='price'>${price}</span>
        </div>
        <p className='description'>{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
