import "./App.css";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/header/Header.tsx";
import EmailGrid from "@/components/emailGrid/EmailGrid.tsx";
import { createContext, useState } from "react";
import { Email, mockEmails } from "@/types/Email.ts";
import Sidebar from "@/components/sidebar/Sidebar.tsx";
import EmailChain from "@/components/emailChain/EmailChain.tsx";

export const EmailChainsContext = createContext<Email[]>([]);

function App() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const [emailData] = useState<Email[]>(
    mockEmails.sort((a, b) => (a.date < b.date ? 1 : -1)),
  );

  return (
    <EmailChainsContext.Provider value={emailData}>
      <Stack width={"100%"} height={"100%"} gap={"1.25rem"}>
        <Header />
        {!selectedEmail && <EmailGrid setSelectedEmail={setSelectedEmail} />}
        {selectedEmail && (
          <Stack direction={"row"} gap={"0.75rem"} height={"calc(100% - 6rem)"}>
            <Sidebar onBackButtonClick={() => setSelectedEmail(null)} />
            <EmailChain selectedEmail={selectedEmail} />
          </Stack>
        )}
      </Stack>
    </EmailChainsContext.Provider>
  );
}

export default App;
