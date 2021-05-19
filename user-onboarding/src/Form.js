import React, { useState, useEffect } from 'react';
import './Form.css';

export default function Form(props) {

    const { values, change } = props;

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
        <div>
            <form className='form-container'>

                <label>Name
                    <input 
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input 
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Password
                    <input 
                        name='email'
                        type='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>

                <label>Accept Terms of Service
                    <input 
                        name='terms'
                        type='checkbox'
                        value={values.checkbox}
                        onChange={onChange}
                    />
                </label>

                <button>Submit</button>

            </form>
        </div>
    )
}

// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.