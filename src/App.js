import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import './App.css';

function App() {
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
