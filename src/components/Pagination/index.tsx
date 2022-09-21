import { Container, PaginationButton } from "./styles";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  visiblePages: number;
  change: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  if (!props.totalPages) return null;

  const visiblePages = Math.min(props.totalPages, props.visiblePages);
  const firstPage = getFirstPage();

  function getFirstPage() {
    let result = props.currentPage - Math.floor(visiblePages / 2);
    result = Math.max(result, 1);
    result = Math.min(result, props.totalPages - (visiblePages - 1));
    return result;
  }

  return (
    <Container>
      <PaginationButton
        disabled={props.currentPage === 1}
        onClick={() => props.change(props.currentPage - 1)}
      >
        &#60;
      </PaginationButton>

      {firstPage > 2 && (
        <>
          <PaginationButton key={`page ${1}`} onClick={() => props.change(1)}>
            1
          </PaginationButton>
          <PaginationButton disabled widthoutBorder>
            ...
          </PaginationButton>
        </>
      )}

      {new Array(visiblePages).fill(0).map((_, index) => {
        const page = index + firstPage;
        const isSelected = page === props.currentPage;

        return (
          <PaginationButton
            key={`page ${page}`}
            isSelected={isSelected}
            onClick={() => props.change(page)}
          >
            {page}
          </PaginationButton>
        );
      })}

      {firstPage + visiblePages < props.totalPages && (
        <>
          <PaginationButton disabled widthoutBorder>
            ...
          </PaginationButton>
          <PaginationButton
            key={`page ${props.totalPages}`}
            onClick={() => props.change(props.totalPages)}
          >
            {props.totalPages}
          </PaginationButton>
        </>
      )}

      <PaginationButton
        onClick={() => props.change(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
      >
        &#62;
      </PaginationButton>
    </Container>
  );
}
