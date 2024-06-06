import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';

const Root = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false)
      },2000)
    },[])
  
    if(isLoading){
      return <div className="flex items-center justify-center min-h-screen space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-pink-700"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-pink-700"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-pink-700"></div>
    </div>
    }

    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Root