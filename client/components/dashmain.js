import React from 'react'
import { Link } from 'react-router-dom'

const Dashmain = () => {
  return (
    <div>
      <div id='title'>Main </div>
      <Link to='/dashboard/profile/f74f5c1b-b85f-4391-a411-40c557349987'>Go To Profile </Link>
      <Link to='/dashboard'>Go To Root </Link>
    </div>
  )
}

Dashmain.propTypes = {}

export default Dashmain
