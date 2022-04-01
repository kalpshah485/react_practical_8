import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './config/routes';

function App() {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <Routes>
      {
        Object.keys(routes).map(key => {
          const value = routes[key];
          return <Route {...value} key={key} />
        })
      }
      <Route path='/' element={<Navigate to='/home' replace />} />
    </Routes>
  );
}

export default App;
