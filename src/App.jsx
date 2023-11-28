import React, { useState } from 'react'

const App = () => {
  const [userinput,Setuserinput]=useState([])

  function handelCLick(e){
    Setuserinput(userinput + e.target.name)

  }

  function calculate(){
    Setuserinput(eval(userinput))
  }
  function C(){
    Setuserinput("")
  }
  function Del(){
    Setuserinput(userinput.slice(0, userinput.length-1))
  }


  
  
  return (
    <>
      <div className='Box'>
        <div className="card">
          <div className='output'>
          <input className='ans' type="text" placeholder='0' disabled={true} value={userinput}/>
          </div>
        <div className='num_btn'>
          <button name='1' onClick={handelCLick}>1</button>
          <button name='2' onClick={handelCLick}>2</button>
          <button name='3' onClick={handelCLick}>3</button>
          <button name='4' onClick={handelCLick}>4</button>
          <button name='5' onClick={handelCLick}>5</button>
          <button name='6' onClick={handelCLick}>6</button>
          <button name='7' onClick={handelCLick}>7</button>
          <button name='8' onClick={handelCLick}>8</button>
          <button name='9' onClick={handelCLick}>9</button>
          <button name='0' onClick={handelCLick}>0</button>      
          <button name='(' onClick={handelCLick}>(</button>      
          <button name=')' onClick={handelCLick}>)</button>      
          <button name='+' onClick={handelCLick}>+</button>
          <button name='-' onClick={handelCLick}>-</button>
          <button name='*' onClick={handelCLick}>*</button>
          <button name='/' onClick={handelCLick}>/</button>
          <button onClick={Del}>Del</button>
          <button onClick={C}>C</button>
          <button onClick={calculate}>Ans</button>

        </div>
        </div>
      </div>
    </>
    )
}

export default App