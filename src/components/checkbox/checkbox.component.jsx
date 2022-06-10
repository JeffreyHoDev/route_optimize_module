import { useState } from 'react'


const Checkbox = ({ name, handleOnChange, index, states }) => {


    return (
        <div className='checkbox-detail-container'>
            <input type="checkbox" name={name} value={name} checked={states[index]} onChange={() => handleOnChange(index)}  />
            <label htmlFor={name}>{name}</label>
        </div>
    )
}

export default Checkbox