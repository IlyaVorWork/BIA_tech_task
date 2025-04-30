import {FunctionComponent} from "react";
import {Button, Checkbox, Stack, Text, Wrap} from "@chakra-ui/react";
import EmailFilterSelector from "@/components/filters/EmailFilterSelector/EmailFilterSelector.tsx";
import {Email} from "@/types/Email.ts";
import DateFilterSelector from "@/components/filters/DateFilterSelector/DateFilterSelector.tsx";
import styles from "./Filters.module.css"

interface FiltersProps {
  emails: Email[];
  onBackButtonClick: () => void;
}

const Filters: FunctionComponent<FiltersProps> = ({emails, onBackButtonClick}) => {
  return (
    <Stack className={styles.filtersContainer}>
      <Text cursor={"pointer"} fontSize={"1.125rem"} color={"#a6a6a6"}
            onClick={() => onBackButtonClick()}>← Вернуться ко всем письмам</Text>
      <Stack direction={"row"} height={"1.5rem"} justifyContent={"space-between"}>
        <Text fontSize={"1.125rem"} color={"#a6a6a6"}>Фильтры</Text>
        <Button borderRadius={"0.375rem"} padding={"0.25rem 0.5rem"} bg={"#3182CE"} color={"white"} fontWeight={"600"}
                fontSize={"0.75rem"}
                height={"100%"}>Скрыть</Button>
      </Stack>
      <Wrap className={styles.filters}>
        <EmailFilterSelector
          emails={Array.from(new Set(emails.map(email => email.to)))}
          variant={"to"}/>
        <EmailFilterSelector emails={Array.from(new Set(emails.map(email => email.from)))} variant={"from"}/>
        <DateFilterSelector/>
        <Checkbox.Root colorPalette={"blue"} height={"1.25rem"}>
          <Checkbox.HiddenInput/>
          <Checkbox.Control border={"2px solid #FFFFFF"}>
            <Checkbox.Indicator/>
          </Checkbox.Control>
          <Checkbox.Label><Text color={"#FFFFFF"} fontSize={"0.875rem"}>Вложения</Text></Checkbox.Label>
        </Checkbox.Root>
      </Wrap>
    </Stack>
  )
}

export default Filters;