import {FunctionComponent, useMemo, useRef, useState} from "react";
import {AgGridReact} from "ag-grid-react";
import EmailPagination from "@/components/EmailPagination.tsx";
import {Email} from "@/types/Email.ts";
import {format} from "date-fns";
import DateCell from "@/components/emailGrid/cells/dateCell/DateCell.tsx";
import EmailAddressCell from "@/components/EmailAddressCell.tsx";
import AttachmentHeader from "@/components/AttachmentHeader.tsx";
import {ColDef} from "ag-grid-community"
import "./EmailGrid.css"
import {Stack} from "@chakra-ui/react";

interface EmailGridProps {
  rowsData: Email[];
  setSelectedEmail: React.Dispatch<React.SetStateAction<Email | null>>;
}

const EmailGrid: FunctionComponent<EmailGridProps> = ({rowsData, setSelectedEmail}) => {

  const gridRef = useRef<AgGridReact>(null);

  const defaultColDef = useMemo(() => {
    return {
      sortable: false,
      resizable: false,
      cellStyle: {lineHeight: "3.5rem", color: "#7B7B7B", fontSize: "0.875rem"},
      headerCellStyle: {color: "#1C1D1E"}
    };
  }, []);

  const [colDefs] = useState<ColDef<Email>[]>([
    {
      field: "subject", headerName: "Тема", width: 350, cellClass: "theme-cell"
    },
    {
      field: "date",
      headerName: "Дата",
      sortable: true,
      valueFormatter: p => format(p.value, "dd.MM.yyyy HH:mm"),
      sortingOrder: ["desc", "asc"],
      cellRenderer: DateCell,
    },
    {
      field: "to", headerName: "Кому", width: 300, cellRenderer: EmailAddressCell, cellRendererParams: {
        variant: "to"
      }
    },
    {
      field: "from", headerName: "От кого", width: 300, cellRenderer: EmailAddressCell, cellRendererParams: {
        variant: "from"
      }
    },
    {
      field: "attachments",
      headerName: "Вложения",
      width: 150,
      headerComponent: AttachmentHeader,
      cellStyle: {textAlign: "center"}
    },
    {field: "messages", headerName: `Сообщений: ${rowsData.length}`, minWidth: 150, flex: 1},
  ]);

  return (
    <Stack gap={"1rem"} height={"calc(100% - 5.75rem)"}>
      <AgGridReact
        ref={gridRef}
        rowData={rowsData}
        defaultColDef={defaultColDef}
        columnDefs={colDefs}
        suppressCellFocus={true}
        suppressRowClickSelection={true}
        rowHeight={56}
        suppressPaginationPanel={true}
        paginationPageSize={14}
        pagination={true}
        onRowClicked={(e) => setSelectedEmail(e.data)}
      />
      <EmailPagination count={rowsData.length} pageSize={14} defaultPage={1} onPageChange={(details) => {
        gridRef.current!.api.paginationGoToPage(details.page - 1);
      }}/>
    </Stack>
  )
}

export default EmailGrid;