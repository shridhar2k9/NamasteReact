import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Error from "./components/Error";
import Body from "./components/Body";
import "./App.css";
import userContext from './utils/userContext'

const About = lazy(()=>import('./components/AboutCombined'));
const Contact = lazy(()=>import("./components/Contact"));
const ProductDetail = lazy(()=>import("./components/ProductDetail"));

const AppLayout = () => {
const [loggedUser,setLoggedUser] = useState();
useEffect(()=>{
  setLoggedUser("Jayapratha");
},[])
  return (
    <userContext.Provider value={{loggedInUser:loggedUser,setLoggedUser}}>
    <div className="app">
    <userContext.Provider value={{loggedInUser:"Shridhar"}}>
      <Header />
    </userContext.Provider>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
      </Suspense>
    </div>
    </userContext.Provider>
  );
}; 
const appRouter = createBrowserRouter([
  {path: "/", element: <AppLayout />,
    errorElement: <Error />, 
    children: [
       {path: "/", element: <Body />},
       {path: "/about", element: <About />},
      {path: "/contact", element: <Contact />},
      {path: "/product/:productId", element: <ProductDetail />}
    ]},
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);