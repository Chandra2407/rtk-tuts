import { useState, useEffect } from 'react'
import './App.css'
import CakeView from './feature/cake/CakeView'
import IcecreamView from './feature/icecream/IcecreamView'
import ThemeChange from './feature/theme/ThemeChange'
import UserView from './feature/user/UserView'
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state)=>{
    return state.theme
  })
  return (
    <div className="App" style={{color:theme.color,backgroundColor:theme.bgColor}}>
      <ThemeChange />
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
