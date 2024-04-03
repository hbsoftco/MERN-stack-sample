import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../models/Blog";
import BlogRepository from "../../services/blog.repository";
import toast from "react-hot-toast";
import BlogForm from "../../components/BlogForm";
import Loader from "../../components/Loader";

const EditBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();

  const { id } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      setBlog(await BlogRepository.getById(id!));
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <h1 className="mb-2 text-xl font-semibold">Edit Blog</h1>
      <hr />
      <div className="mt-2">
        <BlogForm blogData={blog!} />
      </div>
    </div>
  );
};

export default EditBlog;
