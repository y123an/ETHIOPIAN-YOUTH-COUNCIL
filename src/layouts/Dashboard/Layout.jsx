// import TopNav from "./TopNavbar";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const SIDE_NAV_WIDTH = 280;

const Layout = (props) => {
  const { children } = props;
  const pathname = useLocation();

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          {/* <TopNav /> */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
