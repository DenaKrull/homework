(function () {
    'use strict';

    const recipeDiv = $('#recipes');
    const recipeDetails = $('#recipeDetails');
    const recipeNameElem = $('#recipeDetails h2');
    const ingredientsElem = $('#ingredients');
    const instructionsElem = $('#instructions');
    const errorElem = $('#error');
    const nameInput = $('#name');
    const ingredientsInput = $('#ingredientsInput');
    const instructionsInput = $('#instructionsInput');
    const addRecipeForm = $('#addRecipeForm')

    async function loadJson(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        } catch (e) {
            errorElem.text(e.message);
        }
    }

    let oldrecipeId = null;
    async function recipeClicked(recipeToLoad) {
        const recipe = await loadJson(`http://localhost:3000/recipes/${recipeToLoad}`);
        if (recipe) {
            console.log(recipe);
            recipeNameElem.text(recipe[0].name);
            ingredientsElem.text(`Ingredients: ${recipe[0].ingredients}`);
            instructionsElem.text(`Instructions: ${recipe[0].instructions}`);
            if (oldrecipeId === recipeToLoad) {
                recipeDetails.slideUp('slow');
                oldrecipeId = null;
            } else if (oldrecipeId !== recipeToLoad && recipeDetails.slideDown('slow') && oldrecipeId !== null) {
                if (recipeDetails.slideDown('slow')) {
                    recipeDetails.slideUp('slow');
                };
                recipeDetails.slideDown('slow');
                oldrecipeId = recipeToLoad;
            } else {
                recipeDetails.slideDown('slow');
            }
            $('#delete').click((e) => {
                e.preventDefault();
                console.log('delete clicked');
                deleteRecipe(recipeToLoad, recipe[0].name);
                loadRecipes();
            });

            $('#edit').click((e) => {
                e.preventDefault();
                console.log('edit clicked');
                editRecipes(recipeToLoad, recipe[0].name);
            });
        }


    }
    async function loadRecipes() {
        const recipes = await loadJson('http://localhost:3000/recipes');
        if (recipes) {
            recipes.forEach(recipe => {
                recipeDiv.append(`<div class="Individualrecipe" id="${recipe.id}">${recipe.name}</div>`);
            });
        } else {
            errorElem.text('No recipes found');
        }
        $('.Individualrecipe').click(function () {
            console.log(this.id);
            recipeClicked(this.id);
        });
    }

    loadRecipes();

    $('#close').click((e) => {
        e.preventDefault();
        recipeDetails.slideUp('slow');

    });

    async function deleteRecipe(recipeId, recipeName) {
        try {
            const response = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Unable to delete contact- ${response.status} ${response.statusText}`);
            }
            alert(`recipe for ${recipeName} has been deleted`);
            recipeDetails.slideUp('slow');
        } catch (e) {
            errorElem.text(e.message);
        }
    }

    //add new recipes

    $('#new').click((e) => {
        e.preventDefault();
        addRecipeForm.slideDown('slow');
    });
    addRecipeForm.submit(async (e) => {
        e.preventDefault();
        const newRecipe = {
            name: nameInput.val().toUpperCase(),
            ingredients: ingredientsInput.val(),
            instructions: instructionsInput.val()
        };
        try {
            const r = await fetch('http://localhost:3000/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
            });

            if (!r.ok) {
                const errorText = await r.text();
                throw new Error(`Unable to add recipe- ${errorText}`);
            } else {
                recipeDiv.append(`<div class="Individualrecipe" id="${newRecipe.id}">${newRecipe.name}</div>`);
                alert(`${newRecipe.name} has been added`);
                hideandresetForm();
                loadRecipes();
            }
        } catch (e) {
            errorElem.text(`${e.message} erroe elem text`);
        }
    });

    $('#cancel').click(hideandresetForm);

    ///edit recipes
    async function editRecipes(recipeId, recipeName) {
        ///need to bring back add recipe form
        addRecipeForm.slideDown('slow');
        
        const recipe = {
            name: recipeNameElem.text(),
            ingredients:  ingredientsElem.text(),
            instructions:  instructionsElem.text()
        };
        try {
            const r = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipe)
            });
            if (!r.ok) {
                const errorText = await r.text();
                throw new Error(`Unable to edit recipe- ${errorText}`);
            } else {
                alert(`${recipeName} has been edited`);
                hideandresetForm();
                loadRecipes();
            }
        } catch (e) {
            errorElem.text(`${e.message} error elem text`);
        }
    }


    //////
    function hideandresetForm() {
        addRecipeForm.slideUp('slow');
        addRecipeForm.data('recipes', null);
        addRecipeForm.trigger('reset');
    }
}());