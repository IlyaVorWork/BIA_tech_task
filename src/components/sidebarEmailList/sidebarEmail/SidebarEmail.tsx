import {FunctionComponent, useState} from "react";
import {Float, Stack, Text} from "@chakra-ui/react";
import {Email} from "@/types/Email.ts";
import {format} from "date-fns";
import "./SidebarEmail.css"
import {MdAttachFile, MdMoreHoriz} from "react-icons/md";

interface SidebarEmailProps {
  email: Email;
}

const SidebarEmail: FunctionComponent<SidebarEmailProps> = ({email}) => {

  const [selected, setSelected] = useState<boolean>(false)

  console.log(email)

  return (
    <Stack position={"relative"} direction={"column"} gap={"0.375rem"}
           className={["sidebar-email", selected ? "selected" : ""].join(" ")}
           onClick={() => setSelected(prev => !prev)}>
      <Text style={{color: "#3182CE"}}>От: {email.from}</Text>
      {email.attachments > 0 && <Float offsetY={6} offsetX={selected ? 12 : 6}>
        <MdAttachFile className={"clip-icon"}/>
      </Float>}
      {selected && <Float offset={6}>
        <MdMoreHoriz className={"more-icon"}/>
      </Float>}
      <Stack direction={"column"} gap={"0"}>
        <Text className={"sidebar-email-theme"} truncate>{email.subject}</Text>
        <Stack direction={"row"} gap={"2rem"} justifyContent={"space-between"} alignItems={"flex-end"}>
          <Text className={"sidebar-email-text"} lineClamp={selected ? 2 : 1}>{email.text}</Text>
          <Text className={"sidebar-email-time"}>{format(email.date, "HH:mm")}</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SidebarEmail