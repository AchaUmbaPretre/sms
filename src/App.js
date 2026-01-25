import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './shared/ui/mainLayout/MainLayout';
import Dashboard from './features/dashboard/Dashboard';
import Eleves from './features/eleves/pages/eleves/Eleves';


function App() {

    const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { 
          path: '/', 
          element: <Dashboard /> 
        },
        { 
          path: '/eleves', 
          element: <Eleves /> 
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
