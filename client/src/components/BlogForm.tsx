import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

interface BlogFormState {
  title: string;
  description: string;
  image: string;
}

const BlogForm = () => {
  const [blog, setBlog] = useState<BlogFormState>({
    title: "",
    description: "",
    image: "",
  });

  const handleChange =
    (fieldName: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setBlog({ ...blog, [fieldName]: e.target.value });
    };

  return (
    <div className="">
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
        value={blog.description}
        placeholder="Description"
        onChange={handleChange("description")}
      />
    </div>
  );
};

export default BlogForm;
