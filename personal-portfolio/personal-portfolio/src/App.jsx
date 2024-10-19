import React, { useState } from 'react';

function App(){
  return (
    <>
      {/* Header Area wrapper Starts */}
      <header id="header-wrap">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
                <span className="icon-menu" />
                <span className="icon-menu" />
                <span className="icon-menu" />
              </button>
              <a href="index.html" className="navbar-brand">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolios">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Menu Start */}
          <ul className="onepage-nev mobile-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Skills</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* Mobile Menu End */}
        </nav>
        {/* Navbar End */}
        {/* Hero Area Start */}
        <div id="hero-area" className="hero-area-bg">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <div className="contents">
                  <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">
                    HI, THIS IS
                  </h5>
                  <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">
                    Shaina 
                  </h2>
                  <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                    ASPIRING FRONT-END WEB DEVELOPER
                  </p>
                  <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/shainakarillyn.pagarigan" target="_blank">
                        <i className="icon-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="https://www.linkedin.com/in/shaina-pagarigan-12627a25b/" target="_blank">
                        <i className="icon-social-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
      </header>
      {/* Header Area wrapper End */}
      {/* About Section Start */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                <img
                  className="img-fluid"
                  src="assets/img/about/20240614_122746.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="profile-wrapper wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <h3>Hey There!</h3>
                <p>
                  I'm Shaina, a 3rd-year student at La Verdad Christian College and
                  an aspiring front-end web developer with a knack for creating cool
                  web projects. As I've progressed through my classes, I've grown to
                  love working with React and other modern tools to bring ideas to life,
                  especially through hands-on practice. 
                  <br />
                  <br />
                  This portfolio is my little corner of the web where you can check out
                  my previous projects, see what I’m learning, and maybe get to know me a bit better!
                </p>
                <div className="about-profile">
                  <ul className="admin-profile">
                    <li>
                      <span className="pro-title"> Name </span>{" "}
                      <span className="pro-detail">Shaina Karillyn G. Pagarigan</span>
                    </li>
                    <li>
                      <span className="pro-title"> Age </span>{" "}
                      <span className="pro-detail">20 Years Old</span>
                    </li>
                    <li>
                      <span className="pro-title"> Experience </span>{" "}
                      <span className="pro-detail">None</span>
                    </li>
                    <li>
                      <span className="pro-title"> Country </span>{" "}
                      <span className="pro-detail">Philippines</span>
                    </li>
                    <li>
                      <span className="pro-title"> Location </span>{" "}
                      <span className="pro-detail">Pampanga</span>
                    </li>
                    <li>
                      <span className="pro-title"> -mail </span>{" "}
                      <span className="pro-detail">shaina.pagarigan31@gmail.com</span>
                    </li>
                    <li>
                      <span className="pro-title"> Phone </span>{" "}
                      <span className="pro-detail">+ (63) 963 4533 367</span>
                    </li>
                  </ul>
                </div>
                <a href="assets/MyResume.pdf" download="My_Resume.pdf" className="btn btn-common">
                  <i className="icon-paper-clip" /> Download Resume
                </a>
                <a href="#contact" className="btn btn-danger">
                  <i className="icon-speech" /> Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Services Section Start */}
      <section id="services" className="services section-padding">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
          Skills
        </h2>
        <div className="container">
          <div className="row">
            {/* Services item */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
              <div className="progress-circle" data-percentage="90">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="45" stroke="#e6e6e6" strokeWidth="10" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#f39c12"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="28"
                strokeLinecap="round"
              />
            </svg>
            </div>
                <div className="services-content">
                  <h3>
                    <a href="#services">90%</a>
                  </h3>
                  <p>
                    HTML
                  </p>
                </div>
              </div>
            </div>
            {/* Services item */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="0.4s">
              <div className="progress-circle" data-percentage="90">
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="45" stroke="#e6e6e6" strokeWidth="10" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#3498db"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="28"
                strokeLinecap="round"
              />
            </svg>
            </div>
                <div className="services-content">
                  <h3>
                    <a href="#services">90%</a>
                  </h3>
                  <p>
                    CSS
                  </p>
                </div>
              </div>
            </div>
            {/* Services item */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="0.5s">
              <div className="progress-circle" data-percentage="75">
            <svg width="100" height="100">
            <circle cx="50" cy="50" r="45" stroke="#e6e6e6" strokeWidth="10" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#f1c40f"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="71"
                strokeLinecap="round"
              />
            </svg>
            </div>
                <div className="services-content">
                  <h3>
                    <a href="#services">75%</a>
                  </h3>
                  <p>
                    JAVASCRIPT
                  </p>
                </div>
              </div>
            </div>
            {/* Services item */}
            <div className="col-md-6 col-lg-3 col-xs-12">
              <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
              <div className="progress-circle" data-percentage="75">
            <svg width="100" height="100">
            <circle cx="50" cy="50" r="45" stroke="#e6e6e6" strokeWidth="10" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#61dafb"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset="71"
                strokeLinecap="round"
              />
            </svg>
            </div>
                <div className="services-content">
                  <h3>
                    <a href="#services">75%</a>
                  </h3>
                  <p>
                    REACT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End */}
      {/* Resume Section Start */}
      <div id="resume" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="education wow fadeInRight" data-wow-delay="0.3s">
                <ul className="timeline">
                  <li>
                    <i className="icon-graduation" />
                    <h2 className="timelin-title">Education</h2>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">Dominican School of Mexico Inc.</h3>
                      <span>2010 - 2016</span>
                      <p className="line-text">
                        Maintained consistent honors throughout my elementary education,
                        reflecting on my desire to learn new things.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">
                        Junior High School - San Isidro High School
                      </h3>
                      <span>2016 - 2020</span>
                      <p className="line-text">
                        Maintained consistent honors throughout high school.
                        My four years there helped me gain clarity about my aspirations,
                        which influenced the strand I pursued in Senior High.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">
                        Senior High School - Holy Cross College 
                      </h3>
                      <span>2020 - 2022</span>
                      <p className="line-text">
                        Pursued the Information, Communication, and Technology
                        strand under TVL, maintaining consistent honor status from
                        the first semester of 11th grade through to the final semester of 12th grade.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="education wow fadeInRight" data-wow-delay="0.6s">
                <ul className="timeline">
                  <li>
                    <i className="icon-graduation" />
                    <h2 className="timelin-title">Education</h2>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">La Verdad Christian College - BS Information Systems 1st Year</h3>
                      <span>2022 - 2023</span>
                      <p className="line-text">
                        Completed my first year of bachelor's degree studies
                        as a consistent President's Lister.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">La Verdad Christian College - BS Information Systems 2nd Year</h3>
                      <span>2023 - 2024</span>
                      <p className="line-text">
                        Completed my second year of bachelor's degree studies
                        as a consistent President's Lister.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content-text">
                      <h3 className="line-title">La Verdad Christian College - BS Information Systems 3rd Year</h3>
                      <span>2024 - Present</span>
                      <p className="line-text">
                        Currently in the third year of my bachelor's degree studies,
                        still striving to meet subject requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resume Section End */}
      {/* Portfolio Section */}
      <section id="portfolios" className="section-padding">
        {/* Container Starts */}
        <div className="container">
          <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
            What I Have Been Up To
          </h2>
          <div className="row">
            <div className="col-md-12">
              {/* Portfolio Controller/Buttons */}
              <div className="controls text-center">
                <a className="filter active btn btn-common" data-filter="all">
                  My Previous Projects
                </a>
              </div>
              {/* Portfolio Controller/Buttons Ends*/}
            </div>
            {/* Portfolio Recent Projects */}
            <div
              id="portfolio"
              className="row wow fadeInDown"
              data-wow-delay="0.4s"
            >
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/gallery/p1.jpg" alt="" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="assets/img/gallery/p1.jpg"
                        >
                          <i className="icon-eye" />
                        </a>
                        <a className="link" href="https://mypersonalprofile-shaina.netlify.app/" target="_blank">
                          <i className="icon-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                      This project was our first semester final requirement for our 
                      Web Application Development course
                    </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/gallery/p2.jpg" alt="" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="assets/img/gallery/p2.jpg"
                        >
                          <i className="icon-eye" />
                        </a>
                        <a className="link" href="https://kaleidoscopic-tapioca-2e5959.netlify.app/" target="_blank">
                          <i className="icon-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                      This project was our first semester midterm requirement for our 
                      Responsive Web Design course
                    </p>
                </div>
              </div>    

              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix projects print">
                <div className="portfolio-item">
                  <div className="shot-item">
                    <img src="assets/img/gallery/p3.jpg" alt="" />
                    <div className="overlay">
                      <div className="icons">
                        <a
                          className="lightbox preview"
                          href="assets/img/gallery/p3.jpg"
                        >
                          <i className="icon-eye" />
                        </a>
                        <a className="link" href="#" target="_blank">
                          <i className="icon-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                      This project was our first semester midterm requirement for our 
                      Application Development and Emerging Technologies course
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container Ends */}
      </section>
      {/* Portfolio Section Ends */}
      
      {/* Contact Section Start */}
      <section id="contact" className="section-padding">
        <div className="contact-form">
          <div className="container">
            <div
              className="row contact-form-area wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="contact-block">
            <h2>Contact Form</h2>
            <form id="contactForm" noValidate="true">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required=""
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      className="form-control"
                      name="email"
                      required=""
                      data-error="Please enter your email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      id="msg_subject"
                      className="form-control"
                      required=""
                      data-error="Please enter your subject"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message"
                      rows={5}
                      data-error="Write your message"
                      required=""
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="submit-button">
                    <button
                      className="btn btn-common disabled"
                      id="submit"
                      type="submit"
                      style={{ pointerEvents: "all", cursor: "pointer" }}
                    >
                      Send Message
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div
            className="footer-right-area wow fadeIn animated"
            style={{ visibility: "visible" }}
          ></div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="footer-right-area wow fadeIn">
                <h2>Contact Address</h2>
      <div className="footer-right-contact">
        <div className="single-contact">
          <div className="contact-icon">
            <i className="fa fa-map-marker" />
          </div>
          <p>Santa Ana, Pampanga</p>
        </div>
        <div className="single-contact">
          <div className="contact-icon">
            <i className="fa fa-envelope" />
          </div>
          <p>
            <a href="mailto:shaina.pagarigan31@gmail.com">shaina.pagarigan31@gmail.com</a>
          </p>
          <p>
            <a href="mailto:shainakarillynpagarigan@student.laverdad.edu.ph">shainakarillynpagarigan@student.laverdad.edu.ph</a>
          </p>
        </div>
        <div className="single-contact">
          <div className="contact-icon">
            <i className="fa fa-phone" />
          </div>
          <p>
            <a href="#">
              + (63) 963 4533 367
            </a>
          </p>
          <p>
            <a href="#">
              + (63) 956 6417 833
            </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
      {/* Footer Section Start */}
      <footer className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="footer-text text-center wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <ul className="social-icon">
                  <li>
                    <a className="facebook" href="https://www.facebook.com/shainakarillyn.pagarigan" target="_blank">
                      <i className="icon-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/shaina-pagarigan-12627a25b/" target="_blank">
                      <i className="icon-social-linkedin" />
                    </a>
                  </li>
                </ul>
                <p>Copyright © 2024 MeetMe All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
      {/* Go to Top Link */}
      <a href="#" className="back-to-top">
        <i className="icon-arrow-up" />
      </a>
  </>
  
  );
}

export default App;