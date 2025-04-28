import {FunctionComponent} from "react";
import {Button, Stack, Text} from "@chakra-ui/react";
import EmailFilterSelector from "@/components/filters/EmailFilterSelector/EmailFilterSelector.tsx";
import {Email} from "@/types/Email.ts";
import DateFilterSelector from "@/components/filters/DateFilterSelector/DateFilterSelector.tsx";

interface FiltersProps {
  emails: Email[];
  onBackButtonClick: () => void;
}

const Filters: FunctionComponent<FiltersProps> = ({emails, onBackButtonClick}) => {
  return (
    <Stack gap={"0.75rem"} width={"36rem"} height={"10rem"}>
      <Text width={"fit-content"} cursor={"pointer"} fontSize={"1.125rem"} color={"#a6a6a6"}
            onClick={() => onBackButtonClick()}>← Вернуться ко всем письмам</Text>
      <Stack direction={"row"} height={"1.5rem"} justifyContent={"space-between"}>
        <Text fontSize={"1.125rem"} color={"#a6a6a6"}>Фильтры</Text>
        <Button borderRadius={"0.375rem"} padding={"0.25rem 0.5rem"} bg={"#3182CE"} color={"white"} fontWeight={"600"}
                fontSize={"0.75rem"}
                height={"100%"}>Скрыть</Button>
      </Stack>
      <Stack direction={"row"} gap={"0.5rem"}>
        <EmailFilterSelector
          emails={Array.from(new Set(emails.map(email => email.to)))}
          variant={"to"}/>
        <EmailFilterSelector emails={Array.from(new Set(emails.map(email => email.from)))} variant={"from"}/>
      </Stack>
      <DateFilterSelector/>
    </Stack>
  )
}

export default Filters;