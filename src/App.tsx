import React from 'react'
import logo from './assets/images/logo.svg'
import styles from './App.module.css'
import robotdata from './mockdata/robot.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

interface IProps {}
interface IState {
  robotGallery: any[]
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      robotGallery: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({ robotGallery: data }))
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>Robot List</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((data) => (
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
}

export default App
