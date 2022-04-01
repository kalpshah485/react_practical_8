import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import womanImage from '../assets/images/signupImage.png';
import { registerUser } from '../redux/actions';

function Signup() {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      phone,
      pass
    }
    dispatch(registerUser(user));
    console.log("name:", name, "email:", email, "phone:", phone, "password:", pass, "confirm password:", cPass);
  }
  const handleReset = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setPass("");
    setCPass("");
  }
  return (
    <div className="row m-0 p-0">
      <div className="col col-md-6">
        <h1>
          SignUp
        </h1>
        <form>
          <input type="file" /><br />
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          /><br />
          <label htmlFor="email">Email</label><br />
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          /><br />
          <label htmlFor="phone">PhoneNo</label><br />
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          /><br />
          <label htmlFor="pass">Password</label><br />
          <input
            type="password"
            className="form-control"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          /><br />
          <label htmlFor="cpass">Confirm Password</label><br />
          <input
            type="password"
            className="form-control"
            value={cPass}
            onChange={(event) => setCPass(event.target.value)}
          /><br />
          <button
            className="btn btn-primary mt-2 ms-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-danger mt-2 ms-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
      <div className="col d-none d-md-block">
        <img className="woman-photo" src={womanImage} alt="woman" />
      </div>
    </div>
  )
}

export default Signup