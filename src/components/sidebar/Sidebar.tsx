import { FunctionComponent } from "react";
import { Stack } from "@chakra-ui/react";
import SidebarEmailList from "@/components/sidebarEmailList/SidebarEmailList.tsx";
import Filters from "@/components/filters/Filters.tsx";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  onBackButtonClick: () => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ onBackButtonClick }) => {
  return (
    <Stack className={styles.sidebar}>
      <Filters onBackButtonClick={onBackButtonClick} />
      <SidebarEmailList />
    </Stack>
  );
};

export default Sidebar;
