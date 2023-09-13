import React from 'react'
import Box from '../Box/Box'

import './Board.scss'

const Board = ({board , onHandleClick}) => {
  return (
    <div className='board'>
      {board.map((item, id) => (
        <Box key={id} value={item} onHandleClick={()=>item ===null && onHandleClick(id)}/> 
      ))}
    </div>
  )
}

export default Board
