import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import ProjectsDetails from '../pages/ProjectsDetails';
import Resume from '../pages/Resume';
import Services from '../pages/Services';
import Skills from '../pages/Skills';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'/resume',
            element: <Resume/>
        },
        {
            path: '/skills',
            element: <Skills/>
        },
        {
            path: '/projects',
            element: <Projects/>
        },
        {
          path: '/project/:id',
          element: <ProjectsDetails/>
        },
        {
          path: 'services',
          element: <Services/>
        }
      ],
      errorElement: <NotFound/>
    },
  ]);

export default Route