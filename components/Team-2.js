import React from 'react'
import Card from './Card.js'
import shyam from '../assets/shyam.jpg'
import saiTeja from '../assets/sai teja.jpg'
import nishanth from '../assets/nishanth.jpg'
import lokesh from '../assets/lokesh.jpg'
import css from './Card.module.css'
export default function Team () {
  return (
    <div class={css.team1}>
        <Card name="Shyam" role="Batsman" photo={shyam} bat="Right Handed Batsman"/>
        <Card name="Gokeda Sai Teja" role="Batsman" photo={saiTeja} bat="Right Handed Batsman"/>
        <Card name="Nishanth" role="Batsman" photo={nishanth} bat="Right Hand Batsman"/>
        <Card name="Rayavarapu Venkata Sai Lokesh" role="All-rounder" photo={lokesh} bat="Right Hand Batsman" bowl="Right Hand Medium"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
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
