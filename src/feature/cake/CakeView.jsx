import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import store from '../../app/store'
import { ordered,restocked } from './cakeSlice'

const CakeView = () => {
 const numOfCakes =  useSelector((state)=>{
    return state.cake.numOfCakes
  })

  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of cakes : {numOfCakes} </h2>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <button onClick={()=>dispatch(restocked(5))} >restock cake</button>
    </div>
  )
}

export default CakeView