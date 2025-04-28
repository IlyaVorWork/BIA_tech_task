import {FunctionComponent, useCallback, useEffect, useState} from "react";
import {Box, Button, Center, For, Input, Stack, Text, Wrap} from "@chakra-ui/react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import styles from "./DateFilterWindow.module.css"
import DayButton from "@/components/filters/DateFilterWindow/dayButton/DayButton.tsx";
import {format} from "date-fns";

const months = [
  'Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

const isToday: (year: number, month: number, day: number) => boolean = (year, month, day) => {
  const today = new Date();
  const date = new Date(year, month, day);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

const DateFilterWindow: FunctionComponent = () => {

  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())

  const [daysCount, setDaysCount] = useState<number>(new Date(currentYear, currentMonth, 0).getDate())
  const [daysOffset, setDaysOffset] = useState<number>(new Date(currentYear, currentMonth, 0).getDay() > 0 ? new Date(currentYear, currentMonth, 0).getDay() : 6)

  const [fromDate, setFromDate] = useState<Date | null>(null)
  const [toDate, setToDate] = useState<Date | null>(null)

  useEffect(() => {
    const chosenDate = new Date(currentYear, currentMonth, 0)
    setDaysOffset(chosenDate.getDay() > 0 ? chosenDate.getDay() : 6)
    setDaysCount(new Date(currentYear, currentMonth + 1, 0).getDate())
  }, [currentMonth, currentYear]);

  const handleDateSelect = useCallback((day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day)
    if (!fromDate && !toDate) {
      setFromDate(selectedDate)
      setToDate(selectedDate)
    }
    if (selectedDate < fromDate!) {
      setFromDate(selectedDate)
    } else {
      setToDate(selectedDate)
    }
  }, [currentMonth, currentYear, fromDate, toDate])

  const isSelected = useCallback((year: number, month: number, day: number) => {
    const date = new Date(year, month, day)

    if (!fromDate && !toDate) return false

    return (fromDate! < date && date < toDate! || fromDate?.getTime() === date.getTime() || toDate?.getTime() === date.getTime())
  }, [fromDate, toDate])

  const isLeftEdge = useCallback((year: number, month: number, day: number) => {
    const date = new Date(year, month, day)

    if (!fromDate) return false

    return (fromDate?.getTime() === date.getTime())
  }, [fromDate])

  const isRightEdge = useCallback((year: number, month: number, day: number) => {
    const date = new Date(year, month, day)

    if (!toDate) return false

    return (toDate?.getTime() === date.getTime())
  }, [toDate])

  useEffect(() => {
    console.log(fromDate, toDate)
  }, [fromDate, toDate]);

  return (
    <Stack width={"19rem"} padding={"1rem"} gap={"0.75rem"} bg={"#FFFFFF"} color={"#1C1D1E"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} gap={"0.25rem"} alignItems={"center"}>
          <MdChevronLeft className={`${styles.dateFilterChevronIcon} ${currentMonth == 0 ? styles.disabled : ""}`} fontSize={"1.25rem"}
                         onClick={() => {
                           if (currentMonth != 0) setCurrentMonth(prev => prev - 1)
                         }}/>
          <Text fontWeight={"500"} width={"4.75rem"} textAlign={"center"}>{months[currentMonth]}</Text>
          <MdChevronRight className={`${styles.dateFilterChevronIcon} ${currentMonth == 11 ? styles.disabled : ""}`} onClick={() => {
            if (currentMonth != 11) setCurrentMonth(prev => prev + 1)
          }}/>
        </Stack>
        <Stack direction={"row"} gap={"0.25rem"} alignItems={"center"}>
          <MdChevronLeft className={`${styles.dateFilterChevronIcon}`} fontSize={"1.25rem"}
                         onClick={() => setCurrentYear(prev => prev - 1)}/>
          <Text fontWeight={"500"} width={"2.5rem"} textAlign={"center"}>{currentYear}</Text>
          <MdChevronRight className={`${styles.dateFilterChevronIcon}`} onClick={() => setCurrentYear(prev => prev + 1)}/>
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={"0.5rem"} justifyContent={"space-between"} alignItems={"center"}>
        <For each={daysOfWeek}>
          {(day) => (
            <Center fontSize={"0.875rem"} width={"2rem"}>{day.slice(0, 1)}</Center>
          )}
        </For>
      </Stack>
      <Wrap gap={"0.5rem"}>
        <For each={Array.from({length: daysOffset}, (_, i) => i)}>
          {() => (
            <Box width={"2rem"} height={"2rem"}/>
          )}
        </For>
        <For each={Array.from({length: daysCount}, (_, i) => i + 1)}>
          {(day) => (
            <DayButton isSelected={isSelected(currentYear, currentMonth, day)}
                       isLeftEdge={isLeftEdge(currentYear, currentMonth, day)}
                       isRightEdge={isRightEdge(currentYear, currentMonth, day)}
                       isMonday={new Date(currentYear, currentMonth, day).getDay() === 1}
                       isSunday={new Date(currentYear, currentMonth, day).getDay() === 0}
                       isToday={isToday(currentYear, currentMonth, day)}
                       day={day} onDateSelect={handleDateSelect}/>
          )}
        </For>
      </Wrap>
      <Stack direction={"row"}>
        <Input variant={"outline"} color={"#7B7B7B"} border={"1px solid #E2E8F0"}
               bg={"#FFFFFF"}
               height={"1.5rem"}
               padding={"0 0.5rem"}
               placeholder={"Начальная дата"}
                value={fromDate ? format(fromDate, "dd.MM.yyyy") : ""}/>
        -
        <Input variant={"outline"} color={"#7B7B7B"} border={"1px solid #E2E8F0"}
               bg={"#FFFFFF"}
               height={"1.5rem"}
               padding={"0 0.5rem"}
               placeholder={"Конечная дата"}
               value={toDate ? format(toDate, "dd.MM.yyyy") : ""}/>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} height={"1.5rem"}>
        <Button onClick={() => {
          setFromDate(null)
          setToDate(null)
        }}
                borderRadius={"0.375rem"}
                padding={"0.25rem 0.5rem"}
                bg={"#EDF2F7"}
                color={"#1A202C"}
                fontWeight={"600"}
                fontSize={"0.75rem"}
                height={"100%"}>Отменить</Button>
        <Button borderRadius={"0.375rem"} padding={"0.25rem 0.5rem"} bg={"#3182CE"} color={"#FFFFFF"}
                fontWeight={"600"}
                fontSize={"0.75rem"}
                height={"100%"}>Применить</Button>
      </Stack>
    </Stack>
  )
}

export default DateFilterWindow