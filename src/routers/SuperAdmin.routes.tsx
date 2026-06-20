import { lazy } from "react";
import LazyLoad from "../components/common/LozyLoad";
import Jobs from "../pages/Jobs/Jobs";

const NewLeads = LazyLoad(
  lazy(() => import("../pages/Leads/NewLeads/NewLeads")),
);
const AssignedLeads = LazyLoad(
  lazy(() => import("../pages/Leads/AssignedLeads/AssignedLeads")),
);
const ConvertedLeads = LazyLoad(
  lazy(() => import("../pages/Leads/ConvertedLeads/ConvertedLeads")),
);
const Dashboard = LazyLoad(lazy(() => import("../pages/Dashboard/Dashboard")));
const Profile = LazyLoad(lazy(() => import("../pages/Profile/Profile")));

export const superAdminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    name: "Leads",
    children: [
      {
        name: "New Leads",
        path: "new-leads",
        element: <NewLeads />,
      },
      {
        name: "Assigned Leads",
        path: "assigned-leads",
        element: <AssignedLeads />,
      },
      {
        name: "Converted Leads",
        path: "converted-leads",
        element: <ConvertedLeads />,
      },
    ],
  },
  {
    name: "Requirements",
    children: [
      {
        name: "Requirements",
        path: "jobs",
        element: <Jobs />,
      },
      {
        name: "Running Jobs",
        path: "running-jobs",
        element: <Jobs />,
      },
    ],
  },
];
