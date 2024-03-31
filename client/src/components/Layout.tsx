import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="m-auto container">
      <div className="bg-gray-800 text-white p-5 ">
        <h1 className="text-2xl font-bold cursor-pointer">
          hbsoft blog - MERN
        </h1>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Layout;
