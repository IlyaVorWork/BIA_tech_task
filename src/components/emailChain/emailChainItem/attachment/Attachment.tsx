import {FunctionComponent} from "react";
import {Center, Stack, Text} from "@chakra-ui/react";

const Attachment: FunctionComponent = () => {
  return (
    <Stack direction={"row"} gap={"0.75rem"} padding={"0.375rem"} alignItems={"center"}>
      <Center width={"2.5rem"} height={"2.5rem"} color={"#FFFFFF"} bg={"#1C1D1E"} borderRadius={"0.75rem"}
           fontSize={"0.75rem"}>
        pdf.
      </Center>
      <Text fontSize={"0.75rem"} truncate>Очень длинное название файла</Text>
    </Stack>
  )
}

export default Attachment