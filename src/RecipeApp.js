import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './pages/RecipeList';
import Home from './pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class RecipeApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: [
                {
                    id: 0,
                    title: 'Spaghetti',
                    instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ingredients: ['pasta','8 cups water', '1 box something else'],
                    img: "https://www.365daysofcrockpot.com/wp-content/uploads/2019/08/instant-pot-cream-cheese-spaghetti-recipe.jpg"
                },            {
                    id: 1,
                    title: 'Milkshake',
                    instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ingredients: ['pasta','8 cups water', '1 box something else'],
                    img: "https://www.hersheys.com/content/dam/hersheyskitchens/images/recipes/large/8939_en-us_large.jpg"
                },            {
                    id: 2,
                    title: 'Avokado Toast',
                    instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ingredients: ['pasta','8 cups water', '1 box something else'],
                    img: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/03/avocado-on-toast.jpg?itok=yV6yyvoX"
                },            {
                    id: 3,
                    title: 'Salsa Chicken',
                    instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ingredients: ['pasta','8 cups water', '1 box something else'],
                    img: "https://www.saltandlavender.com/wp-content/uploads/2019/10/skillet-salsa-chicken-recipe-1-720x1080.jpg"
                }
                
                
            ],
            nextRecipeId: 4,
            showForm: false
            }

            this.handleSave = this.handleSave.bind(this);
            this.onDelete = this.onDelete.bind(this)
        }
        handleSave(recipe){
            this.setState((prevState, props)=> {
                const newRecipe = {...recipe, id: this.state.nextRecipeId};
                return {
                    nextRecipeId: prevState.nextRecipeId + 1,
                    recipes: [...this.state.recipes, newRecipe],
                    showForm: false
                }
            })
        }

        onDelete(id){
            const recipes = this.state.recipes.filter(r => r.id != id);
            this.setState({recipes});
        }
    render() {
        const {showForm} = this.state;
        return (
            <div className="App">
            <Router>
                <Navbar onNewRecipe={()=> this.setState({
                        showForm: true
                    })}/>
                    {showForm ? <RecipeInput onSave={this.handleSave} 
                    onClose={()=> this.setState({
                        showForm: false
                    })}/> : null}
                    <Switch>
                        <Route path="/home">
                          <Home />
                        </Route>
                        <Route path="/recipes">
                          <RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
                        </Route>
                    </Switch>
                    
            </Router>
                
            </div>
            
        )
    }
}
export default RecipeApp;