import React from "react";
import { Blog } from "../models/Blog";
import { useNavigate } from "react-router-dom";
interface Props {
  blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <button
      key={blog.title}
      className="cursor-pointer border p-4 rounded border-gray-200"
      onClick={() => navigate(`/blog/${blog._id}`)}
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded h-52 object-cover w-full"
      />
      <h3 className="text-gray-700 mt-2">{blog.title}</h3>
    </button>
  );
};

export default BlogCard;
