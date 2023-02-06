import React, { Component } from 'react'

function Input({label, ...inputProps}){
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    )
}

export default Input