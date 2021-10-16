import React, { useState, useEffect } from 'react';
import Footer from './../Footer/Footer';
import { isAuth } from './../../helpers/auth';
import axios from 'axios'
import Main from './Voice';
import './Home.css'
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Home = ({ history }) => {


    const [isconnected, setIsConnected] = useState('Active');
    const [colorIsConnected, setcolorIsConnected] = useState('bg-green')


    useEffect(() => {



        const speech = new SpeechSynthesisUtterance();

        speech.text =
            "welcome to Vallean";
        window.speechSynthesis.speak(speech);


        console.log(isAuth());

        if (isAuth()) {

            axios.patch('https://vast-waters-25529.herokuapp.com/api/agencyCollection/updateIsConnected/' + isAuth()._id, {

                isconnected: isconnected,
                colorIsConnected: colorIsConnected

            }).then((res) => {

                console.log(res);


            }).catch((err) => console.log(err))

        }


    }, [isAuth()])




    return (

        <>

            <div className="banner">

                <img className="ayari" src="fog.png" />




                <video src='https://res.cloudinary.com/orange112/video/upload/v1630664643/test/Final_aif2gi.mp4' autoPlay muted loop>


                </video>


                <h2 className="c" >Chasseur de plastique </h2>

                <section>
                    <div class="scrolldown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>

                <button className='b' onClick={() => {
                    !isAuth() ? history.push('/Login') :
                        NotificationManager.info(`${isAuth().name} is authenticated you can reserved now`)
                }} >Reservation</button>

                <NotificationContainer />


            </div>

            <div className="about wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: '-6%' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="https://res.cloudinary.com/orange112/image/upload/v1633876993/test/vallean_oievoj.png"
                                    alt="Image" style={{ width: '800px', marginLeft: "-50%", marginTop: '30%' }} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <h2>Welcome to Vallean</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                    Vallean is an autonomous system that collects waste from water bodies and uses
                                    an Artificial Intelligence model to separate plastic from non plastaic and put
                                    it in different storage units.
                                    It's an innovative solution to clear and filter waste from tunisian rivers,
                                    it uses modern technologies to to achieve the best results and solve both
                                    water pollution and plastic collection shortage in tunisia to recycle it.
                                </p>
                                <p>
                                </p>
                                <button className='k' >Learn more</button>    </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="discount wow zoomIn" data-wow-delay="0.1s" style={{ marginTop: "-10%" }}>
                <div className="container">
                    <div className="section-header text-center">
                        <p>Awesome Discount</p>
                        <h2>Get <span>30%</span> Discount for first-time buyers</h2>
                    </div>
                    <div className="container discount-text">
                        <p>
                            Because we are keen on ridding Tunisia of water pollution we are giving you the best offer!
                            Choose today where you want to rent our machines and get a discount of 30% on the first month's rent!
                        </p>
                    </div>
                </div>
            </div>




            <div className="service">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>What we do</p>
                        <h2>Our Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                            <div className="service-item">

                                <img src='Machine setting.png'
                                    style={{ width: '70px' }} /> <br /> <br />

                                <h3>Machine setting</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                                    Curabitur facilisis ornare velit non
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item active">
                                <img src='Waste filtring.png'
                                    style={{ width: '70px' }} /> <br /> <br />
                                <h3>Waste filtring</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <img src='Machine maintenance.png'
                                    style={{ width: '70px' }} /> <br /> <br />
                                <h3>Machine maintenance</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="service-item">
                                <img src='Machine maintenance.png'
                                    style={{ width: '70px' }} /> <br /> <br />
                                <h3>Real time servey </h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>



                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="service-item">
                                <img src='Machine maintenance.png'
                                    style={{ width: '70px' }} /> <br /> <br />
                                <h3>Instant notification </h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
                            <div className="service-item">
                                <img src='Transporting the collected waste.png'
                                    style={{ width: '150px' }} /> <br /> <br />
                                <h3>Transporting the collected waste</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className="price">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>Vallean Package</p>
                        <h2>Rent Vallean Machines</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                            <div className="price-item">
                                <div className="price-header">
                                    <div className="price-title">
                                        <h2>Basic</h2>
                                    </div>
                                    <div className="price-prices">
                                        <h2><small>$</small>49<span>/ mo</span></h2>
                                    </div>
                                </div>
                                <div className="price-body">
                                    <div className="price-description">
                                        <ul>
                                            <li>One machine</li>
                                            <li>Takes all the waste</li>
                                            <li>Free repairing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="price-footer">
                                    <div className="price-action">
                                        <button className='l' >Join now</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="price-item featured-item">
                                <div className="price-header">
                                    <div className="price-status">
                                        <span>Popular</span>
                                    </div>
                                    <div class="price-title">
                                        <h2>Standard</h2>
                                    </div>
                                    <div class="price-prices">
                                        <h2><small>$</small>99<span>/ mo</span></h2>
                                    </div>
                                </div>
                                <div className="price-body">
                                    <div className="price-description">
                                        <ul>
                                            <li>Two machines</li>
                                            <li>chooses which type of waste </li>
                                            <li>Free repairing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price-footer">
                                    <div className="price-action">
                                        <button className='l' >Join now</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="price-item">
                                <div className="price-header">
                                    <div className="price-title">
                                        <h2>Premium</h2>
                                    </div>
                                    <div className="price-prices">
                                        <h2><small>$</small>149<span>/ mo</span></h2>
                                    </div>
                                </div>
                                <div className="price-body">
                                    <div className="price-description">
                                        <ul>
                                            <li>Multiple machines</li>
                                            <li>Chooses which type of waste </li>
                                            <li>Free repairing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price-footer">
                                    <div className="price-action">
                                        <button className='l' >Join now</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="team">
                <div class="container">
                    <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">

                        <h2>VALEAN TEAM</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="https://res.cloudinary.com/orange112/image/upload/v1631710372/test/67305410_2048919532084638_4215733249697120256_n_s2igis.jpg" alt="Image" />
                                    <div class="team-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-text">
                                    <h2>Ayari Youssef</h2>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="https://res.cloudinary.com/orange112/image/upload/v1633074021/test/s_o4iqbt.jpg" alt="Image" />
                                    <div class="team-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-text">
                                    <h2>Sahli Zeineb</h2>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="https://res.cloudinary.com/orange112/image/upload/v1633073990/test/m_zpfzbd.jpg" alt="Image" />
                                    <div class="team-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-text">
                                    <h2>Kaaniche Marouene</h2>
                                    <p>Embedded systems engineer </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="https://res.cloudinary.com/orange112/image/upload/v1633073991/test/q_aszbwp.jpg" alt="Image" />
                                    <div class="team-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-text">
                                    <h2>Boutheina diari</h2>
                                    <p>Data scientist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />


            <Main />
        </>
    );
};

export default Home;
