import {FunctionComponent} from "react";
import {Box, Stack} from "@chakra-ui/react";
import EmailPagination from "@/components/EmailPagination.tsx";
import EmailChainItem from "@/components/emailChain/emailChainItem/EmailChainItem.tsx";
import {Email} from "@/types/Email.ts";
import EmailChainFirstItem from "@/components/emailChain/emailChainFirstItem/EmailChainFirstItem.tsx";

interface EmailChainProps {
  selectedEmail: Email;
}

const EmailChain: FunctionComponent<EmailChainProps> = ({selectedEmail}) => {
  return (
    <Stack gap={"0.75rem"} width={"100%"} height={"100%"}>
      <Box width={"100%"} height={"calc(100% - 2.75rem)"} bg={"#ffffff"} borderRadius={"0.75rem"}
           paddingRight={"0.75rem"} paddingTop={"0.75rem"} paddingBottom={"0.75rem"}>
        <Stack flex={1} height={"100%"} paddingLeft={"0.75rem"}
               paddingRight={"0.75rem"} overflowY={"auto"}>
          <EmailChainFirstItem email={selectedEmail}/>
          {Array.from({length: 9}).map(() => (
            <EmailChainItem email={selectedEmail}/>
          ))}
        </Stack>
      </Box>
      <EmailPagination count={50} pageSize={10} defaultPage={1} onPageChange={() => console.log("Сменил страничку")}/>
    </Stack>
  )
}

export default EmailChain;