const AddPost = () => {
  return (
    <div className="container w-50 my-5 bg-white  shadow-sm">
      <form className="p-3">
        <h3 className="text-center">Add Post</h3>
        <hr />
        <textarea
          className="form-control my-2"
          type="text"
          placeholder="Write the post"
        />
        <input type="file" className="form-control my-2" />
        <button className="btn btn-primary form-control">Post</button>
      </form>
    </div>
  )
}
export default AddPost
