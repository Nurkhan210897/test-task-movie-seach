import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
import "./index.css";

export default function PaginationList({ currentPage }) {
  let URLPARAMS = new URLSearchParams(window.location.search);

  let currentPageNum = URLPARAMS.get("page")
    ? Number(URLPARAMS.get("page"))
    : 1;

  const [page, setPage] = React.useState(currentPageNum);
  let history = useHistory();
  const handleChange = (event, value) => {
    setPage(value);
    currentPage(value);
    URLPARAMS.set("page", value);
    history.push(window.location.pathname + "?" + URLPARAMS.toString());
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
