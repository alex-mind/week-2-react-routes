import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id='title'>Dashboard </div>
      <Link to='/dashboard/profile/f74f5c1b-b85f-4391-a411-40c557349987'>Go To Profile </Link>
      <Link to='/dashboard/main'>Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
