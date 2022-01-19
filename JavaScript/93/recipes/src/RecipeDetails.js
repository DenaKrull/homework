import React, { Component } from 'react';
import ListComponent from './ListComponent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetails(props) {
  const [showPicture, setShowPicture] = useState(true);
  const [chooseRecipe, setChooseRecipe] = useState(false);
  const { recipes } = props;

  const { id } = useParams();
  console.log('would load', id);



  useEffect(() => {
    (async () => {
      const result = await fetch(`${id}.json`);
      if (!result.ok) {
        throw new Error(result.statusText);
      }
      const data = await result.json();
      setChooseRecipe(data);
    })();
  }, [id])

  const recipe = recipes.find(item => item.id === Number(id));

  const { name, ingredients, directions, picture } = chooseRecipe;


  return (
    <>

     { chooseRecipe ?    
      <div>
        <h2>{name}</h2>
        {showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
        <br />
        <button onClick={() => setShowPicture(!showPicture)} className="btn btn-secondary">{showPicture ? 'hide' : 'show'}</button>
        <ListComponent title="Ingredients" items={ingredients} />
        <ListComponent title="directions" items={directions} />
      </div> 
       :null}
    </>
  );
}