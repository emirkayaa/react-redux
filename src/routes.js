import About from "./Views/About";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Profile from "./Views/Profile";

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        auth: false
    },
    {
        path: '/about',
        component: About,
        exact: true,
        auth: false
    },
    {
        path: '/profile',
        component: Profile,
        exact: true,
        auth: true
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        auth: false
    },
];
