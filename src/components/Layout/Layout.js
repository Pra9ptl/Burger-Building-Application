import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Auxillary>
        <ToolBar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;