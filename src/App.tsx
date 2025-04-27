import './App.css'
import {Stack} from "@chakra-ui/react";
import Header from "@/components/Header.tsx";
import EmailGrid from "@/components/EmailGrid.tsx";

function App() {

  return (
    <Stack width={"100%"} height={"100%"} gap={"1.25rem"}>
      <Header/>
      <EmailGrid />
    </Stack>
  )
}

export default App
