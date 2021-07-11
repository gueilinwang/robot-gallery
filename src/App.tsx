import React from 'react'
import logo from './assets/images/logo.svg'
import styles from './App.module.css'
import robotdata from './mockdata/robot.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>Robot List</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotdata.map((data) => (
          <Robot
            id={data.id}
            name={data.name}
            email={data.email}
            key={data.id}
          />
        ))}
      </div>
    </div>
  )
}

export default App
