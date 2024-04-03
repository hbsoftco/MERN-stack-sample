import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogRepository from "../../services/blog.repository";
import { Blog } from "../../models/Blog";
import toast from "react-hot-toast";
import Button from "../../components/Button";

const BlogDetail = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();

  const navigate = useNavigate();
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

  const handleDelete = async () => {
    try {
      setLoading(true);
      await BlogRepository.delete(id!);
      toast.success("Blog deleted successfully.");

      navigate("/");
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
    <div className="flex flex-col gap-4">
      {loading ? (
        "Loading ..."
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{blog?.title}</h1>

            <div className="flex gap-3">
              <Button
                label="Back"
                type="outline"
                onClick={() => navigate("/")}
              />
              <Button label="Delete" type="danger" onClick={handleDelete} />
              <Button
                label="Edit"
                type="primary"
                onClick={() => navigate(`/edit-blog/${id}`)}
              />
            </div>
          </div>

          <img
            src={blog?.image}
            alt={blog?.title}
            className="object-cover rounded"
          />
          <p>{blog?.description}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetail;
