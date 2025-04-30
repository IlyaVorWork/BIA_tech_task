import {FunctionComponent, useState} from "react";
import {Float, Stack, Text} from "@chakra-ui/react";
import {Email} from "@/types/Email.ts";
import {format} from "date-fns";
import styles from "./SidebarEmail.module.css"
import {MdAttachFile, MdMoreHoriz} from "react-icons/md";

interface SidebarEmailProps {
  email: Email;
}

const SidebarEmail: FunctionComponent<SidebarEmailProps> = ({email}) => {

  const [selected, setSelected] = useState<boolean>(false)

  console.log(email)

  return (
    <Stack
      className={[styles.sidebarEmail, selected ? styles.selected : ""].join(" ")}
      onClick={() => setSelected(prev => !prev)}>
      <Text>От: {email.from}</Text>
      {email.attachments > 0 && <Float offsetY={6} offsetX={selected ? 12 : 6}>
        <MdAttachFile className={styles.clipIcon}/>
      </Float>}
      {selected && <Float offset={6}>
        <MdMoreHoriz className={styles.moreIcon}/>
      </Float>}
      <Stack className={styles.sidebarEmailContent}>
        <Text className={styles.sidebarEmailTheme} truncate>{email.subject}</Text>
        <Stack direction={"row"} gap={"2rem"} justifyContent={"space-between"} alignItems={"flex-end"}>
          <Text className={styles.sidebarEmailText} lineClamp={selected ? 2 : 1}>{email.text}</Text>
          <Text className={styles.sidebarEmailTime}>{format(email.date, "HH:mm")}</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SidebarEmail