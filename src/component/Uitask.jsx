import "./Uitask.css";
import Logo from "../img/logo-on-black.png";

import React, { useState } from "react";

const Uitask = () => {
  const [Mobile, setMobile] = useState(true);
  const [cursorX,setCursorX] = useState();
  const [cursorY,setCursorY] = useState();
window.addEventListener('mousemove',(e)=>{
  setCursorX(e.pageX);
  setCursorY(e.pageY);

});

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">                                                    
            <img src={Logo} alt="" />
          </div>

          <p className="tagline">
            Think <span className="beyong">Beyond</span> Digital
          </p>
          <div className="aboutBtn">
            About Us
            <span className="material-symbols-outlined"> expand_more</span>
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "link f_flex uppercase" : "nav-links-mobile"}
              //   onClick={() => setMobile(true)}
            >
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#leadership">Leadership</a>
              </li>
              <li>
                <a href="#career">Career</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <div className="cursor"
              style={{
                left:cursorX + 'px',
                top:cursorY + 'px',

              }}
              ></div>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-bars open"></i>
              ) : (
                <i className="fas fa-times close home-btn"></i>
              )}
            </button>
          </div>
        </div>

      </header>
      <div className="cursor"
              style={{
                left:cursorX + 'px',
                top:cursorY + 'px',

              }}
              ></div>
{/* About section startr */}
      {/* <div className="container_2">
        <div className="about">
          <h2>About</h2>
        </div>
        <div className="content">
          <p>
            Most organizations acknowledge that they need to change and unlock
            their potential in order to stay competitive. However, changing an
            organization also requires an understanding of where the puck is
            going in your industry and taking purposeful actions to get there.
            Transformation is not always about completely re-imagining your
            value proposition or your business model. Rather, it is about
            transforming your core operations using digital tools; and capturing
            new opportunities enabled by digital. Our team enables organizations
            to identify their potential for transformation. We partner with our
            clients to define a roadmap to develop and deliver specific
            initiatives to enable reinvent their products, customer experiences
            and business models to create new value, enable differentiation,
            improve efficiencies and increase revenue with their transformation.
            We partner with a robust ecosystem of specialized firms to deliver
            the very best capabilities to our clients in every aspect of the
            transformation.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Uitask;
