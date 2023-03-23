import React from 'react'
import css from './Betting.module.css'
import Navbar from './Navbar.jsx'
export default function betting() {
  return (
    <>
        <Navbar/>
        <div className={css.container}>
            <div className={css.ratios}>
            <span>Ratio on Team A: </span>
            <span>1.25</span>
            </div>
            <div className={css.ratios}>
            <span>Ratio on Team B: </span>
            <span>0.6</span>
            </div>
            <div className={css.select}>
            <span className={css.class1}>Choose Your Team:   </span>
            
            <input type="radio" id="html" name="fav_language" className={css.radio} value="HTML"/>
            <label for="html">Team A</label>
            <input type="radio" id="css" name="fav_language" className={css.radio} value="CSS"/>
            <label for="css">Team B</label>    
            </div>
            <div className={css.amount}>
                <span>Enter the Amount to bet(in coins) : </span>
                <input type="text" className={css.textbox} placeholder='100'/>
            </div>
            <button className={css.place}>Place Bet</button>
        </div>
    </>
  )
}
