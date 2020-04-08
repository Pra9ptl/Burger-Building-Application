import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngreditent';

const buger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default buger;