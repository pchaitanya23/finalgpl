import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Gallery from './components/Gallery.jsx'
import OurStory from './components/OurStory.jsx';
import Events from './components/Events.jsx';
import Contact from './components/Contact.jsx'
import LiveScore from './components/LiveScore.jsx'
import Betting from './components/finalBet.jsx'
import Login from './components/Login.jsx'
import Score from './components/Table.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "gallery",
    element: <Gallery/>
  },
  {
    path: "home",
    element: <App/>
  },
  {
    path: "our-story",
    element: <OurStory/>
  },
  {
    path: "events",
    element: <Events/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
  {
    path: "livescore",
    element: <LiveScore/>
  },
  {
    path: "betting",
    element: <Betting/>
  },
  {
    path: "login",
    element: <Login/>
  }
  ,
  {
    path: "score",
    element: <Score/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
