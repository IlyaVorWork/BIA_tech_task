import {FunctionComponent} from "react";
import {Box, Input, Stack} from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <Stack className={styles.header}>
      <Stack className={styles.counteragentAndSearch}>
        <Box className={styles.counteragent}>
          Контрагент ООО «Яндекс»
        </Box>
        <Input variant={"outline"} size={"xl"} className={styles.search}
               placeholder={"Поиск по контактам, ключевым словам и темам"}/>
      </Stack>
      <img src={logo} className={styles.logo} alt="Logo"/>
    </Stack>
  )
}

export default Header;