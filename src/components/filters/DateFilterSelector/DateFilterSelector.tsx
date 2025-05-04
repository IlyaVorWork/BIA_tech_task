import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import DateFilterWindow from "@/components/filters/DateFilterWindow/DateFilterWindow.tsx";
import styles from "./DateFilterSelector.module.css";

const DateFilterSelector: FunctionComponent = () => {
  const items = createListCollection({
    items: [],
  });

  return (
    <Select.Root
      className={styles.dateFilterSelector}
      variant={"outline"}
      collection={items}
      positioning={{
        placement: "bottom",
        offset: { mainAxis: -40, crossAxis: 10 },
      }}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          borderRadius={"0.375rem"}
          padding={"0.375rem 0.75rem"}
          color={"#7B7B7B"}
          bg={"#ffffff"}
          border={"none"}
        >
          <Select.ValueText fontSize={"0.875rem"} placeholder={"по дате"} />
        </Select.Trigger>
        <Select.IndicatorGroup marginRight={"0.75rem"}>
          <Select.Indicator color={"#1C1D1E"} />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content
            maxHeight={"none"}
            bg={"transparent"}
            borderRadius={"0.75rem"}
          >
            <DateFilterWindow />
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default DateFilterSelector;
