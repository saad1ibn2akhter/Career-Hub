import React from 'react';
import { Link } from 'react-router-dom';
const ErrorElement = () => {
    return (
        <div>
            <h1>This is an error</h1>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorElement;