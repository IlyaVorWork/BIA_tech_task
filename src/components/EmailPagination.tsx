import {ButtonGroup, IconButton, Pagination} from "@chakra-ui/react";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";
import {FunctionComponent} from "react";
import {PageChangeDetails} from "@zag-js/pagination";

interface PaginationProps {
  count: number;
  pageSize: number;
  defaultPage: number;
  onPageChange: (details: PageChangeDetails) => void;
}

const EmailPagination: FunctionComponent<PaginationProps> = ({count, pageSize, defaultPage, onPageChange}) => {
  return (
    <Pagination.Root count={count} pageSize={pageSize} defaultPage={defaultPage} onPageChange={onPageChange}>
      <ButtonGroup variant="ghost" size="xs">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft/>
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{base: "ghost", _selected: "outline"}} css={{
              _selected: {
                border: "1px solid #FFFFFF"
              }
            }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight/>
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}

export default EmailPagination;