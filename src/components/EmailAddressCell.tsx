import {Box, Highlight} from "@chakra-ui/react";
import {CustomCellRendererProps} from "ag-grid-react";
import {FunctionComponent, useEffect, useState} from "react";

export interface EmailCellProps extends CustomCellRendererProps {
  variant: "from" | "to";
}

const EmailAddressCell: FunctionComponent<EmailCellProps> = ({value, variant}) => {

  const [displayValue, setDisplayValue] = useState<string>("")

  useEffect(() => {
    setDisplayValue(variant === "from" ? "От кого: " + value : "Кому: " + value)
  }, [variant, value]);

  return (
    <Box style={{ color: "#7B7B7B", fontSize: "0.875rem"}}>
      <Highlight query={value} styles={{ color: "#3182CE", fontSize: "0.875rem" }}>
        {displayValue}
      </Highlight>
    </Box>
  )
}

export default EmailAddressCell;