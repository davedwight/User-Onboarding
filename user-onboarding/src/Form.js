import React, { useState, useEffect } from 'react';
import './Form.css';

export default function Form(props) {

    const { values, change, disabled, submit, errors } = props;

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return(
        <div>
            <form className='form-container' onSubmit={onSubmit}>

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
                        name='password'
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

                <button disabled={disabled} >Submit</button>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>

            </form>
        </div>
    )
}