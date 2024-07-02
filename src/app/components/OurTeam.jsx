import React from 'react'
import Image from 'next/image';
const OurTeam = () => {
  return (
    <>
     {/* Our Team */}
     <section id="ourTeam" className="ourTeam contentBlockPart whiteText">
      <div className="container">
        <div className="centerHeading">
          <h2>Our Team</h2>
          <p>Helping clients solve Business Problems with Blockchain</p>
        </div>
        <div className="teamSliderWrap">
          <div className="teamSlider">
            <div className="swiper-container swiper-no-swiping">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="teamSlideBox">
                    <div className="teamImgWrap">
                      <div className="teamImgbox"> <img src="/images/team-member1.jpg" width="185" height="185" alt="Jenard Smith, CEO" title="Jenard Smith, CEO" /></div>
                      <div className="socialDetailsTeam"><a href="#" className="linkedIn"><i className="fa fa-linkedin"></i></a><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></div>
                    </div>
                    <div className="teamMemberDetial">
                      <h3>Jenard Smith</h3>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="teamSlideBox">
                    <div className="teamImgWrap">
                      <div className="teamImgbox"> <img src="/images/team-member2.jpg" width="185" height="185" alt="Jhohn Doe, Chief Technology Director" title="Jhohn Doe, Chief Technology Director" /></div>
                      <div className="socialDetailsTeam"><a href="#" className="linkedIn"><i className="fa fa-linkedin"></i></a><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></div>
                    </div>
                    <div className="teamMemberDetial">
                      <h3>Jhohn Doe</h3>
                      <p>Chief Technology Director</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="teamSlideBox">
                    <div className="teamImgWrap">
                      <div className="teamImgbox"> <img src="/images/team-member3.jpg" width="185" height="185" alt="Jhohn Doe, Chief Protocol Architect" title="Jhohn Doe, Chief Protocol Architect" /></div>
                      <div className="socialDetailsTeam"><a href="#" className="linkedIn"><i className="fa fa-linkedin"></i></a><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></div>
                    </div>
                    <div className="teamMemberDetial">
                      <h3>Jhohn Doe</h3>
                      <p>Chief Protocol Architect</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="teamSlideBox">
                    <div className="teamImgWrap">
                      <div className="teamImgbox"> <img src="/images/team-member4.jpg" width="185" height="185" alt="Jhohn Doe, Chief Product Officer" title="Jhohn Doe, Chief Product Officer" /></div>
                      <div className="socialDetailsTeam"><a href="#" className="linkedIn"><i className="fa fa-linkedin"></i></a><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></div>
                    </div>
                    <div className="teamMemberDetial">
                      <h3>Jhohn Doe</h3>
                      <p>Chief Product Officer</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="teamSlideBox">
                    <div className="teamImgWrap">
                      <div className="teamImgbox"> <img src="/images/team-member5.jpg" width="185" height="185" alt="Jhohn Doe, Chief Technology Director" title="Jhohn Doe, Chief Technology Director" /></div>
                      <div className="socialDetailsTeam"><a href="#" className="linkedIn"><i className="fa fa-linkedin"></i></a><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></div>
                    </div>
                    <div className="teamMemberDetial">
                      <h3>Jhohn Doe</h3>
                      <p>Chief Technology Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OurTeam
