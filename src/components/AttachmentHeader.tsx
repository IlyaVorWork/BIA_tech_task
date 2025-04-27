import {Checkbox, Stack, Text} from "@chakra-ui/react";
import {CustomHeaderProps} from "ag-grid-react";
import {FunctionComponent} from "react";

export interface AttachmentHeaderProps extends CustomHeaderProps {
  menuIcon: string;
}

const AttachmentHeader: FunctionComponent<AttachmentHeaderProps> = ({displayName}) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"0"}>
      <Checkbox.Root>
        <Checkbox.HiddenInput/>
        <Checkbox.Control>
          <Checkbox.Indicator/>
        </Checkbox.Control>
        <Checkbox.Label><span data-ref="eText" className="ag-header-cell-text"></span></Checkbox.Label>
      </Checkbox.Root>
      <Text>{displayName}</Text>
    </Stack>
  )
}

export default AttachmentHeader;