import logo from './logo.svg';
import './App.css';

import routes from './pages/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <Routes>{
      routes.map(({ component: Component, path, ...rest }) => {
        { console.log({ Component }) }
        return (
          <Route
            // render={(props) => (
            //   <React.Suspense fallback={"loading...."} >
            //     element = <Component {...props} />
            //   </React.Suspense>
            // )}
            key={path}
            path={path}
            element={
              <React.Suspense fallback={"loading...."} >
                {<Component />}
              </React.Suspense>
            }
            {...rest}
          />
        );
      })
    }
    </Routes>
  )
}
export default App