import './App.css';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './pages/layout/Layout';

function App() {

    const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { 
          path: '/', 
          element: <Home /> 
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
