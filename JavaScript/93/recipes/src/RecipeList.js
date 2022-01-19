import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function RecipeList(props) {
  const { recipes, selectRecipe } = props;

  return (
    <>
      <h4>recipes</h4>
      <ul className="bulletless">
        {recipes.map((item, index) => (
          <li key={item.id} >
            <Link to={`/recipe/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};