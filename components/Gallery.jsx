import React from 'react'
import Navbar from './Navbar.jsx'
import css from './Gallery.module.css'
import { SiLinkedin } from 'react-icons/si'
import { SiTwitter } from 'react-icons/si'
import { SiSkypeforbusiness } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import cricket from '../assets/gpl2k23capt.jpeg'

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <main id="main">
        <div class={css.gallery}>
          <div class={css.row}>
            <div class={css.text}>
              <h1>
                Gultie Premier League
              </h1>
              <p>Gultie Premiere leauge AKA GPL is a league that has been happening since 2013.
                GPL is conducted among the students of both telugu states. This typically happens among 4 teams.
                The live score of GPL is streamed through "Website link". To make it more enthusiastic and more engaging for the GPL followers betting is also available in the website through coins.
                Four striking captains who are skilled in the fields, well-versed, expereinced, everyone of them is determined to atke the title 'Champioship' for themselves and prove their hardwork and to take their team towards victory.
                They practice with them they teach them how to face various events during match. They strive for this title 'Championship' working hard, making themslves stronger. Everything seems clear up until this point. How they practice matches, training regiment. But during match things will start getting messier because everyone is taught by their seniors and seniors know the mistakes of thier juniors not just their team but with everyone.
              </p>
            </div>
            <div class={css.photo}>
              <img src={cricket} alt="alt-text" />
            </div>
          </div>

          <div class={css.row}>
            <div class={css.text}>
              <h1>
                Gultie Premier League
              </h1>
              <p>Gultie Premiere leauge AKA GPL is a league that has been happening since 2013.
                GPL is conducted among the students of both telugu states. This typically happens among 4 teams.
                The live score of GPL is streamed through "Website link". To make it more enthusiastic and more engaging for the GPL followers betting is also available in the website through coins.
                GPL what is it a sport event? is it started now? If you ask me yes it is a sports evnet and yet no!!
                First it is not started now it's always been there since the origin. A man learns from the challenges he faced and evolve from them, the bigger the challenge the finer the man will turn out. What is the best way other than sports to experience a challenge that puts his hardwork, pride in line. In this seniors make a man out of their juniors.
              </p>
            </div>
            <div class={css.photo}>
              <img src={cricket} alt="alt-text" />
            </div>
          </div>

        </div>
        {/* <div class={css.footer}>
        <div class={css.soc}><i class="fa-brands fa-instagram"></i></div>
        <div class="soc"><i class="fa-brands fa-instagram"></i></div>
        <div class="soc"><i class="fa-brands fa-instagram"></i></div>

    </div> */}
      </main>
      {/* <!-- End #main --> */}

      <div className={css.another}>
        <div className={css.anrow}>
          <img src={cricket} alt="" />
          <h2>MiniGPL 2023</h2>
          <h3>Mini GPL was conducted during August 2022. There were 4 teams participating in Mini GPL. After a week long exciting matches the team Aatram Guddalu has won the cup.</h3>
        </div>
        <div className={css.anrow}>
          <img src={cricket} alt="" />
          <h2>GPL 2022</h2>
          <h3>GPL has finally conducted after 2 years lockdown.It has been conducted in September 2022. Golden Eagles has bagged the tournament.</h3>
        </div>
        <div className={css.anrow}>
          <img src={cricket} alt="" />
          <h2>MiniGPL 2022</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam necessitatibus repellendus sunt maiores ab vitae suscipit minus. Totam quo culpa magnam dolore asperiores amet itaque facilis sequi iure dolorum libero, facere repudiandae non.</h3>
        </div>
      </div>

      {/* <!-- ======= Footer ======= --> */}
      <footer id={css.footer}>
        <div class="container">
          <h3>Gultie Premier League</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          <div class={css.socialLinks}>
            <a href="#" class="twitter"><SiFacebook /></a>
            <a href="#" class="facebook"><SiTwitter /></a>
            <a href="#" class="instagram"><SiInstagram /></a>
            <a href="#" class="google-plus"><SiSkypeforbusiness /></a>
            <a href="#" class="linkedin"><SiLinkedin /></a>
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

    </div>
  )
}
