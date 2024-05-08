import React, { useState, useEffect } from "react";


import gsap, { Expo } from "gsap";

const Layout = ({ children }) => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('#loadingAnimation', {
      height: "0",
      duration: 5 ,
      ease: Expo.easeInOut,
      delay: 1.5, 
    }).to("#childrens",{
      height:'100vh',
      delay:1,
      duration:3,
      // display:'block',
      transition:'Expo.ease'

    })
    
  }, []);

  return (
    <div id="main" 
    style={{ position: "relative"}} 
    >
      
        <div id="loadingAnimation" 
        style={{
        
        height: "100vh",
        width:"100%",
        overflow:"hidden",
        
        }}>

          
        </div>
        <div id="childrens" 
style={{
  position: 'absolute',
  top: '100%',
  // display:'none',
  // overflow:'auto',

  width: '100%',
  height: '0px',
}}        >
  <div>

        <header>
    
      </header>
        <main >
          {children}
        </main>
    
  </div>
        </div>
    </div>
  );
};

export default Layout;
