import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useLocation, useHistory } from "react-router-dom";
import "./index.css";

export default function PaginationList({ currentPage }) {
  let queryPage = new URLSearchParams(window.location.search);

  let currentPageNum = queryPage.get("page")
    ? Number(queryPage.get("page"))
    : 1;

  const [page, setPage] = React.useState(currentPageNum);
  let history = useHistory();
  const handleChange = (event, value) => {
    setPage(value);
    currentPage(value);
    queryPage.set("page", value);
    history.push(window.location.pathname + "?" + queryPage.toString());
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
