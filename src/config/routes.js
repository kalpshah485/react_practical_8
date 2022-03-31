import Home from '../pages/Home';
import Signup from '../pages/Signup';

const routes = {
    signup: {
        id: 'signup',
        name: 'Signup',
        description: 'Signup page',
        path: '/signup',
        isPrivate: false,
        element: <Signup />
    },
    home: {
        id: 'home',
        name: 'Home',
        description: 'Home page',
        path: '/home',
        isPrivate: true,
        element: <Home />
    }
}
export default routes;