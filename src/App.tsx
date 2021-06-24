import React from 'react'
import logo from './logo.svg'
import './App.css'
import robotdata from './mockdata/robot.json'
import Robot from './components/Robot'

function App() {
  return (
    <ul>
      {robotdata.map((data) => (
        <Robot id={data.id} name={data.name} email={data.email} />
      ))}
    </ul>
  )
}

export default App
