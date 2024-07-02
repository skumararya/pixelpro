import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <>
    <header id="header">
   <div className="headerInner">
   <div className="container">
        <div className="headerLeft"><a href="index.html" id="logo" className="logo hashLink" title="Parity Chain"><img src="/images/logo.png" width="106" height="78" alt="Parity Chain" title="Parity Chain" /></a> </div>
        <div className="headerRight">
          <div id="mainNav" className="mainNavigation">
            <div className="menuPart cf">
              <ul id="nav">
                <li><Link href="/">Home</Link></li>
                <li><a href="#">Our Services</a>
                  <ul>
                    <li><a href="blockchain-development.html">Blockchain Development</a></li>
                    <li><a href="node-hosting.html">Node Hosting</a></li>
                    <li><a href="smart-contract.html">Smart Contract Development</a></li>
                    <li><a href="ico-development.html">ICO Development</a></li>
                    <li><a href="wallet-service-development.html">Wallet Service Development</a></li>
                    <li><a href="mining-portal-development.html">Mining Pool Development</a></li>
                    <li><a href="exchange-software.html">Exchange Software Development</a></li>
                  </ul>
                </li>
                <li><Link href="/hiredevelopers">Hire Developers</Link></li>
                <li><Link href="/contactus">Contact Us</Link></li>
                <li><Link href="/blogs">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="headerRightBtns"> 
             <a href="#"  className="commonBtn talkExperts">
             <span>1234567899<br/>
             1234567899</span>
             </a> </div>
        </div>
      </div>
    </div>
    </header>
    </>
  )
}

export default Header
