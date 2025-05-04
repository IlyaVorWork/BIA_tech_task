import { FunctionComponent, useContext } from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import SidebarEmail from "@/components/sidebarEmailList/sidebarEmail/SidebarEmail.tsx";
import styles from "./SidebarEmailList.module.css";
import { EmailChainsContext } from "@/App.tsx";

const SidebarEmailList: FunctionComponent = () => {
  const emails = useContext(EmailChainsContext);

  return (
    <Stack className={styles.sidebarEmailList}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        height={"1.5rem"}
      >
        <Text color={"rgb(164, 164, 164)"} fontSize={"1.125rem"}>
          Все сообщения
        </Text>
        <Button
          borderRadius={"0.375rem"}
          padding={"0.25rem 0.5rem"}
          bg={"#3182CE"}
          color={"white"}
          fontWeight={"600"}
          fontSize={"0.75rem"}
          height={"100%"}
        >
          Показать все
        </Button>
      </Stack>
      <Stack
        gap={"0.375rem"}
        height={"calc(100% - 2.25rem)"}
        overflowY={"auto"}
        paddingRight={"0.25rem"}
      >
        {emails.map((email) => {
          return <SidebarEmail email={email} />;
        })}
      </Stack>
    </Stack>
  );
};

export default SidebarEmailList;
