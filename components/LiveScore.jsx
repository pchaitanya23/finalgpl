import React from 'react'
import css from './LiveScore.module.css'
import Navbar from './Navbar.jsx'
import { LiveScore } from './LiveScore.js'

// let showScore = () => {
//     let table = document.querySelector('table');
//     if (table.style.display == 'none') {
//         table.style.display = 'block';
//     }
//     else {
//         // table.style.display='none';
//         console.log('hi');
//     }
// }


export default function betting() {
    const textStyle = {
        padding: '0 0 0 116px',
      };

    return (
        <>
            <Navbar />
            <div className={css.liveScore} >
                <p>1st Match-Team A vs Team B</p>
                <div className={css.teamScore}>
                    <span><img src="" alt="" /></span>
                    <span>Team A</span>
                    <span className={css.score}>155-2</span>
                </div>
                <div className={css.teamScore}>
                    <span><img src="" alt="" /></span>
                    <span>Team B</span>
                    <span className={css.score}>155-2</span>
                </div>
            </div>
            <div className={css.currMatch}>
                <p>LiveMatches</p>
                <a href='/score'><div className={css.nextMatch}>
                    <p>Match No 4</p>
                    <p>Team-A vs Team-B</p>
                    <p>07:00 A.M</p>
                </div></a>
            </div>
            <div className={css.upcoming}>
                <p style={textStyle}>Upcoming Matches</p>
                <div className={css.matches}>
                    <div className={css.nextMatch}>
                        <p>Match No 4</p>
                        <p>Team-A vs Team-B</p>
                        <p>07:00 A.M</p>
                    </div>
                    <div className={css.nextMatch}>
                        <p>Match No 4</p>
                        <p>Team-A vs Team-B</p>
                        <p>07:00 A.M</p>
                    </div>
                    <div className={css.nextMatch}>
                        <p>Match No 4</p>
                        <p>Team-A vs Team-B</p>
                        <p>07:00 A.M</p>
                    </div>
                </div>
            </div>


        </>
    )
}
