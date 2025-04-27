import {FunctionComponent, useMemo, useRef, useState} from "react";
import {AgGridReact} from "ag-grid-react";
import EmailGridPagination from "@/components/EmailGridPagination.tsx";
import {Email, mockEmails} from "@/types/Email.ts";
import {format} from "date-fns";
import DateCell from "@/components/DateCell.tsx";
import EmailAddressCell from "@/components/EmailAddressCell.tsx";
import AttachmentHeader from "@/components/AttachmentHeader.tsx";
import {ColDef} from "ag-grid-community"

const EmailGrid: FunctionComponent = () => {

  const gridRef = useRef<AgGridReact>(null);

  const [rowsData] = useState<Email[]>(mockEmails.sort((a, b) => a.date < b.date ? 1 : -1));

  const defaultColDef = useMemo(() => {
    return {
      sortable: false,
      resizable: false,
      cellStyle: {lineHeight: "3.5rem", color: "#7B7B7B", fontSize: "0.875rem"},
      headerCellStyle: {color: "#1C1D1E"}
    };
  }, []);

  const [colDefs] = useState<ColDef<Email>[]>([
    {field: "theme", headerName: "Тема", width: 350},
    {
      field: "date",
      headerName: "Дата",
      sortable: true,
      valueFormatter: p => format(p.value, "dd.MM.yyyy HH:mm"),
      sortingOrder: ["desc", "asc"],
      cellRenderer: DateCell
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
    <>
      <AgGridReact
        ref={gridRef}
        rowData={rowsData}
        defaultColDef={defaultColDef}
        columnDefs={colDefs}
        rowSelection={"single"}
        suppressCellFocus={true}
        suppressRowClickSelection={true}
        rowHeight={56}
        suppressPaginationPanel={true}
        paginationPageSize={14}
        pagination={true}/>
      <EmailGridPagination rowsCount={rowsData.length} onPageChange={(details) => {
        gridRef.current!.api.paginationGoToPage(details.page - 1);
      }}/>
    </>
  )
}

export default EmailGrid;