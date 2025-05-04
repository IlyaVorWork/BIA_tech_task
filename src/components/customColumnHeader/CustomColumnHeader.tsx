import { Popover, Portal, Stack, Text } from "@chakra-ui/react";
import { CustomHeaderProps } from "ag-grid-react";
import { FunctionComponent, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./CustomColumnHeader.module.css";
import { IconType } from "react-icons";
import CustomCheckbox from "@/components/checkbox/CustomCheckbox.tsx";

type SortDirection = "asc" | "desc";

interface CustomColumnHeaderProps extends CustomHeaderProps {
  checkboxFilter: boolean;
  iconFilter: boolean;
  IconFilterComponent?: IconType;
  FilterWindowComponent?: FunctionComponent;
}

const CustomColumnHeader: FunctionComponent<CustomColumnHeaderProps> = ({
  displayName,
  column,
  enableSorting,
  setSort,
  checkboxFilter,
  iconFilter,
  IconFilterComponent,
  FilterWindowComponent,
}) => {
  const [columnSort, setColumnSort] = useState<SortDirection>("desc");

  const onSortChanged = () => {
    const sort = column.getSort();
    setColumnSort(sort === "asc" ? "asc" : "desc");
  };

  useEffect(() => {
    if (!enableSorting) return;
    column.addEventListener("sortChanged", onSortChanged);
    setSort("desc");
  }, []);

  return (
    <Stack className={styles.dateColumnHeader}>
      {checkboxFilter && <CustomCheckbox variant={"dark"} />}
      <Text>{displayName}</Text>
      {enableSorting &&
        (columnSort === "desc" ? (
          <MdKeyboardArrowDown
            className={styles.sortIcon}
            onClick={() => setSort("asc")}
          />
        ) : (
          <MdKeyboardArrowUp
            className={styles.sortIcon}
            onClick={() => setSort("desc")}
          />
        ))}
      {iconFilter && IconFilterComponent && FilterWindowComponent && (
        <Popover.Root>
          <Popover.Trigger>
            <IconFilterComponent className={styles.filterIcon} />
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content className={styles.filterPopover}>
                <FilterWindowComponent />
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      )}
    </Stack>
  );
};

export default CustomColumnHeader;
