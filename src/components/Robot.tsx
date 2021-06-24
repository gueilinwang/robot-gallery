import React from 'react'
interface IRobotProps {
  id: number
  name: string
  email: string
}
const Robot: React.FC<IRobotProps> = (props) => {
  const { id, name, email } = props
  return (
    <>
      <li>
        <img src={`https://robohash.org/${id}`} alt={`avatar${id}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </li>
    </>
  )
}

export default Robot
