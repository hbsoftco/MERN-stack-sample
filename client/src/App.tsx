import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
        <Route path="/add-blog" element={<AddBlog />}></Route>
        <Route path="/edit-blog/:id" element={<EditBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
