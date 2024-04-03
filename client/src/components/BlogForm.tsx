import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import toast from "react-hot-toast";
import BlogRepository from "../services/blog.repository";

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

  const handleSave = async () => {
    try {
      await BlogRepository.create(blog);
      toast.success("Blog created successfully.");
    } catch (error: unknown) {
      toast.error((error as Error).message);
    }
  };

  const handleCancel = () => {
    // cancel code
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
      <div className="flex justify-end gap-4 mt-2">
        <Button label="Cancel" type="outline" onClick={handleCancel} />
        <Button label="Save" onClick={handleSave} />
      </div>
    </div>
  );
};

export default BlogForm;
