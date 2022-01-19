import './App.css';
import React, { useEffect, useState } from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';


function App () {

  // const [state, setState] = useState(props);
  
  const [chooseRecipe, setChooseRecipe] = useState([]);
  


  useEffect(() => {
    (async () => {
      const result = await fetch(`recipes.json`);
      if(!result.ok) {
        throw new Error(result.statusText);
      }
       const data = await result.json();
       setChooseRecipe(data);
    })();
  }, [chooseRecipe])
  
    return (
      <div className="container-fluid">
        <div className="text-center">
          <Header />
          <Routes>
            <Route index element={<RecipeList recipes={chooseRecipe} />} />
            <Route path="/recipe/:id" element={<RecipeDetails recipes={chooseRecipe} />} />
            <Route path='*' element={<Navigate to='/' replace="true" />} />
          </Routes>
          <Outlet />
          <hr />
          <ClickCounter />
        </div>
      </div>
    );
  
}

export default App;
