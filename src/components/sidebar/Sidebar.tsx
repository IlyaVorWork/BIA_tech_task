import {FunctionComponent} from "react";
import {Stack} from "@chakra-ui/react";
import SidebarEmailList from "@/components/sidebarEmailList/SidebarEmailList.tsx";
import {Email} from "@/types/Email.ts";
import Filters from "@/components/filters/Filters.tsx";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  emails: Email[]
  onBackButtonClick: () => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({emails, onBackButtonClick}) => {
  return (
    <Stack className={styles.sidebar}>
      <Filters emails={emails} onBackButtonClick={onBackButtonClick} />
      <SidebarEmailList emails={emails} />
    </Stack>
  )
}

export default Sidebar