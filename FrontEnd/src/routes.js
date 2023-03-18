import { Navigate, useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
// import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import PlayPage from './pages/PlayPage';
import Wordlist from './pages/WordlistPage';
import WordlistOverviewPage from './pages/WordlistOverviewPage';
import { WordlistServiceClient } from './clientprotos/wordlist/WordlistServiceClientPb.ts';
import { LingoGameClient } from './clientprotos/gameservice/GameserviceServiceClientPb.ts';

// ----------------------------------------------------------------------

export default function Router() {
  const wordlistclient = new WordlistServiceClient('http://wordlist-envoy-loadbalancer-acb73d8140495a18.elb.us-east-1.amazonaws.com:8082');
  const gameclient = new LingoGameClient('http://load-balancer-envoy-0c53f4c11019d57a.elb.us-east-1.amazonaws.com:8081');

  const [user, setUser] = useState(null);
  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      const userObject = JSON.parse(userStorage);
      setUser(userObject);
      // setUser(null);
    }
  }, []);

  console.log(user);

  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout user={user} setUser={setUser} />,
      children: [
        { element: <Navigate to="home" />, index: true },
        { path: 'home', element: <DashboardAppPage user={user} /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '',
      element: <DashboardLayout user={user} />,
      children: [
        { element: <Navigate to="play" />, index: true },
        { path: 'play', element: <PlayPage client={gameclient} /> },
      ],
      //   element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'wordlist', element: <Wordlist client={wordlistclient} user={user} /> },
        { path: 'wordlist-overview', element: <WordlistOverviewPage client={wordlistclient} user={user} /> },

        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
