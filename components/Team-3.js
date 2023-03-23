import React from 'react'
import Card from './Card.js'

import vasoon from '../assets/vasoon.jpg'
import suryaVamsi from '../assets/surya vamsi.jpg'
import avinash from '../assets/avinash.jpg'
import manishwar from '../assets/manishwar.jpg'
import eswar from '../assets/eswar.jpg'
import vineesh from '../assets/vineesh goud.jpg'
import saiKrishna from '../assets/sai krishna.jpg'
import rohit from '../assets/rohit sir.jpg'
import kManish from '../assets/k.manish.jpg'
import hemanth from '../assets/hemanthKumar.jpg'
import css from './Card.module.css'

export default function Team () {
  return (
    <div class={css.team1}>
        <Card name="Vasoon Rathikrinda" role="All-Rounder"  bat="Right Handed Batsman" photo={vasoon} bowl="Right Hand Medium"/>
        <Card name="Batchala Srihari Surya Vamsi " role="All-rounder" bat="Right Handed Batsman" photo={suryaVamsi} bowl="Right Hand Medium"/>
        <Card name="Adapa Avinash" role="All-rounder" photo={avinash} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Manishwar Reddy Bussu" role="Batsman" photo={manishwar} bat="Left Hand Batsman"/>
        <Card name="Ala Eswar" role="All-rounder" photo={eswar} bat="Left Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Sai Aashrith" role="All-rounder" bat="Left Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Vineesh Goud" role="All-rounder" photo={vineesh} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Nemalipuri Sai Krishna" role="All-rounder" photo={saiKrishna} bat="Right Hand Batsman" bowl="Right Hand Medium" />
        <Card name="Rohit" role="Batsman" photo={rohit} bat="Right Hand Batsman"/>
        <Card name="K Manish" photo={kManish} role="bowler" bowl="Right Hand Medium" />
        <Card name="Hemanth Kumar Chukka" photo={hemanth} role="All-rounder" bat="Right Hand Batsman" bowl="Right Hand Medium" />
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
