"use client";

import ContactForm from "./components/ContactForm";
import HomeSlider from "./components/HomeSlider";
import React, { useState , useEffect } from 'react';
import OurSolution from "./components/OurSolution";
import OurTeam from "./components/OurTeam";
// import Image from 'next/image';
export default function Home() { 

  
 
  
  return (
    <>
   <HomeSlider /> 
<OurSolution />
    {/* proof of concepts */}
    <section id="proofOfConcept" className="proofOfConcept contentBlockPart">
      <div className="container posRelative">
        <div className="whiteLineBg middleImg noAnimate" data-paroller-factor="-0.1" data-paroller-type="foreground">Whitepapers</div>
        <div className="centerHeading">
          <h2>Blockchain Proof of Concept</h2>
          <p>Using Blockchain to tackle key challenges of Industries</p>
        </div>
        <div className="proofConceptDetails customTab">
          <div className="tabContainer">
            <div className="customTabContent" id="finance">
             
              <div className="colsBlockRow gutter50 cf">
                <div className="colsBlock width50p">
                  <div className="industryTabSlider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/Bey4XXJAqS8" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/2MpUj-Aua48" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/3AGB8uovr9c" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev1 sliderCurvenavPrev"><i className="fa fa-angle-left"></i></div>
                    <div className="swiper-button-next1 sliderCurvenavNext"><i className="fa fa-angle-right"></i></div>
                  </div>
                </div>
                <div className="colsBlock width50p tabContentRight">
                  <div className="rightContentWrap">
                    <h3>The Problem</h3>
                    <p>The current grading system has some loopholes in it. So, we are to shift this current grading system onto blockchain with some necessary advancement on it...</p>
                    <h3>Proposed Solution</h3>
                    <ul className="bulletText roundBulletList">
                      <li>A Student chooses an Educator and a course that he/she wants to enroll in.</li>
                      <li>During the course, the Educator provides assignments that the Student has to complete in order to get the score/grades.</li>
                    </ul>
                  </div>
                  <a href="#">View Complete POC</a> </div>
              </div>
            
            </div>
            <div className="customTabContent" id="education">
             
              <div className="colsBlockRow gutter50 cf">
                <div className="colsBlock width50p">
                  <div className="industryTabSlider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper"> 
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/Bey4XXJAqS8" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/2MpUj-Aua48" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/3AGB8uovr9c" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev1 sliderCurvenavPrev"><i className="fa fa-angle-left"></i></div>
                    <div className="swiper-button-next1 sliderCurvenavNext"><i className="fa fa-angle-right"></i></div>
                  </div>
                </div>
                <div className="colsBlock width50p tabContentRight">
                  <div className="rightContentWrap">
                    <h3>The Problem</h3>
                    <p>The current grading system has some loopholes in it. So, we are to shift this current grading system onto blockchain with some necessary advancement on it...</p>
                    <h3>Proposed Solution</h3>
                    <ul className="bulletText roundBulletList">
                      <li>A Student chooses an Educator and a course that he/she wants to enroll in.</li>
                      <li>During the course, the Educator provides assignments that the Student has to complete in order to get the score/grades.</li>
                    </ul>
                  </div>
                  <a href="#">View Complete POC</a> </div>
              </div>
             
            </div>
            <div className="customTabContent" id="government">
             
              <div className="colsBlockRow gutter50 cf">
                <div className="colsBlock width50p">
                  <div className="industryTabSlider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/Bey4XXJAqS8" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/2MpUj-Aua48" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/3AGB8uovr9c" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev1 sliderCurvenavPrev"><i className="fa fa-angle-left"></i></div>
                    <div className="swiper-button-next1 sliderCurvenavNext"><i className="fa fa-angle-right"></i></div>
                  </div>
                </div>
                <div className="colsBlock width50p tabContentRight">
                  <div className="rightContentWrap">
                    <h3>The Problem</h3>
                    <p>The current grading system has some loopholes in it. So, we are to shift this current grading system onto blockchain with some necessary advancement on it...</p>
                    <h3>Proposed Solution</h3>
                    <ul className="bulletText roundBulletList">
                      <li>A Student chooses an Educator and a course that he/she wants to enroll in.</li>
                      <li>During the course, the Educator provides assignments that the Student has to complete in order to get the score/grades.</li>
                    </ul>
                  </div>
                  <a href="#">View Complete POC</a> </div>
              </div>
             
            </div>
            <div className="customTabContent" id="privateSector">
             
              <div className="colsBlockRow gutter50 cf">
                <div className="colsBlock width50p">
                  <div className="industryTabSlider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/Bey4XXJAqS8" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/2MpUj-Aua48" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/3AGB8uovr9c" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev1 sliderCurvenavPrev"><i className="fa fa-angle-left"></i></div>
                    <div className="swiper-button-next1 sliderCurvenavNext"><i className="fa fa-angle-right"></i></div>
                  </div>
                </div>
                <div className="colsBlock width50p tabContentRight">
                  <div className="rightContentWrap">
                    <h3>The Problem</h3>
                    <p>The current grading system has some loopholes in it. So, we are to shift this current grading system onto blockchain with some necessary advancement on it...</p>
                    <h3>Proposed Solution</h3>
                    <ul className="bulletText roundBulletList">
                      <li>A Student chooses an Educator and a course that he/she wants to enroll in.</li>
                      <li>During the course, the Educator provides assignments that the Student has to complete in order to get the score/grades.</li>
                    </ul>
                  </div>
                  <a href="#">View Complete POC</a> </div>
              </div>
             
            </div>
            <div className="customTabContent" id="healthCare">
             
              <div className="colsBlockRow gutter50 cf">
                <div className="colsBlock width50p">
                  <div className="industryTabSlider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/Bey4XXJAqS8" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/2MpUj-Aua48" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/3AGB8uovr9c" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev1 sliderCurvenavPrev"><i className="fa fa-angle-left"></i></div>
                    <div className="swiper-button-next1 sliderCurvenavNext"><i className="fa fa-angle-right"></i></div>
                  </div>
                </div>
                <div className="colsBlock width50p tabContentRight">
                  <div className="rightContentWrap">
                    <h3>The Problem</h3>
                    <p>The current grading system has some loopholes in it. So, we are to shift this current grading system onto blockchain with some necessary advancement on it...</p>
                    <h3>Proposed Solution</h3>
                    <ul className="bulletText roundBulletList">
                      <li>A Student chooses an Educator and a course that he/she wants to enroll in.</li>
                      <li>During the course, the Educator provides assignments that the Student has to complete in order to get the score/grades.</li>
                    </ul>
                  </div>
                  <a href="#">View Complete POC</a> </div>
              </div>
             
            </div>
            <div className="customTabContent" id="foodBeverages">
            
              <div className="colsBlockRow gutter50 cf">
                <div className="colsBlock width50p">
                  <div className="industryTabSlider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/Bey4XXJAqS8" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt="" />
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/2MpUj-Aua48" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="videoSlideImgWrap"> <img src="/images/tab-video-img.jpg" width="562" height="338" alt=""/>
                            <div className="videoCaption">
                              <h3><a href="">Student Grading System</a></h3>
                              <p>Watch detailed POC on how we changed the Student Grading system with Blockchain technology</p>
                            </div>
                            <a href="#vidoPopup" data-href="https://www.youtube.com/embed/3AGB8uovr9c" className="playVideo popupOpen"><i className="fa fa-play"></i></a> </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev1 sliderCurvenavPrev"><i className="fa fa-angle-left"></i></div>
                    <div className="swiper-button-next1 sliderCurvenavNext"><i className="fa fa-angle-right"></i></div>
                  </div>
                </div>
                <div className="colsBlock width50p tabContentRight">
                  <div className="rightContentWrap">
                    <h3>The Problem</h3>
                    <p>The current grading system has some loopholes in it. So, we are to shift this current grading system onto blockchain with some necessary advancement on it...</p>
                    <h3>Proposed Solution</h3>
                    <ul className="bulletText roundBulletList">
                      <li>A Student chooses an Educator and a course that he/she wants to enroll in.</li>
                      <li>During the course, the Educator provides assignments that the Student has to complete in order to get the score/grades.</li>
                    </ul>
                  </div>
                  <a href="#">View Complete POC</a> </div>
              </div>
            
            </div>
          </div>
          <ul className="tabNavigation">
            <li><a href="#finance"><span className="sprite finance tabIcons">Finance</span> <span className="tabText">Finance</span></a></li>
            <li><a href="#education"><span className="sprite eduction tabIcons">Education</span> <span className="tabText">Education</span></a></li>
            <li><a href="#government"><span className="sprite government tabIcons">Government</span> <span className="tabText">Government</span></a></li>
            <li><a href="#privateSector"><span className="sprite privateSector tabIcons">Private Sector</span> <span className="tabText">Private Sector</span></a></li>
            <li><a href="#healthCare"><span className="sprite healthCare tabIcons">Healthcare</span> <span className="tabText">Healthcare</span></a></li>
            <li><a href="#foodBeverages"><span className="sprite foodBeverages tabIcons">Food & Beverages</span> <span className="tabText">Food & Beverages</span></a></li>
          </ul>
        </div>
      </div>
    </section>
    <section id="pcProtocol" className="pcProtocol contentBlockPart">
      <div className="container posRelative">
        <div className="bigBlueBg leftImg noAnimate" data-paroller-factor="-0.1" data-paroller-type="foreground">PC Protocol</div>
        <div className="bigBlueBg rightImg noAnimate" data-paroller-factor="0.1" data-paroller-type="foreground">PC Protocol</div>
        <div className="centerHeading">
          <h2>PC Protocol</h2>
          <p>Our Custom Private Network Protocol</p>
        </div>
       
        <div className="colsBlockRow gutter50 cf">
          <div className="colsBlock width50p center alignRight">
            <div className="pcProtocolImgWrap"> <span className="pcPorotoColBox box1" data-paroller-factor="-0.01" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box2" data-paroller-factor="-0.01" data-paroller-type="foreground">PC Protocol</span> <span className="pcPorotoColBox box3" data-paroller-factor="0.02" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box4" data-paroller-factor="-0.01" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box5" data-paroller-factor="0.01" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box6" data-paroller-factor="0.02" data-paroller-type="foreground">PC Protocol</span> </div>
            <div className="originalImg"><img src="/images/pc-protocol-img.png" width="414"  height="285" alt="PC Protocol" /></div>
          </div>
          <div className="colsBlock width50p">
            <h3>How it Works?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>
        </div>
      </div>
    </section>
   <OurTeam />
    {/* News Blogs */}
    <section id="newsAndBlog" className="newsAndBlog contentBlockPart">
      <div className="container">
        <div className="centerHeading">
          <h2>News &amp; Blog</h2>
          <p>Trending topics from Blockchain Technology</p>
        </div>
      
        <div className="colsBlockRow cf posRelative">
          <div className="colsBlock width50p">
            <div className="homeNews"> <img src="/images/dubai-internation-blockchain-summit.jpg" width="607" height="602" alt="World’s Largest Blockchain Festival" title="World’s Largest Blockchain Festival" />
              <div className="homeNewsDetails">
                <h3><a href="#">World’s Largest Blockchain Festival</a></h3>
                <p className="homeNewsText">Proof of Concept generally includes a solution document that showcases the system architecture </p>
                <p className="blogCalendarIcn">8 January 2018</p>
              </div>
            </div>
          </div>
          <div className="colsBlock width50p">
            <div className="homeBlogListWrap">
              <ul className="homeBlogList">
                <li className="cf">
                  <div className="homeBlgImg"><img src="/images/blog-thumb1.jpg" width="175" height="175" alt="" /></div>
                  <div className="homeBlgDetails">
                    <h3><a href="#">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </a></h3>
                    <p>Proof of Concept generally includes a solution document that showcases the system architecture </p>
                    <p className="blogCalendarIcn">Thursday, 15-9-2018</p>
                  </div>
                </li>
                <li className="cf">
                  <div className="homeBlgImg"><img src="/images/blog-thumb2.jpg" width="175" height="175" alt="" /></div>
                  <div className="homeBlgDetails">
                    <h3><a href="#">It is a long established fact that a reader will be distracted by the readable content of a page</a></h3>
                    <p>Proof of Concept generally includes a solution document that showcases the system architecture to be built on blockchain framework. </p>
                    <p className="blogCalendarIcn">Thursday, 14-9-2018</p>
                  </div>
                </li>
                <li className="cf">
                  <div className="homeBlgImg"><img src="/images/blog-thumb3.jpg" width="175" height="175" alt="" /></div>
                  <div className="homeBlgDetails">
                    <h3><a href="#">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </a></h3>
                    <p>Proof of Concept generally includes a solution document that showcases the system architecture </p>
                    <p className="blogCalendarIcn">Thursday, 13-9-2018</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
        <div className="centerBtn"> <a href="#" className="commonBtn">View All</a> </div>
      </div>
    </section>
   
    <ContactForm />


 


    </>
  );
}
