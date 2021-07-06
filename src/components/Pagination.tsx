import ReactPaginate from "react-paginate";
import "./Pagination.css";

interface PaginationProps {
  numPages: number;
  onPerformSearch: (pageNumber?: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { numPages, onPerformSearch } = props;

  if (!(numPages > 1)) return <div />;

  return (
    <ReactPaginate
      pageCount={numPages}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      containerClassName="pagination"
      activeClassName="current-page"
      onPageChange={({ selected }) => onPerformSearch(selected)}
    />
  );
};

export default Pagination;
