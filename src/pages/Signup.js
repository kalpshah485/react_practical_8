import React from 'react';
import womanImage from '../assets/images/signupImage.png';
import SignupImage from '../components/Signup/SignupImage/SignupImage';
import Form from '../components/Signup/Form/Form';

function Signup() {
  return (
    <div className="row m-0 p-0 mt-2">
      <div className="col col-md-6">
        <h1>
          SignUp
        </h1>
        <Form />
      </div>
      <div className="col d-none d-md-block">
        <SignupImage photo={womanImage} />
      </div>
    </div>
  )
}

export default Signup