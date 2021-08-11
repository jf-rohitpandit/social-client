import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import ProfileHeader from './ProfileHeader'
import Reaction from './Reaction'

const PostComponent = () => {
  let location = useLocation()
  return (
    <div className="my-5">
      <Link
        to={{
          pathname: '/post/:id',
          state: { background: location },
        }}
      >
        <div className="bg-white  container text-dark ">
          <Link to="/profile/:id">
            <ProfileHeader />
          </Link>
          <div className="text-start text-wrap pb-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </Link>
      <Reaction />
    </div>
  )
}

export default PostComponent
