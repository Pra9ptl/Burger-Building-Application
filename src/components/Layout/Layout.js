import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';

const layout = (props) => (
    <Auxillary>
        <ToolBar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;