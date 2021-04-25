import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import React from 'react';


export default function Home() {

    return (
            <Router>
                <NavBar />
                <h1>Welcome to the user module.</h1>
            </Router>
    );
}