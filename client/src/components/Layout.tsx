import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="m-auto container">
      <div className="bg-gray-800 text-white p-5 ">
        <button
          className="text-2xl font-bold cursor-pointer bg-transparent border-none"
          onClick={() => navigate("/")}
        >
          hbsoft blog - MERN
        </button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Layout;
