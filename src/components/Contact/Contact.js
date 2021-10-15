import React from 'react';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contact</h2>
                        </div>
                        <div class="col-12">
                            <a href="">Home</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>Get In Touch</p>
                        <h2>For Any Query</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.2s">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="contact-text">
                                        <h2>Location</h2>
                                        <p>Lac 1 orange developer center</p>
                                    </div>
                                </div>
                                <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.4s">
                                    <i className="fa fa-phone-alt"></i>
                                    <div className="contact-text">
                                        <h2>Phone</h2>
                                        <p>+26 579 007</p>
                                    </div>
                                </div>
                                <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.6s">
                                    <i className="far fa-envelope"></i>
                                    <div className="contact-text">
                                        <h2>Email</h2>
                                        <p>Valean@orange.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" class="form-control" id="name" 
                                        placeholder="Your Name" required="required" 
                                        data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" class="form-control" id="email" 
                                        placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                    <button className='m' style={{marginLeft:'37%',width:'160px',height:'40px'}} >Send Message</button>    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br/>

           

          <Footer />


        </>


    );
};

export default Contact;