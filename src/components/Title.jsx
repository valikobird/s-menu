const Title = ({ text }) => {
  return (
    <div className='title'>
      <h2>{text || 'Default Title'}</h2>
      <div className='under'></div>
    </div>
  );
};

export default Title;
