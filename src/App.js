import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './shared/ui/mainLayout/MainLayout';
import Dashboard from './features/dashboard/Dashboard';


function App() {

    const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { 
          path: '/', 
          element: <Dashboard /> 
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
