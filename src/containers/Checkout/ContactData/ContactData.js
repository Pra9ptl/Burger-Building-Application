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

    render() {
      return (
        <div className={classes.ContactData}>
          <h4>Enter your contact data</h4>
          <form>
              <input type='text' name="name" placeholder="Enter your Name" />
              <input type='text' name="mail" placeholder="Enter your Mail" />
              <input type='text' name="street" placeholder="Enter your Street" />
              <input type='text' name="postal" placeholder="Enter your Postal Code" />
              <Button btnType="Success">Order</Button>
          </form>
        </div>
      )
    };
}

export default ContactData;