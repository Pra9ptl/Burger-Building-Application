import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../../hoc/Auxillary/Auxillary';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        // can also use constructor for same
        //as to run before component mounts we need to take out of the method in this situation
        // componentWillMount() {
        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        })
        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err);
        });
        // }

        // clean up when it unmount
        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            };
        }, [reqInterceptor, resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <Auxillary>
                <Modal
                    show={error}
                    modalClosed={errorConfirmedHandler}>
                    {error && error.message}
                </Modal>
                <WrappedComponent {...props} />
            </Auxillary>
        );
    }
}

export default withErrorHandler;