import React from 'react';
import './User.css';

export default function User(props) {
    const { details } = props;

    return (
        <div className='user-container'>
            <h3>Name: {details.name}</h3>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Accepted Terms: {details.terms ? 'Yes' : 'No'}</p>
            <p>ID: {details.id}</p>
        </div>
    )
};