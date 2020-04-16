import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
    }

    render() {
      return (
        <div className={classes.ContactData}>
          <h4>Enter your contact data</h4>
          <form>
              <input className={classes.Input} type='text' name="name" placeholder="Enter your Name" />
              <input className={classes.Input} type='text' name="mail" placeholder="Enter your Mail" />
              <input className={classes.Input} type='text' name="street" placeholder="Enter your Street" />
              <input className={classes.Input} type='text' name="postal" placeholder="Enter your Postal Code" />
              <Button btnType="Success" clicked={this.orderHandler} >Order</Button>
          </form>
        </div>
      )
    };
}

export default ContactData;