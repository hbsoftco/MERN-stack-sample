import { useEffect, useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import toast from "react-hot-toast";
import BlogRepository from "../services/blog.repository";
import { useNavigate } from "react-router-dom";
import { Blog } from "../models/Blog";
import Loader from "./Loader";

const BlogForm = ({ blogData }: { blogData?: Blog }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>({
    title: "",
    description: "",
    image: "",
  });

  const handleChange =
    (fieldName: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setBlog({ ...blog, [fieldName]: e.target.value });
    };

  const handleSave = async () => {
    try {
      setLoading(true);
      if (blogData) {
        await BlogRepository.update(blogData._id!, blog);
        toast.success("Blog updated successfully.");
      } else {
        await BlogRepository.create(blog);
        toast.success("Blog created successfully.");
      }

      navigate("/");
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogData) {
      setBlog(blogData);
    }
  }, [blogData]);

  return (
    <div className="">
      {loading && <Loader />}
      <InputField
        label="Enter title"
        id="title"
        value={blog.title}
        placeholder="Title"
        onChange={handleChange("title")}
      />
      <InputField
        label="Enter image url"
        id="image"
        value={blog.image}
        placeholder="Image"
        onChange={handleChange("image")}
      />
      <TextAreaField
        id="description"
        value={blog.description ?? ""}
        placeholder="Description"
        onChange={handleChange("description")}
      />
      <div className="flex justify-end gap-4 mt-2">
        <Button label="Cancel" type="outline" onClick={() => navigate("/")} />
        <Button label="Save" onClick={handleSave} />
      </div>
    </div>
  );
};

export default BlogForm;
