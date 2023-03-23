import React from 'react'
import Card from './Card.js'
import goutham from '../assets/Goutham.jpg'
import balbheem from '../assets/balbheem.jpg'
import bittu from '../assets/bittu.jpg'
import chandu from '../assets/chandu.jpg'
import dinesh from '../assets/dinesh.jpg'
import mohammad from '../assets/mohammad waris.jpg'
import srikanth from '../assets/srikanth.jpg'
import vignesh from '../assets/vaibhav vignesh.jpg'
import vamshi from '../assets/vamshi.jpg'
import lakshman from '../assets/lakshman.jpg'
import vardhan from '../assets/vardhan sir.jpg'
import css from './Card.module.css'
import css1 from './Team.module.css'
// import goutham from '../assets/Goutham.jpg'
// import goutham from '../assets/Goutham.jpg'
// import goutham from '../assets/Goutham.jpg'
// import goutham from '../assets/Goutham.jpg'
// import goutham from '../assets/Goutham.jpg'
// import goutham from '../assets/Goutham.jpg'
// import goutham from '../assets/Goutham.jpg'
// import goutham from '../assets/Goutham.jpg'

export default function Team () {
  return (
    <div className={css.team1}>
        <Card name="Goutham" role="All-Rounder"  bat="Right Handed Batsman" photo={goutham} bowl="Right Hand Medium"/>
        <Card name="Vardhan Gudla" role="All-rounder" bat="Right Handed Batsman" photo={vardhan} bowl="Right Hand Medium"/>
        <Card name="Vaibhav Vignesh" role="Batsman" photo={vignesh} bat="Right Hand Batsman"/>
        <Card name="Vamshi" role="All-rounder" photo={vamshi} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Srikanth Kethavath" role="Bowler" photo={srikanth} bowl="Right Hand Medium"/>
        <Card name="Mudavath Balbheem" role="All-rounder" photo={balbheem} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Bittu" role="All-rounder" bat="Left Hand Batsman" photo={bittu} bowl="Left Hand Medium"/>
        <Card name="Lavudya Dinesh" role="Batsman" photo={dinesh} bat="Right Hand Batsman"/>
        <Card name="A.mohammad waris" role="Batsman" photo={mohammad} />
        <Card name="Chandu" role="Batsman" photo={chandu} bat="Right Hand Batsman"/>
        <Card name="Lakshman Tej Bandhala" photo={lakshman} role="All-rounder" bat="Right Hand Batsman" bowl="Right Hand Medium" />
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
