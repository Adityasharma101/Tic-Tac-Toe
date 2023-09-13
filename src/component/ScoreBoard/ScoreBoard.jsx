import React from 'react'

import './ScoreBoard.scss'

const ScoreBoard = ({XScore, OScore ,playing ,setXScore}) => {
  return (
    <div className='scoreBoard'>
        <div className={`xScore ${playing ===true ? "border" : ""} `}>
            X : {XScore}
        </div>
        <div className={`oScore ${playing ===false ? "border" : ""} `}>
            O : {OScore}
        </div>
    </div>
  )
}

export default ScoreBoard