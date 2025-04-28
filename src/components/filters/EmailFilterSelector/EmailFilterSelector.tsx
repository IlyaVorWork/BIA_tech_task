import {createListCollection, Portal, Select} from "@chakra-ui/react";
import {FunctionComponent} from "react";
import EmailFilterWindow from "@/components/filters/EmailFilterWindow/EmailFilterWindow.tsx";

interface EmailFilterProps {
  emails: string[];
  variant: "from" | "to"
}

const EmailFilterSelector: FunctionComponent<EmailFilterProps> = ({emails, variant}) => {

  const items = createListCollection({
    items: emails.map(email => ({
        label: email,
        value: email
      })
    )
  })

  return (
    <Select.Root variant={"outline"} collection={items} positioning={{ placement: "bottom", offset: {mainAxis: -40, crossAxis: 10} }}>
      <Select.HiddenSelect/>
      <Select.Control>
        <Select.Trigger fontSize={"0.875rem"} borderRadius={"0.375rem"} padding={"0.375rem 0.75rem"} color={"#7B7B7B"}
                        bg={"#ffffff"} border={"none"}>
          <Select.ValueText placeholder={variant === "from" ? "mail сотрудника" : "mail контрагента"}/>
        </Select.Trigger>
        <Select.IndicatorGroup marginRight={"0.75rem"}>
          <Select.Indicator color={"#1C1D1E"}/>
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content maxHeight={"none"} bg={"transparent"} borderRadius={"0.75rem"}>
            <EmailFilterWindow emails={emails} />
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export default EmailFilterSelector;