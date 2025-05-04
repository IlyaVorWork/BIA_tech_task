import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  For,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./EmailFilterWindow.css";

interface EmailFilterWindowProps {
  emails: string[];
}

const EmailFilterWindow: FunctionComponent<EmailFilterWindowProps> = ({
  emails,
}) => {
  const [checkedEmails, setCheckedEmails] = useState<string[]>([]);

  const uncheckAll = () => {
    setCheckedEmails([]);
  };

  const checkAll = () => {
    setCheckedEmails(emails);
  };

  useEffect(() => {
    console.log(checkedEmails);
  }, [checkedEmails]);

  return (
    <Stack
      width={"19rem"}
      padding={"0.625rem"}
      gap={"0.625rem"}
      bg={"#FFFFFF"}
      borderRadius={"0.75rem"}
    >
      <Stack gap={"0.375rem"}>
        <Input
          variant={"outline"}
          color={"#7B7B7B"}
          border={"1px solid #E2E8F0"}
          bg={"#FFFFFF"}
          height={"1.5rem"}
          padding={"0 0.5rem"}
          placeholder={"@mail.com"}
        />
        <Stack
          direction={"row"}
          height={"1.5rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text color={"#7B7B7B"} fontSize={"0.875rem"}>
            Выбрано: {checkedEmails.length}
          </Text>
          <Button
            borderRadius={"0.375rem"}
            padding={"0.25rem 0.5rem"}
            bg={"#3182CE"}
            color={"#FFFFFF"}
            fontWeight={"600"}
            fontSize={"0.75rem"}
            height={"100%"}
          >
            Применить
          </Button>
        </Stack>
      </Stack>
      <Stack gap={"0.375rem"} height={"calc(100% - 6rem)"}>
        <Stack
          direction={"row"}
          height={"1.5rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            onClick={() => uncheckAll()}
            borderRadius={"0.375rem"}
            padding={"0.25rem 0.5rem"}
            bg={"#EDF2F7"}
            color={"#1A202C"}
            fontWeight={"600"}
            fontSize={"0.75rem"}
            height={"100%"}
          >
            Убрать все
          </Button>
          <Button
            onClick={() => checkAll()}
            borderRadius={"0.375rem"}
            padding={"0.25rem 0.5rem"}
            bg={"#EDF2F7"}
            color={"#1A202C"}
            fontWeight={"600"}
            fontSize={"0.75rem"}
            height={"100%"}
          >
            Выбрать все
          </Button>
        </Stack>
        <Stack
          className={"email-selector-list"}
          gap={"0.625rem"}
          maxHeight={"11rem"}
          overflowY={"auto"}
        >
          <For each={emails}>
            {(email) => (
              <Box color={"#1C1D1E"}>
                <Checkbox.Root
                  colorPalette={"blue"}
                  checked={checkedEmails.includes(email)}
                  onCheckedChange={(details) => {
                    if (details.checked) {
                      setCheckedEmails((prev) => [...prev, email]);
                    } else {
                      setCheckedEmails((prev) =>
                        prev.filter((el) => el !== email),
                      );
                    }
                  }}
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control className={"email-select-checkbox"}>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Label>
                    <Text truncate fontSize={"0.875rem"}>
                      {email}
                    </Text>
                  </Checkbox.Label>
                </Checkbox.Root>
              </Box>
            )}
          </For>
        </Stack>
      </Stack>
      <Button
        borderRadius={"0.375rem"}
        padding={"0.25rem 0.5rem"}
        bg={"#3182CE"}
        color={"#FFFFFF"}
        fontWeight={"600"}
        fontSize={"0.75rem"}
        width={"fit-content"}
        height={"1.5rem"}
      >
        Показать все
      </Button>
    </Stack>
  );
};

export default EmailFilterWindow;
