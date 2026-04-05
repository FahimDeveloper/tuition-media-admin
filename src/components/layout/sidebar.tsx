import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { useAppSelector } from "../../hooks/useAppHooks";
import { userRole } from "../../utils/role";
import { navigationGenerator } from "../../utils/navigationGenerator";
import { superAdminPaths } from "../../routers/SuperAdmin.routes";

const Sidebar = ({ locationKey }: { locationKey: string }) => {
  const { user } = useAppSelector((state) => state.auth);
  let sidebarItems;
  switch (user?.role) {
    case userRole.SUPER_ADMIN:
      sidebarItems = navigationGenerator(superAdminPaths, userRole.SUPER_ADMIN);
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
        <div className="ps-2 text-2xl font-semibold text-primary">
          Tuition <span className="font-bold">Media</span>
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
