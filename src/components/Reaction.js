import { useState } from 'react'
import CommentSection from './CommentSection'

const Reaction = () => {
  const [isCommentVisible, setIsCommentVisible] = useState(false)
  return (
    <div>
      <div className="bg-white d-flex border justify-content-around ">
        <div className="pointer" onClick={() => console.log('like')}>
          Like
        </div>
        <div
          className="pointer"
          onClick={() => {
            console.log('comment')
            setIsCommentVisible((state) => !state)
          }}
        >
          Comment
        </div>
      </div>
      {isCommentVisible && (
        <div>
          <CommentSection />
        </div>
      )}
    </div>
  )
}
export default Reaction
