import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useLocation } from "react-router-dom";
import './index.css'

export default function PaginationList({ currentPage }) {
  const [page, setPage] = React.useState(1);
  let queryPage = new URLSearchParams(useLocation().search);

  const handleChange = (event, value) => {
    setPage(value);
    queryPage.set("page", page);
    currentPage(value);
  };

  return (
    <div className="paginations_wrapper">
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={handleChange}
      />{" "}
    </div>
  );
}
