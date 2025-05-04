import { Checkbox, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import styles from "./CustomCheckbox.module.css";

interface CustomCheckbox {
  label?: string;
  variant: "dark" | "light";
}

const CustomCheckbox: FunctionComponent<CustomCheckbox> = ({
  label,
  variant,
}) => {
  return (
    <Checkbox.Root className={styles.checkboxRoot}>
      <Checkbox.HiddenInput />
      <Checkbox.Control
        className={`${styles.checkboxControl} ${variant === "dark" ? styles.black : styles.whitet}`}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator} />
      </Checkbox.Control>
      {label && (
        <Checkbox.Label>
          <Text className={styles.checkboxLabel}>{label}</Text>
        </Checkbox.Label>
      )}
    </Checkbox.Root>
  );
};

export default CustomCheckbox;
