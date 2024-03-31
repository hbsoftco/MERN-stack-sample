import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  return <div>EditBlog - blog id: {id}</div>;
};

export default EditBlog;
