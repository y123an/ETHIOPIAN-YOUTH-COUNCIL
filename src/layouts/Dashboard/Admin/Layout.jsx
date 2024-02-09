// import TopNav from "./TopNavbar";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const SIDE_NAV_WIDTH = 280;

const Layout = (props) => {
  const { children } = props;
  const pathname = useLocation();

  return (
    <div className="w-full">
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          {/* <TopNav /> */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
