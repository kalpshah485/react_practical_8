import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import PrivateRoute from './containers/PrivateRoute';
import PublicRoute from './containers/PublicRoute';
import './App.css';

function App() {
  return (
    <Routes>
      {
        Object.keys(routes).map(key => {
          const value = routes[key];
          const { id, name, description, path, isPrivate, element } = value;
          return (
            isPrivate ?
              (
                <Route id={id} name={name} description={description} path={path} element={PrivateRoute(element)} key={key} />
              )
              : (
                <Route id={id} name={name} description={description} path={path} element={PublicRoute(element)} key={key} />
              )
          )
        })
      }
      <Route path='/' element={<Navigate to='/home' replace />} />
    </Routes>
  );
}

export default App;
