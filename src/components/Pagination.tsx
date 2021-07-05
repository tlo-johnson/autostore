import ReactPaginate from "react-paginate";
import "./Pagination.css";

interface PaginationProps {
  numPages: number;
}

const Pagination = (props: PaginationProps) => {
  const { numPages } = props;

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
    />
  );
};

export default Pagination;
