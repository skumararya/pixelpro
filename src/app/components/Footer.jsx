"use client";
import React, { useEffect } from 'react';
const Footer = () => {

  useEffect(() => {
    // First script
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/667aaac69d7f358570d32d41/1i17im6km";
    script.async = true;
    script.setAttribute('crossorigin','*');
     document.body.appendChild(script); 
     return () => {
      document.body.removeChild(script);
     
    };
  }, []);

  return (
   <>
   <footer id="footer">
   
   <div className="container">
     <div className="footerMenu">
       <h3>Resources</h3>
       <ul className="footerLinks cf">
         <li><a href="#">Home</a></li>
         <li><a href="#">Download</a></li>
         <li><a href="#">Terms &amp; Conditions</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </div>
     <div className="footerText cf">
       <div className="copyRightText">
         <p>&copy; Copyright 2018, All Rights Reserved</p>
       </div>
       <div className="footerSocialIcons">
         <ul className="socialIcons cf">
           <li><a href="https://www.facebook.com/ParityChain-221533051761574/" target="_blank" className="socialIcon facebook" title="Facebook"><i className="fa fa-facebook-f"></i></a></li>
           <li><a href="https://twitter.com/paritychain" target="_blank" className="socialIcon twitter"  title="Twitter"><i className="fa fa-twitter"></i></a></li>
           <li><a href="https://www.linkedin.com/company/paritychain/" target="_blank" className="socialIcon linkedIn"  title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
         </ul>
       </div>
     </div>
   </div>
  
 </footer>

 
   </>
  )
}

export default Footer
