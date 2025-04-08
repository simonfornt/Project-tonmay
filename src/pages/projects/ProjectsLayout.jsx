import { Outlet } from "react-router-dom";

function ProjectsLayout() {
  return (
    <div>
      <h2>Our Projects</h2>
      <Outlet />
    </div>
  );
}

export default ProjectsLayout;
