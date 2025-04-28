import {FunctionComponent} from "react";
import {Box, Heading, Input, Stack} from "@chakra-ui/react";
import logo from "@/assets/logo.svg";

const Header: FunctionComponent = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}
           bg={"rgb(87, 87, 87)"} width={"100%"} height={"4.75rem"}
           borderRadius={"0.75rem"} padding={"0.75rem 1.5rem 0.75rem 0.75rem"}>
      <Stack direction={"row"} gap={"1.5rem"} width={"70%"}>
        <Box minWidth={"25rem"} height={"3.25rem"} bg={"rgb(117, 117, 117)"} borderRadius={"0.33rem"}
             padding={"0.75rem 1.5rem 0.75rem 0.75rem"} lineHeight={"100%"}>
          <Heading fontSize={"1.25rem"}>Контрагент ООО «Яндекс»</Heading>
        </Box>
        <Input variant={"outline"} size={"xl"} color={"#7B7B7B"} border={"1px solid #E2E8F0"}
               bg={"#FFFFFF"}
               height={"3.25rem"}
               padding={"0 1rem"}
               placeholder={"Поиск по контактам, ключевым словам и темам"}/>
      </Stack>
      <img src={logo} className="logo" alt="Logo"/>
    </Stack>
  )
}

export default Header;