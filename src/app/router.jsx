import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/shared/ui/mainLayout/MainLayout';
import Dashboard from '@/features/dashboard/Dashboard';
import Eleves from '@/features/eleves/pages/eleves/Eleves';
import Inscription from '../features/inscription/pages/inscription/Inscription';
import Enseignants from '../features/enseignants/pages/enseignants/Enseignants';
import Matieres from '../features/matieres/pages/matieres/Matieres';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'eleves',
        element: <Eleves />,
      },
      {
        path: '/eleves/inscription',
        element: <Inscription/>,
      },
      {
        path: '/enseignants',
        element: <Enseignants/>,
      },
      {
        path: '/enseignants/matiere',
        element: <Matieres/>,
      },
    ],
  },
]);
