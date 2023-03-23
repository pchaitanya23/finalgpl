import React from 'react'
import Cheems from '../assets/cheems.jpeg'
import css from './Card.module.css'
import Image from './image.js'

export default function Card(props) {
  return (
    <>
      <div className={css.flipCard}>
        <div className={css.flipCardInner}>
          <div className={css.flipCardFront}>
            <Image image={props.photo}/>
          </div>
          <div className={css.flipCardBack}>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <p>{props.bat}</p>
            <p>{props.bowl}</p>
          </div>
        </div>
      </div>
    </>
  )
}
