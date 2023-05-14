import './app/global.css';

import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import NotFound from './modules/404';
import Home from './modules/home';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '',
        element: <Home/>,
      },
    ],
  },
]);

function App (): JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      </div>
    </div>
  );
}

export default App;
