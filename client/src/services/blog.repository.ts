import toast from "react-hot-toast";
import axiosInstance from "../lib/axios.config";
import { Blog } from "../models/Blog";

type IBlogRepository = {
  getAll: () => Promise<Blog[]>;
  create: (blog: Blog) => Promise<void>;
};

const BlogRepository: IBlogRepository = {
  getAll: async () => {
    try {
      const response = await axiosInstance.get("/v1/blogs");
      return response.data.data;
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
  create: async (blog: Blog) => {
    try {
      await axiosInstance.post("/v1/blogs", blog);
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
};

export default BlogRepository;
