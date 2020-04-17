import React from 'react';
import classes from './Input.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementtype) {
        case ('input'):
            inputElement =
                <input
                    {...props.elementConfig}
                    className={inputClasses.join(' ')}
                    value={props.value} 
                    onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement =
                <textarea
                    {...props.elementConfig}
                    className={inputClasses.join(' ')}
                    value={props.value} 
                    onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (
                <select
                className={inputClasses.join(' ')}
                value={props.value} 
                onChange={props.changed} >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement =
                <input
                    {...props.elementConfig}
                    className={inputClasses.join(' ')}
                    value={props.value} 
                    onChange={props.changed} />
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;