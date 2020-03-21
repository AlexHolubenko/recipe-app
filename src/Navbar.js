import React, { Component } from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import {
    Link
  } from "react-router-dom";

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    render() {
        return (
            <header>
             <h2><Link to="/home">Recipe App</Link></h2>
             <nav>
                 <li><Link to="/recipes" onClick={this.props.onNewRecipe}>New Recipe</Link></li>
                 <li><Link to="/recipes">Recipes</Link></li>
             </nav>
            </header>
        )
    }
}

export default Navbar;