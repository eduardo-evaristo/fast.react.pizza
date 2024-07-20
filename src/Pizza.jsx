/*import PropTypes from 'prop-types';*/

function Pizza({ pizzaObj }) {
  //We've destructured props into an object and now we've destructured the object into variables
  const { photoName, name, ingredients, price, soldOut } = pizzaObj;

  {
    /* Conditional rendering with returns */
  }
  //if (soldOut) return null;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {/*soldOut ? <span>SOLD OUT</span> : <span>{price}</span>*/}

        {/* Since we, in all cases need a <span>, this one may be more straightforward */}
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

/*
//Setting the types the props should be, this can be overridden i eslint.cjs
Pizza.propTypes = {
  pizzaObj: PropTypes.shape({
    photoName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    soldOut: PropTypes.bool.isRequired
  }).isRequired,
};
*/

export default Pizza;
