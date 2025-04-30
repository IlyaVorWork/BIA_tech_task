import {FunctionComponent} from "react";
import {Box, Stack, Text, Wrap} from "@chakra-ui/react";
import {Email} from "@/types/Email.ts";
import {format} from "date-fns";
import Attachment from "@/components/emailChain/emailChainItem/attachment/Attachment.tsx";

interface EmailChainItemProps {
  email: Email;
}

const EmailChainItem:FunctionComponent<EmailChainItemProps> = ({email}) => {
  return (
    <Stack height={"min-content"} padding={"0.75rem"} gap={"0.75rem"} borderRadius={"0.75rem"} bg={"#F4F4F4"} color={"#1C1D1E"}>
      <Stack direction={"row"} gap={"1.5rem"} justifyContent={"space-between"}>
        <Stack gap={"0.25rem"}>
          <Stack direction={"row"} gap={"0.75rem"}>
            <Text fontSize={"0.875rem"} color={"#3182CE"}>Тема: </Text>
            <Text fontSize={"0.875rem"}>{email.subject}</Text>
          </Stack>
          <Stack direction={"row"} gap={"0.75rem"}>
            <Text fontSize={"0.875rem"} color={"#3182CE"}>От кого: </Text>
            <Text fontSize={"0.875rem"}>{email.from}</Text>
            <Text fontSize={"0.875rem"} color={"#7B7B7B"}>{email.fromName}</Text>
          </Stack>
          <Stack direction={"row"} gap={"0.75rem"}>
            <Text fontSize={"0.875rem"} color={"#3182CE"}>Кому: </Text>
            <Text fontSize={"0.875rem"}>{email.to}</Text>
            <Text fontSize={"0.875rem"} color={"#7B7B7B"}>{email.toName}</Text>
          </Stack>
        </Stack>
        <Box fontSize={"0.75rem"} flexShrink={"0"} width={"7.25rem"} height={"min-content"} padding={"0.25rem 0.5rem"} bg={"#F4F4F4"} borderRadius={"0.375rem"}>
          {format(email.date, "dd.MM.yyyy HH:mm")}
        </Box>
      </Stack>
      <Wrap direction={"row"} gap={"0.375rem"}>
        {email.attachments > 0 && Array.from({length: email.attachments}).map(() => (
          <Attachment />
        ))}
      </Wrap>
      <Text fontSize={"0.875rem"} maxHeight={"13rem"} overflowY={"auto"}>{email.text}</Text>
    </Stack>
  )
}

export default EmailChainItem;