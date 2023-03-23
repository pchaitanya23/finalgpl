import React from 'react'
import Navbar from './Navbar'
import css from './OurStory.module.css'
import {SiLinkedin} from 'react-icons/si'
import {SiTwitter} from 'react-icons/si'
import {SiSkypeforbusiness} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'
import intro from '../assets/intro.jpg'
import featuredMembers1 from '../assets/featured-members-1.jpg'
import featuredMembers2 from '../assets/featured-members-2.jpg'
import featuredMembers3 from '../assets/featured-members-3.jpg'
import featuredMembers4 from '../assets/featured-members-4.jpg'
import member1 from '../assets/member-1.jpg'
import member2 from '../assets/member-2.jpg'
import member3 from '../assets/member-3.jpg'
// import events1 from '../assets/events-2.jpg'
export default function OurStory() {
    return (
        <>
            <Navbar />
            <main id={css.main}>

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id={css.breadcrumbs} class={css.breadcrumbs}>
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Our Story</h2>
                            <ol>
                                <li><a href="/home">Home</a></li>
                                <li>Our Story</li>
                            </ol>
                        </div>

                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Story Intro Section ======= --> */}
                <section id={css.storyIntro} class={css.storyIntro}>
                    <div  class="content">

                        <div class="row">
                            <div class="col-lg-6 order-1 order-lg-2">
                                <img src={intro} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" className={css.chaitu}>
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Story Intro Section --> */}

                {/* <!-- ======= Featured Members Section ======= --> */}
                <section id={css.featuredMembers} className={css.featuredMembers}>
                    <div class="container">

                        <div class="row content" className={css.chaitu}>
                            <div class="col-lg-6">
                                <img src={featuredMembers1} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6 pt-3 pt-lg-0">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="row content" className={css.chaitu}>
                            <div class="col-lg-6 order-1 order-lg-2">
                                <img src={featuredMembers2} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6 order-2 order-lg-1 pt-3 pt-lg-0">
                                <h3>Corporis temporibus maiores provident</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                        <div class="row content" className={css.chaitu}>
                            <div class="col-lg-6">
                                <img src={featuredMembers3} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6 pt-3 pt-lg-0">
                                <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                                <ul>
                                    <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i class="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="row content" className={css.chaitu}>
                            <div class="col-lg-6 order-1 order-lg-2">
                                <img src={featuredMembers4} class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6 order-2 order-lg-1 pt-3 pt-lg-0">
                                <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Featured Members Section --> */}

                {/* <!-- ======= Members Section ======= --> */}
                <section id={css.members} class={css.members}>
                    <div class="container">

                        <div class="row">

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class={css.member}>
                                    <div class={css.memberImg}>
                                        <img src={member1} class="img-fluid" alt=""/>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter"></i></a>
                                                <a href=""><i class="bi bi-facebook"></i></a>
                                                <a href=""><i class="bi bi-instagram"></i></a>
                                                <a href=""><i class="bi bi-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div class={css.memberInfo}>
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <p>Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class={css.member}>
                                    <div class={css.memberImg}>
                                        <img src={member2} class="img-fluid" alt=""/>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter"></i></a>
                                                <a href=""><i class="bi bi-facebook"></i></a>
                                                <a href=""><i class="bi bi-instagram"></i></a>
                                                <a href=""><i class="bi bi-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div class={css.memberInfo}>
                                        <h4>Niall Katz</h4>
                                        <span>Marketing</span>
                                        <p>Aut ex esse explicabo quia harum ea accusamus excepturi. Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class={css.member}>
                                    <div class={css.memberImg}>
                                        <img src={member3} class="img-fluid" alt=""/>
                                            <div class="social">
                                                <a href=""><i class="bi bi-twitter"></i></a>
                                                <a href=""><i class="bi bi-facebook"></i></a>
                                                <a href=""><i class="bi bi-instagram"></i></a>
                                                <a href=""><i class="bi bi-linkedin"></i></a>
                                            </div>
                                    </div>
                                    <div class={css.memberInfo}>
                                        <h4>Demi Lewis</h4>
                                        <span>Financing</span>
                                        <p>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Members Section --> */}

            </main>
            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id={css.footer}>
                <div class="container">
                    <h3>Gultie Premier League</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div class={css.socialLinks}>
                        <a href="#" class="twitter"><SiFacebook/></a>
                        <a href="#" class="facebook"><SiTwitter/></a>
                        <a href="#" class="instagram"><SiInstagram/></a>
                        <a href="#" class="google-plus"><SiSkypeforbusiness/></a>
                        <a href="#" class="linkedin"><SiLinkedin/></a>
                    </div>
                    <div class={css.copyright}>
                        &copy; Copyright <strong><span>Gultie Premier League</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        {/* <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/family-multipurpose-html-bootstrap-template-free/ --> */}
                        Designed by <a href="https://www.instagram.com/gultiecricket_nitr/">Gultie Premier League</a>
                    </div>
                </div>
            </footer>
            {/* <!-- End Footer --> */}

            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        </>
    )
}
