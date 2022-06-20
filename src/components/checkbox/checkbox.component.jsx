import Checkbox from '@mui/material/Checkbox';


const CheckboxComponent = ({ name, handleOnChange, index, states }) => {


    return (
        <div className='checkbox-detail-container'>
        <Checkbox name={name} value={name} checked={states[index]} color="success" onChange={() => handleOnChange(index)} />
            {/* <input type="checkbox" name={name} value={name} checked={states[index]} onChange={() => handleOnChange(index)}  /> */}
            <label htmlFor={name}>{name}</label>
        </div>
    )
}

export default CheckboxComponent