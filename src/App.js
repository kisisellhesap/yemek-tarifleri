import './App.css';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Details from './pages/details/Details';
import Search from './pages/search/Search';
import MainLayout from './layout/MainLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/", element: <MainLayout />, children: [
      { index: "/", element: <Home /> },
      { index: "/tarifler", element: <Home /> },
      { path: "/create", element: <Create /> },
      { path: "/tarifler/:id", element: <Details /> },
      { path: "/search", element: <Search /> }
    ]
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
