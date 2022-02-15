import React, { useState } from 'react';

const Input = ({ label, type, name, onChange }) => {

    const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <input 
                type={type} 
                className="form-control" 
                name={name} 
                onChange={onChange} 
                onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}/>
        </div>
    )
}

export default Input