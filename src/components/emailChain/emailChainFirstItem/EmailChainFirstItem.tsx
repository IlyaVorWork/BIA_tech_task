import {FunctionComponent} from "react";
import {Box, Separator, Stack, Text, Wrap} from "@chakra-ui/react";
import {Email} from "@/types/Email.ts";
import {format} from "date-fns";
import Attachment from "@/components/emailChain/emailChainItem/attachment/Attachment.tsx";

interface EmailChainFirstItemProps {
  email: Email;
}

const EmailChainFirstItem:FunctionComponent<EmailChainFirstItemProps> = ({email}) => {
  return (
    <Stack height={"min-content"} gap={"0.75rem"} borderRadius={"0.75rem"} color={"#1C1D1E"}>
      <Stack direction={"row"} gap={"0.75rem"} justifyContent={"space-between"}>
        <Text fontSize={"1.375rem"} fontWeight={"500"}>{email.subject}</Text>
        <Box fontSize={"0.75rem"} height={"min-content"} padding={"0.25rem 0.5rem"} bg={"#F4F4F4"} borderRadius={"0.375rem"}>
          {format(email.date, "dd.MM.yyyy HH:mm")}
        </Box>
      </Stack>
      <Stack gap={"0.25rem"}>
        <Stack direction={"row"} gap={"0.75rem"}>
          <Text fontSize={"0.875rem"} color={"#3182CE"}>От кого: </Text>
          <Text fontSize={"0.875rem"}>{email.from}</Text>
          <Text fontSize={"0.875rem"} color={"#D2D2D2"}>{email.fromName}</Text>
        </Stack>
        <Stack direction={"row"} gap={"0.75rem"}>
          <Text fontSize={"0.875rem"} color={"#3182CE"}>Кому: </Text>
          <Text fontSize={"0.875rem"}>{email.to}</Text>
          <Text fontSize={"0.875rem"} color={"#D2D2D2"}>{email.toName}</Text>
        </Stack>
      </Stack>
      <Separator style={{borderColor: "#c8c8c8"}} />
      <Wrap direction={"row"} gap={"0.375rem"}>
        {email.attachments > 0 && Array.from({length: email.attachments}).map(() => (
          <Attachment />
        ))}
      </Wrap>
      <Text fontSize={"0.875rem"} textAlign={"justify"}>{email.text}</Text>
    </Stack>
  )
}

export default EmailChainFirstItem;