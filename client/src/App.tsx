import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        ></Route>
        <Route
          path="/add-blog"
          element={
            <Layout>
              <AddBlog />
            </Layout>
          }
        ></Route>
        <Route
          path="/edit-blog/:id"
          element={
            <Layout>
              <EditBlog />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
