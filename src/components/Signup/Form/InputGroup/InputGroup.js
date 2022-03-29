import React from 'react'
import InputField from './InputField/InputField';
import Label from './Label/Label';

function InputGroup({ label, name, type, value, setValue }) {
    return (
        <>
            <Label name={name} label={label} /><br />
            <InputField name={name} type={type} value={value} setValue={setValue} /><br />
        </>
    )
}

export default InputGroup