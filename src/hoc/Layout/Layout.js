import React, { useState } from 'react';
import Auxillary from '../Auxillary/Auxillary';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const layout = (props) => {

    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    // state = {
    //     showSideDrawer: false
    // }

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }
    return (
        <Auxillary>
            <ToolBar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxillary>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.idToken !== null
    };
};

export default connect(mapStateToProps)(layout);