import BlogForm from "../../components/BlogForm";

const AddBlog = () => {
  return (
    <div className="text-gray-800">
      <h1 className="mb-2 text-xl font-semibold">Add Blog</h1>
      <hr />
      <div className="mt-2">
        <BlogForm />
      </div>
    </div>
  );
};

export default AddBlog;
