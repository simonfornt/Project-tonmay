import { Outlet } from "react-router-dom";

const ProjectsLayout = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-4"></h2>
      <Outlet />
    </div>
  );
};

export default ProjectsLayout;
