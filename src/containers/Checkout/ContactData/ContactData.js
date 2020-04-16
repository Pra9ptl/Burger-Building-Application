import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Jarvis Patel',
                address: {
                    street: '1191 Birchmount Rd',
                    zipCode: 'M1C 2P1',
                    country: 'Canada'
                },
                email: 'patelpranav1313@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        Axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type='text' name="name" placeholder="Enter your Name" />
                <input className={classes.Input} type='text' name="mail" placeholder="Enter your Mail" />
                <input className={classes.Input} type='text' name="street" placeholder="Enter your Street" />
                <input className={classes.Input} type='text' name="postal" placeholder="Enter your Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler} >Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    };
}

export default ContactData;