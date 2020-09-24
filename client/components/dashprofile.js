import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Dashprofile = () => {
    const { user } = useParams()
  return (
    <div>
      <Link to='/dashboard'>Go To Root </Link>
      <Link to='/dashboard/main'>Go To Main </Link>
      <div id='title'>Profile </div>
      <div id='username'>{user}</div>
    </div>
  )
}

Dashprofile.propTypes = {}

export default Dashprofile
