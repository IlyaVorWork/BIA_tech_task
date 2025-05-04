import { FunctionComponent, useContext } from "react";
import { Button, Stack, Text, Wrap } from "@chakra-ui/react";
import EmailFilterSelector from "@/components/filters/EmailFilterSelector/EmailFilterSelector.tsx";
import DateFilterSelector from "@/components/filters/DateFilterSelector/DateFilterSelector.tsx";
import styles from "./Filters.module.css";
import { EmailChainsContext } from "@/App.tsx";
import CustomCheckbox from "@/components/checkbox/CustomCheckbox.tsx";

interface FiltersProps {
  onBackButtonClick: () => void;
}

const Filters: FunctionComponent<FiltersProps> = ({ onBackButtonClick }) => {
  const emails = useContext(EmailChainsContext);

  return (
    <Stack className={styles.filtersContainer}>
      <Text
        cursor={"pointer"}
        fontSize={"1.125rem"}
        color={"#a6a6a6"}
        onClick={() => onBackButtonClick()}
      >
        ← Вернуться ко всем письмам
      </Text>
      <Stack
        direction={"row"}
        height={"1.5rem"}
        justifyContent={"space-between"}
      >
        <Text fontSize={"1.125rem"} color={"#a6a6a6"}>
          Фильтры
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
          Скрыть
        </Button>
      </Stack>
      <Wrap className={styles.filters}>
        <EmailFilterSelector
          emails={Array.from(new Set(emails.map((email) => email.to)))}
          variant={"to"}
        />
        <EmailFilterSelector
          emails={Array.from(new Set(emails.map((email) => email.from)))}
          variant={"from"}
        />
        <DateFilterSelector />
        <CustomCheckbox variant={"light"} label={"Вложения"} />
      </Wrap>
    </Stack>
  );
};

export default Filters;
