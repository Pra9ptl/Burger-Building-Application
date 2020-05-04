import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import useHttpErrorHandler from '../../hooks/httpErrorHandler';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, clearErorr] = useHttpErrorHandler(axios);
        return (
            <Auxillary>
                <Modal
                    show={error}
                    modalClosed={clearErorr}>
                    {error && error.message}
                </Modal>
                <WrappedComponent {...props} />
            </Auxillary>
        );
    }
}

export default withErrorHandler;