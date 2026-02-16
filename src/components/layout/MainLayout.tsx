import { Layout, theme } from "antd";
import Sidebar from "./sidebar";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet, useLocation } from "react-router-dom";
import { loggedOutUser } from "../../redux/features/auth/authSlice";
import { IoIosLogOut } from "react-icons/io";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../hooks/useAppHooks";

const MainLayout = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const locationKey = location.pathname.slice(1);
  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout right now?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#6d8c85",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(loggedOutUser());
      }
    });
  };
  return (
    <Layout className="h-screen">
      <Sidebar locationKey={locationKey} />
      <Layout style={{ marginLeft: 265 }}>
        <Header
          style={{
            padding: 0,
            paddingRight: 25,
            height: 60,
            background: "white",
          }}
          className="flex justify-end items-center gap-5"
        >
          {/* <Link
            className="flex justify-center items-center"
            to={`/${user?.role}/profile`}
          >
            <img
              src={user?.image}
              className="size-12 object-cover rounded-full"
            />
          </Link> */}
          <IoIosLogOut
            className="size-7 cursor-pointer"
            onClick={() => logout()}
          />
        </Header>
        <Content
          style={{
            margin: "5px 0",
            marginRight: "5px",
            padding: 20,
            paddingBottom: 10,
            overflowY: "auto",
            background: "white",
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
