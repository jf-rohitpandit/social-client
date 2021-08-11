import React from 'react'

const ProfileHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center text-dark">
      <div className="d-flex py-3 d-flex align-items-center">
        <div className="bg-secondary rounded-circle p-4"> </div>
        <div className="mx-3 fw-bold ">FirstName LastName</div>
      </div>
      <div>Time ago</div>
    </div>
  )
}

export default ProfileHeader
