import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from './themeSlice';

const ThemeChange = () => {
   
  const theme = useSelector((state)=>{
    return state.theme
  })  
  const dispatch = useDispatch()
  const change = ()=>{
      dispatch(changeTheme())
  }  
  return (
    <button onClick={change}>change theme</button>
  )
}

export default ThemeChange