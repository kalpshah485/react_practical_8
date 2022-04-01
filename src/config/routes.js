import Home from '../pages/Home';
import Signup from '../pages/Signup';

const routes = {
    home: {
        id: 'home',
        name: 'Home',
        description: 'Home page',
        path: '/home',
        element: <Home />
    },
    signup: {
        id: 'signup',
        name: 'Signup',
        description: 'Signup page',
        path: '/signup',
        element: <Signup />
    }
}
export default routes;