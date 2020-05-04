import React from 'react';
import classes from './Modal.css';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== props.show || nextProps.children !== props.children;
    // }

    return (
        <Auxillary>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-150vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Auxillary>
    );
}

// optimize performance the component and only updates when the props of the component changes
export default React.memo(modal,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children);