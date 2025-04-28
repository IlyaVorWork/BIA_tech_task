import {FunctionComponent} from "react";
import {Center} from "@chakra-ui/react";
import styles from "./DayButton.module.css"

interface DayButtonProps {
  day: number;
  isSelected: boolean;
  isLeftEdge: boolean;
  isRightEdge: boolean;
  isMonday: boolean;
  isSunday: boolean;
  isToday: boolean;
  onDateSelect: (day: number) => void;
}

const DayButton: FunctionComponent<DayButtonProps> = ({
                                                        day,
                                                        isToday,
                                                        isSelected,
                                                        isLeftEdge,
                                                        isRightEdge,
                                                        isMonday,
                                                        isSunday,
                                                        onDateSelect
                                                      }) => {
  return (
    <Center onClick={() => onDateSelect(day)}
            className={`${styles.dayButtonWrapper} 
            ${isSelected ? styles.selected : ""}
            ${isMonday ? styles.monday : ""}
            ${isSunday ? styles.sunday : ""}`}>
      <Center
        className={`${styles.dayButton} ${isToday ? styles.today : ""} 
        ${isLeftEdge ? styles.leftEdge : ""} 
        ${isRightEdge ? styles.rightEdge : ""}`}>
        {day}
      </Center>
    </Center>
  )
}

export default DayButton