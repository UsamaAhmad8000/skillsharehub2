import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Root from './assets/url/url';
import Courses from './components/Courses/Courses';
import Instructors from './components/Instructors/Instructors';
import Layout from './components/Layout/Layout';



function App() {
  return (
    <Router>
      <>
        <div className="column">
          <div className="column">
            <Layout />
          </div>
        </div>
        <div className="container-fixed">
          <div className="container is-fullhd">
            <div className="">
            <Routes>
                  <Route
                    path={Root.DEFAULTHOME}
                    element={<Home />}
                  />
                  <Route
                    path={Root.ABOUT}
                    element={<About />}
                  />
                  <Route
                    path={Root.COURSES}
                    element={<Courses />}
                  />
                  <Route
                    path={Root.INSTRUCTORS}
                    element={<Instructors />}
                  />
                  <Route
                    path={Root.CONTACT}
                    element={<Contact />}
                  />
                </Routes>
                <div id="scrollableContentSidebar">
                  <div className="container is-fullhd">
                    <div className="notification is-white">
                      
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="column is-10">
              <div id="scrollableContent">
                
              </div>
            </div>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;