import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayAdminByUsernameAction } from '../redux/displayAdminByUsername/displayAdminByUsernameActions';
import DisplayAdminDetails from './DisplayAdminDetails';


export default function DisplayAdminByUsername({ username }) {


    let response = useSelector((state) => {
        return ({
            admin: state.findAdminByUsername.user,
            error: state.findAdminByUsername.error.message
        });
    });

    let dispatch = useDispatch();

    let findUser = () => {

        dispatch(displayAdminByUsernameAction(username));

    }

    useEffect(findUser, []);


    return (
        <div>
            <h2>Your Profile:</h2>
            {response.admin ? (
                <div>
                    <DisplayAdminDetails admin = {response.admin} />
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