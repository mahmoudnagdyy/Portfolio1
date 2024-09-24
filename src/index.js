import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));


const routes = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {path: 'Resume', element: <Resume/>},
      {path: 'Services', element: <Services/>},
      {path: 'Projects', element: <Projects/>},
      {path: 'Contact', element: <Contact/>},
    ]
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);


reportWebVitals();
