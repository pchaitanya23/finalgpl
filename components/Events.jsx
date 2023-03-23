import React from 'react'
import Navbar from './Navbar'
import events1 from '../assets/events-1.jpg'
import events2 from '../assets/events-2.jpg'
import css from './Events.module.css'
import {SiLinkedin} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'
import {SiSkypeforbusiness} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'
export default function Events() {
    return (
        <>
            <Navbar />
            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" class={css.breadcrumbs}>
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Events</h2>
                            <ol>
                                <li><a href="home">Home</a></li>
                                <li>Events</li>
                            </ol>
                        </div>

                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Event List Section ======= --> */}
                <section id="event-list" class={css.eventList}>
                    <div class="container">

                        <div class="row">
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class={css.card}>
                                    <div class={css.cardImg}>
                                        <img src={events1} alt="..."/>
                                    </div>
                                    <div class={css.cardBody}>
                                        <h5 class={css.cardTitle}>Lara's 1th Birthday</h5>
                                        <p class="fst-italic text-center">Sunday, September 26th at 7:00 pm</p>
                                        <p class={css.cardText}>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class={css.card}>
                                    <div class={css.cardImg}>
                                        <img src={events2} alt="..."/>
                                    </div>
                                    <div class={css.cardBody}>
                                        <h5 class={css.cardTitle}>James 6th Birthday</h5>
                                        <p class="fst-italic text-center">Sunday, November 15th at 7:00 pm</p>
                                        <p class={css.cardText}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Event List Section --> */}

                {/* </main><!-- End #main --> */}

                {/* <!-- ======= Footer ======= --> */}
                <footer id={css.footer}>
                    <div class="container">
                        <h3>Gultie Premier League</h3>
                        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                        <div class={css.socialLinks}>
                            <a href="#" class="twitter"><SiTwitter/></a>
                            <a href="#" class="facebook"><SiFacebook/></a>
                            <a href="https://www.instagram.com/gultiecricket_nitr/" class="instagram"><SiInstagram/></a>
                            <a href="#" class="google-plus"><SiSkypeforbusiness/></a>
                            <a href="#" class="linkedin"><SiLinkedin/></a>
                        </div>
                        <div class={css.copyright}>
                            &copy; Copyright <strong><span>Gultie Premier League</span></strong>. All Rights Reserved
                        </div>
                        <div class={css.credits}>
                            {/* <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/family-multipurpose-html-bootstrap-template-free/ --> */}
                            Designed by <a href="https://www.instagram.com/gultiecricket_nitr/">Gultie Premier League</a>
                        </div>
                    </div>
                </footer>
                {/* <!-- End Footer --> */}
            </main>
        </>
    )
}
