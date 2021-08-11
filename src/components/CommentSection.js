import Comment from './Comment'

const CommentSection = () => {
  return (
    <div className="bg-white p-3 mt-2  commentsHeight">
      <div>
        <form className="p-3">
          <h5 className="text-center">Add comment</h5>
          <hr />
          <textarea
            className="form-control my-2"
            type="text"
            placeholder="Write the post"
          />
          <button className="btn btn-primary form-control">Post comment</button>
        </form>
      </div>
      <hr />
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}

export default CommentSection
