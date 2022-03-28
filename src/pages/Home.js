import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions';

function Home() {
  const { user } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/signup');
    }
  }, [user, navigate]);

  if (user) {
    return (
      <div>
        <div className="vh-30 bg-success">
          <nav className="navbar navbar-dark bg-success">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">User Management React App</span>
              <div className="d-flex">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <button className="btn btn-danger" onClick={() => dispatch(logout())}>logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="vh-70">
          <div className="user-detail">
            <div className="profile-image">
              <img src={user.avatar} alt="profile" />
            </div>
            <div className="greeting">Hello <span className="highlight">{user.name}</span>,</div>
            <div>You are registered with</div>
            <div> Email ID - <span className="highlight">{user.email}</span></div>
            <div>Phone number - <span className="highlight">{user.phone}</span></div>
          </div>
        </div>
      </div>
    )
  } else {
    return '';
  }
}

export default Home