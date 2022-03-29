import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/actions';
import InputGroup from './InputGroup/InputGroup';

function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [imageName, setImageName] = useState("");
    const [image, setImage] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCPass] = useState("");
    const inputRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name,
            email,
            phone,
            avatar: image,
            pass
        }
        dispatch(registerUser(user));
        console.log("name:", name, "email:", email, "phone:", phone, "password:", pass, "confirm password:", cPass);
    }
    const handleReset = (event) => {
        event.preventDefault();
        inputRef.current.value = '';
        setName("");
        setEmail("");
        setPhone("");
        setImage("");
        setImageName("");
        setPass("");
        setCPass("");
    }
    const openImageDialog = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageName(event.target.files[0].name);
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <form>
            <div className="text-center">
                <button className="btn btn-light shadow-none" onClick={openImageDialog}>
                    Photo +
                </button>
                <p className="m-0">{imageName ? imageName : "No file chosen"}</p>
            </div>
            <input
                type="file"
                className="d-none"
                accept='.jpg, .png'
                onChange={onImageChange}
                ref={inputRef}
            />
            <InputGroup label="Name" name="name" type="text" value={name} setValue={setName} />
            <InputGroup label="Email" name="email" type="email" value={email} setValue={setEmail} />
            <InputGroup label="PhoneNo" name="phone" type="tel" value={phone} setValue={setPhone} />
            <InputGroup label="Password" name="pass" type="password" value={pass} setValue={setPass} />
            <InputGroup label="Confirm Password" name="cpass" type="password" value={cPass} setValue={setCPass} />
            <button
                className="btn btn-primary mt-2 ms-2 shadow-none"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <button
                className="btn btn-danger mt-2 ms-2 shadow-none"
                onClick={handleReset}
            >
                Reset
            </button>
        </form>
    )
}

export default Form