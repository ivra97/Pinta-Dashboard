import { useParams } from 'react-router-dom';
import './Users.css';
import React from 'react'

const Users = () => {
  const {idUser ,userName} = useParams();
  return (
    <div>
      <span>Usuarios {idUser} - {userName}</span>
    </div>
  )
}

export default Users

