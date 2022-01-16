import React from 'react'
import PropTypes from 'prop-types'

export default function RecipeList(props) {
  const { recipes, selectRecipe } = props;
  return (
    <ul className="bulletless">
      {recipes.map((item, index) => (
        <li key={item.id} onClick={() => selectRecipe(index)}>{item.name}</li>
      ))}
    </ul>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectRecipe: PropTypes.func.isRequired
}