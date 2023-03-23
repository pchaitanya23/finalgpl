import React from 'react'
import Card from './Card.js'

import gowtham from '../assets/gowtham.jpg'
import chakravarthy from '../assets/chakravarthy.jpg'
import rohith from '../assets/rohith.jpg'
import joel from '../assets/joel.jpg'
import bhukyaGanesh from '../assets/bhukya ganesh.jpg'
import veeresh from '../assets/veeresh.jpg'
import hanumanth from '../assets/hanumanth naik.jpg'
import charith from '../assets/charith.jpg'
import sathwik from '../assets/badina sathwik.jpg'
import abhinay from '../assets/abhinay karthik.jpg'
import ganeshNaidu from '../assets/ganesh naidu.jpg'
import mukesh from '../assets/mukesh.jpg'
import css from './Card.module.css'
export default function Team () {
  return (
    <div class={css.team1}>
        <Card name="Gowtham" role="Batsman"  bat="Right Handed Batsman" photo={gowtham} />
        <Card name="Thokala Chakravarthy" role="All-rounder" bat="Right Handed Batsman" photo={chakravarthy} bowl="Right Hand Medium"/>
        <Card name="Rohith Mahanthi" role="Batsman" photo={rohith} bat="Right Hand Batsman"/>
        <Card name="Joel" role="All-rounder" photo={joel} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Bhukya Ganesh" role="All-rounder" photo={bhukyaGanesh} bowl="Right Hand Medium" bat="Right Hand Batsman"/>
        <Card name="Kanuri Veeresh" role="Bowler" photo={veeresh} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Lotavath Hanumanth Naik" role="Batsman" bat="Left Hand Batsman" photo={hanumanth}/>
        <Card name="Charith" role="Batsman" photo={charith} bat="Right Hand Batsman"/>
        <Card name="Badina Sathwik" role="All-rounder" photo={sathwik} bat="Right Hand Batsman" bowl="Right Hand Medium" />
        <Card name="Abhinay Karthik" role="All-rounder" photo={abhinay} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card name="Chonga Ganesh Naidu" role="All-rounder" photo={ganeshNaidu} bat="Right Hand Batsman" bowl="Right Hand Medium" />
        <Card name="Mukesh" role="Bowler" bowl="Right Hand Medium" photo={mukesh} bat="Right Hand Batsman"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
