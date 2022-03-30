import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { registerUser } from '../../../redux/actions';
import InputGroup from './InputGroup/InputGroup';

const validate = values => {
    const errors = {};
    if (!values.image) {
        errors.image = 'Image is required';
    }
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length > 15) {
        errors.firstName = 'Name must be 15 characters or less';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phone) {
        errors.phone = "Phone No required!";
    } else if (
        !/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[56789]\d{9}$/gm.test(
            values.phone
        )
    ) {
        errors.phone = "Invalid Phone No!";
    }

    if (!values.pass) {
        errors.pass = "Password is Required!";
    } else if (values.pass.length < 8) {
        errors.pass = "Password length must be atleast 8 characters!";
    } else if (values.pass.length > 15) {
        errors.pass = "Password length must not exceed 15 characters!";
    } else if (!values.cpass) {
        errors.cpass = "Confirm Your Password First!";
    } else if (values.pass !== values.cpass) {
        errors.cpass = "Password Not Match!";
    }

    return errors;
};

function Form() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            image: '',
            pass: '',
            cpass: ''
        },
        validate,
        onSubmit: (values) => {
            dispatch(registerUser({
                name: values.name,
                email: values.email,
                phone: values.phone,
                avatar: URL.createObjectURL(values.image),
                pass: values.pass

            })
            );
        }
    })
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleReset = () => {
        inputRef.current.value = '';
        formik.handleReset();
    }
    const openImageDialog = () => {
        inputRef.current.click();
    }
    const onImageChange = (event) => {
        if (event.currentTarget.files && event.currentTarget.files[0]) {
            formik.setFieldValue(
                "image",
                event.currentTarget.files[0]
            );
        }
    }
    return (
        <form className="form" onSubmit={formik.handleSubmit} onReset={handleReset}>
            <div className="text-center">
                <button type="button" name="image" className="btn btn-light shadow-none" onClick={openImageDialog} onBlur={formik.handleBlur}>
                    Photo +
                </button>
                <div>
                    {
                        formik.values.image ? <img className="preview" src={URL.createObjectURL(formik.values.image)} alt={formik.values.image.name} /> : ''
                    }
                </div>
                <p className="m-0">{formik.values.image.name ? formik.values.image.name : "No file chosen"}</p>
            </div>
            <input
                type="file"
                className="d-none"
                accept='.jpg, .png'
                onChange={onImageChange}
                ref={inputRef}
            />
            <div className="text-danger text-center">
                {
                    formik.touched.image && formik.errors.image ? <small>{formik.errors.image}</small> : null
                }
            </div>
            <InputGroup
                label="Name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <div className="text-danger">
                {
                    formik.touched.name && formik.errors.name ? <small>{formik.errors.name}</small> : null
                }
            </div>
            <InputGroup
                label="Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <div className="text-danger">
                {
                    formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : null
                }
            </div>
            <InputGroup
                label="PhoneNo"
                name="phone"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <div className="text-danger">
                {
                    formik.touched.phone && formik.errors.phone ? <small>{formik.errors.phone}</small> : null
                }
            </div>
            <InputGroup
                label="Password"
                name="pass"
                type="password"
                value={formik.values.pass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <div className="text-danger">
                {
                    formik.touched.pass && formik.errors.pass ? <small>{formik.errors.pass}</small> : null
                }
            </div>
            <InputGroup
                label="Confirm Password"
                name="cpass"
                type="password"
                value={formik.values.cpass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <div className="text-danger">
                {
                    formik.touched.cpass && formik.errors.cpass ? <small>{formik.errors.cpass}</small> : null
                }
            </div>
            <button
                type="submit"
                className="btn btn-primary mt-2 ms-2 shadow-none"
            >
                Submit
            </button>
            <button
                type='reset'
                className="btn btn-danger mt-2 ms-2 shadow-none"
            >
                Reset
            </button>
        </form>
    )
}

export default Form