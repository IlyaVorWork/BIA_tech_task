import {Box, Highlight} from "@chakra-ui/react";
import {CustomCellRendererProps} from "ag-grid-react";
import {FunctionComponent} from "react";

const DateCell: FunctionComponent<CustomCellRendererProps> = ({valueFormatted}) => {

  return (
    <Box>
      <Highlight query={valueFormatted!} styles={{ backgroundColor: "#F4F4F4", padding: "0.25rem 0.5rem", borderRadius: "0.375rem", color: "#7B7B7B", fontSize: "0.875rem" }}>
        {valueFormatted!}
      </Highlight>
    </Box>
  )
}

export default DateCell;