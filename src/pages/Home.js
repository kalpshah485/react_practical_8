import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Home() {
  const {user} = useSelector(state => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/signup');
    }
  }, [user,navigate])
  
  return (
    <div>Home</div>
  )
}

export default Home