import React from 'react';

import './styles.css';

const Select = ({lable, name, option, ...rest}) =>{
    return(
        <div>
            <h1 htmlFor={name}>{lable}</h1>
            <select className="select-box"  id={name} name={name} {...rest}>
                <option defaultValue="" disabled hidden selected>Escolha o tatuador</option>
                {option.map(option =>{
                    return <option key={option.value} value={option.value}>{option.label}</option>
                    })}
            </select>
        </div>
    )
}

export default Select;