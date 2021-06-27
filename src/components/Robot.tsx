import React from 'react'
import styles from './Robot.module.css'
interface IRobotProps {
  id: number
  name: string
  email: string
}
const Robot: React.FC<IRobotProps> = (props) => {
  const { id, name, email } = props
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt={`avatar${id}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  )
}

export default Robot
