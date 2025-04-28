import './App.css'
import {Stack} from "@chakra-ui/react";
import Header from "@/components/Header.tsx";
import EmailGrid from "@/components/emailGrid/EmailGrid.tsx";
import {useState} from "react";
import {Email, mockEmails} from "@/types/Email.ts";
import Sidebar from "@/components/sidebar/Sidebar.tsx";
import EmailChain from "@/components/emailChain/EmailChain.tsx";

function App() {

  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const [emailData] = useState<Email[]>(mockEmails.sort((a, b) => a.date < b.date ? 1 : -1));

  return (
    <Stack width={"100%"} height={"100%"} gap={"1.25rem"}>
      <Header/>
      {!selectedEmail && <EmailGrid rowsData={emailData} setSelectedEmail={setSelectedEmail} />}
      {selectedEmail &&
        <Stack direction={"row"} gap={"0.75rem"} height={"calc(100% - 6rem)"}>
          <Sidebar emails={emailData} onBackButtonClick={() => setSelectedEmail(null)} />
          <EmailChain selectedEmail={selectedEmail} />
        </Stack>
      }
    </Stack>
  )
}

export default App
