import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state)=>{
    return state.icecream.numOfIcecreams
  })

  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of icecream : {numOfIcecreams} </h2>
        <button onClick={()=>dispatch(ordered())} >order icecream</button>
        <button onClick={()=>dispatch(restocked(5))} >restock icecream</button>
    </div>
  )
}

export default IcecreamView