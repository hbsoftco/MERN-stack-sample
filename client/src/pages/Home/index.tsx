import { useEffect, useState } from "react";
import BlogRepository from "../../services/blog.repository";
import toast from "react-hot-toast";
import { Blog } from "../../models/Blog";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const getData = async () => {
    try {
      setLoading(true);
      const blogsData = await BlogRepository.getAll();

      setLoading(false);
      setBlogs(blogsData);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">All Blogs</h1>
        <Button label="Add Blog" onClick={() => navigate("/add-blog")} />
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog._id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
