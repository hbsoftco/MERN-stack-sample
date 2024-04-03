import toast from "react-hot-toast";
import axiosInstance from "../lib/axios.config";
import { Blog } from "../models/Blog";

type IBlogRepository = {
  getAll: () => Promise<Blog[]>;
  getById: (id: string) => Promise<Blog>;
  delete: (id: string) => Promise<Blog>;
  create: (blog: Blog) => Promise<void>;
  update: (id: string, blog: Blog) => Promise<void>;
};

const BlogRepository: IBlogRepository = {
  getAll: async () => {
    try {
      return (await axiosInstance.get("/v1/blogs")).data.data;
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
  getById: async (id: string) => {
    try {
      return (await axiosInstance.get(`/v1/blogs/${id}`)).data.data;
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
  delete: async (id: string) => {
    try {
      return (await axiosInstance.delete(`/v1/blogs/${id}`)).data.data;
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
  update: async (id: string, blog: Blog) => {
    try {
      await axiosInstance.put(`/v1/blogs/${id}`, blog);
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
};

export default BlogRepository;
