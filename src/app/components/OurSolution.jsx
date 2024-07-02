"use client"
import React from 'react'

const OurSolution = () => {
  return (
   <>
   {/* our solution */}
<section id="ourSolutions" className="ourSolutions contentBlockPart">
      <div className="greenLingBg greenLightLeft"></div>
      <div className="greenLingBg greenLightRight noAnimate" data-paroller-factor="-0.2" data-paroller-type="foreground"></div>
      <div className="container">
        <div className="centerHeading">
          <h2>Our Solutions</h2>
          <p>We help you with the following</p>
        </div>
        <ul className="solutionList">
          <li><a href="#"><span className="sprite solutionIcons blockChainDelp">Blockchain Development</span> <span>Blockchain Development</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons nodehosting">Node Hosting</span> <span>Node Hosting</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons smartContracts">Smart Contracts</span> <span>Smart Contracts</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons icoDevelopment">ICO Development</span> <span>ICO Development</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons walletService">Wallet Service</span> <span>Wallet Service</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons miningPool">Mining Pool</span> <span>Mining Pool</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons exchangeSoftware">Exchange Software</span> <span>Exchange Software</span></a></li>
        </ul>
      </div>
    </section>
   </>
  )
}

export default OurSolution
