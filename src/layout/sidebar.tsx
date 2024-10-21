import { sidebarConstants } from "./sidebar-constants";
import RecursiveSidebarDisplay from "./recursive-sidebar-display";

const Sidebar = () => {
  return (
    <RecursiveSidebarDisplay
      sidebarPages={sidebarConstants}
      style="pb-0 bg-[#f5f5f5]"
      isChild={false}
    />
  );
};

export default Sidebar;
