
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios.config";

type Blog = {
  title: string;
  image: string;
  description?: string;
};

type IBlogRepository = {
  getAll: () => Promise<Blog[]>;
  create: (blog: Blog) => Promise<void>;
};

const BlogRepository: IBlogRepository = {
  getAll: async () => {
    try {
      const response = await axiosInstance.get("/blogs");
      return response.data;
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
  create: async (blog: Blog) => {
    try {
      await axiosInstance.post("/blogs", blog);
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
};

export default BlogRepository;
