import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayCustomerByUsernameAction } from '../redux/displayCustomerByUsername/displayCustomerByUsernameActions';
import DisplayCustomerDetails from './DisplayCustomerDetails';

export default function DisplayCustomerByUsername({ username }) {


    let response = useSelector((state) => {
        return ({
            customer: state.findCustomerByUsername.user,
            error: state.findCustomerByUsername.error.message
        });
    });

    let dispatch = useDispatch();

    let findUser = () => {

        dispatch(displayCustomerByUsernameAction(username));

    }

    useEffect(findUser, []);


    return (
        <div>
            <h2>Your Profile:</h2>
            {response.customer ? (
                <div>
                    <DisplayCustomerDetails customer={response.customer} />
                </div>
            ) : ''}

            {response.error ? (
                <div>
                    {response.error}
                </div>
            ) : ''}

        </div>
    );
}