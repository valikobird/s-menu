const Categories = ({ categories, showCategory }) => {
  return (
    <div className='buttonsContainer'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            onClick={() => showCategory(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
