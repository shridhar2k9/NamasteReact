import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Error from "./components/Error";
import Body from "./components/Body";
import "./App.css";
import userContext from './utils/userContext';
import appStore from './utils/Store/Store';
import {Provider} from 'react-redux';

const About = lazy(()=>import('./components/AboutCombined'));
const Contact = lazy(()=>import("./components/Contact"));
const ProductDetail = lazy(()=>import("./components/ProductDetail"));
const Cart = lazy(()=>import("./components/Cart"));

const AppLayout = () => {
const [loggedUser,setLoggedUser] = useState();
useEffect(()=>{
  setLoggedUser("Jayapratha");
},[])
  return (
    <Provider store={appStore}>
  <userContext.Provider value={{ loggedInUser: loggedUser, setLoggedUser }}>
    <div className="app min-h-screen flex flex-col">
      <userContext.Provider value={{ loggedInUser: "Shridhar" }}>
        <Header />
      </userContext.Provider>

      {/* Centered Outlet */}
      <div className="flex-1 flex items-center justify-center">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  </userContext.Provider>
</Provider>

  );
}; 
const appRouter = createBrowserRouter([
  {path: "/", element: <AppLayout />,
    errorElement: <Error />, 
    children: [
       {path: "/", element: <Body />},
       {path: "/about", element: <About />},
      {path: "/contact", element: <Contact />},
      {path: "/product/:productId", element: <ProductDetail />},
      {path: "/cart", element: <Cart />}
    ]},
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);