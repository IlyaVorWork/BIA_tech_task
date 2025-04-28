import {Box, Highlight} from "@chakra-ui/react";
import {CustomCellRendererProps} from "ag-grid-react";
import {FunctionComponent} from "react";
import "./DateCell.css"

const DateCell: FunctionComponent<CustomCellRendererProps> = ({valueFormatted}) => {

  return (
    <Box className={"date-cell"}>
      <Highlight query={valueFormatted!} styles={{
        backgroundColor: "var(--date-highlight-bg-color)",
        padding: "0.25rem 0.5rem",
        borderRadius: "0.375rem",
        color: "var(--date-highlight-color)",
        fontSize: "0.875rem"
      }}>
        {valueFormatted!}
      </Highlight>
    </Box>
  )
}

export default DateCell;