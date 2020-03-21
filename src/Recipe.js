import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instruction: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    render() {
        const {title, img, instruction, id, onDelete} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
                 <li key={index}>{ing}</li>
            )
        );
        return (
            <div className="recipe-card">
                <div className="recipe-card-image">
                    <img src={img} alt={title}/>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-card-title">{title}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instruction</h4>
                    <p>{instruction}</p>
                    <button type="button" className="btn" onClick={() => onDelete(id)}>DELETE</button>
                </div>
            </div>
            
        );
    }
}

export default Recipe;