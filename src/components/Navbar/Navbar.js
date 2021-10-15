import React, { useEffect, useState, useHistory } from 'react';
import WOW from "wowjs"
import jQuery from 'jquery';
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { isAuth, removeCookie, removeLocalStorage } from './../../helpers/auth';
import axios from 'axios'

const Navbar = (history) => {



    (function ($) {
        "use strict";

        // Initiate the wowjs
        window.wow = new WOW.WOW({
            live: false
        });

        window.wow.init();

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });


        // Sticky Navbar
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('.navbar').addClass('nav-sticky');
            } else {
                $('.navbar').removeClass('nav-sticky');
            }
        });


    })(jQuery);

    const [isconnected, setIsConnected] = useState('Inactive');
    const [idConnectedUser, setidConnectedUser] = useState();
    const [colorIsConnected, setcolorIsConnected] = useState('bg-danger')
    const [logaout, setLogaout] = useState('Login');

    useEffect(() => {
 

        if(isAuth()){

            setLogaout('Sign Out'); 
            setidConnectedUser(isAuth()._id)
        }else{
            setLogaout('Login ') 
        }
      


    }, [isAuth,setLogaout,setidConnectedUser]);


    const handelLogaout = () => {

        console.log(logaout)
        console.log(idConnectedUser)

        if (logaout === 'Sign Out') {

            removeLocalStorage('user');
            removeCookie('token');

            axios.patch('http://localhost:5000/api/agencyCollection/updateIsConnected/' + idConnectedUser, {

                isconnected: isconnected,
                colorIsConnected: colorIsConnected

            }).then((res) => {

                console.log(res);

               // localStorage.setItem('isConnected', isconnected);
               // localStorage.setItem('colorIsConnected', colorIsConnected);
            }).catch((err) => console.log(err))

        }

        

    }

    return (

        <>
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <i className="far fa-clock"></i>
                                    <h2>8:00 - 9:00</h2>
                                </div>
                                <div className="text">
                                    <i className="fa fa-phone-alt"></i>
                                    <h2>+216 26 579 007</h2>
                                    <p> Appointment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
        <img src='https://res.cloudinary.com/orange112/image/upload/v1631024979/test/locwunjyrmqttq13ldu3.png' 
        style={{width:'120px',marginLeft:'-9%'}}/>

                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">



                            <NavLink exact to='/' className="nav-item nav-link active">Home


                            </NavLink>
                            <NavLink exact to='/about' className="nav-item nav-link">About


                            </NavLink>
                            <NavLink exact to='/service' className="nav-item nav-link" >Service


                            </NavLink>

                            <NavLink exact to='/login' className="nav-item nav-link "
                                onClick={handelLogaout}>{logaout}


                            </NavLink>

                            <NavLink exact to='/contact' className="nav-item nav-link">Contact


                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>



        </>
    );
};

export default Navbar;