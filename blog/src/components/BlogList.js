const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
          <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
