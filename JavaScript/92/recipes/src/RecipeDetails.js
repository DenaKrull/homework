import React, { useState } from 'react'
import ListComponent from './ListComponent';

export default function RecipeDetails(props) {

  let [show, setShow] = useState(true);

  const togglePicture = () => {
    setShow(!show)
  }
  const { name, ingredients, directions, picture } = props.recipe;
  return (
    <>
      <h2>{name}</h2>
      {show && <img className='img-thumbnail' src={picture} alt="" />}
      <br />
      <button className='btn btn-secondary' onClick={togglePicture}>{show ? 'hide' : 'show'}</button>
      <ListComponent title="Ingredients" items={ingredients} />
      <ListComponent title="Directions" items={directions} />
    </>
  )
}

