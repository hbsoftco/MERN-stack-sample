import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../models/Blog";
import BlogRepository from "../../services/blog.repository";
import toast from "react-hot-toast";
import BlogForm from "../../components/BlogForm";

const EditBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();

  // const navigate = useNavigate();
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

  console.log(loading);
  console.log(blog);

  return (
    <div>
      <BlogForm blogData={blog!} />
    </div>
  );
};

export default EditBlog;
