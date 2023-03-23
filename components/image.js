// function MyComponent(props) {
//     return (
//       <div>
//         <img src={props.image} alt="example" />
//       </div>
//     );
//   }
 

  import React from 'react'
  import css from './Card.module.css'
  export default function image(props) {
    return (
        <div>
        <img src={props.image} className={css.cardimage} alt="example" width={300} height={300}/>
      </div>
    )
  }
  