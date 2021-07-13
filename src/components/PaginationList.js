import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function PaginationList({currentPage}) {
  const [page, setPage] = React.useState(1);
  let queryPage = new URLSearchParams(useLocation().search);

  const handleChange = (event, value) => {
    setPage(value);
    queryPage.set("page", page);
    currentPage(value)
  };

  return (
    <div>
      {page}
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
