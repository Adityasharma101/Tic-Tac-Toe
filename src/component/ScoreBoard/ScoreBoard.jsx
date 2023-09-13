import React from 'react'

import './ScoreBoard.scss'

const ScoreBoard = ({XScore, OScore ,playing ,tieScore}) => {
  return (
    <div className='scoreBoard'>
        <div className={`xScore ${playing ===true ? "border" : ""} `}>
            X : {XScore}
        </div>
        <div className={`oScore ${playing ===false ? "border" : ""} `}>
            O : {OScore}
        </div>
        <div className={`tieScore`}>
            Tie : {tieScore}
        </div>
    </div>
  )
}

export default ScoreBoard