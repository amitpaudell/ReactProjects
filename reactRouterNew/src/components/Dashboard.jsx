import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-4xl text-red-400">Dashboard</h1>
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
