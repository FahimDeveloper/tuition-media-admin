import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import logo from "../../assets/pear-app-logo.png";
import { useAppSelector } from "../../hooks/useAppHooks";
import { userRole } from "../../utils/role";

const Sidebar = ({ locationKey }: { locationKey: string }) => {
  const { user } = useAppSelector((state) => state.auth);
  let sidebarItems;
  switch (user?.role) {
    case userRole.SUPER_ADMIN:
      // sidebarItems = navigationGenerator(superAdminPaths, userRole.SUPER_ADMIN);
      break;

    default:
      break;
  }
  return (
    <Sider
      theme="light"
      width={260}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="mt-3 pb-5 space-y-2">
        <div className="flex items-center gap-5 ms-5">
          <img src={logo} className="size-10" alt="logo" />
          <p className="text-base font-bold italic">Pear App Dashboard</p>
        </div>
        <Menu
          className="font-bold text-base"
          theme="light"
          mode="inline"
          items={sidebarItems}
          selectedKeys={[locationKey]}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
