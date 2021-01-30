import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { getRestData } from "../Redux/actions";
import DisplayDetails from "./DisplayDetails";
import Pagination from "@material-ui/lab/Pagination";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const Dashboard = () => {
  const [q, setQuery] = useState("pizza");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("cost");
  const [order, setOrder] = useState("asc");
  const classes = useStyles();
  const data = useSelector((state) => state.data);
  const resultsFound = useSelector((state) => state.results_found);

  const dispatch = useDispatch();
  const start = 0;
  const count = 10;
  //Onclick search the resaturants based on query
  const handleClick = () => {
    dispatch(getRestData({ q, start, count, sort, order }));
  };
//onload get restaurants by default
  useEffect(() => {
    dispatch(getRestData({ q, start, count, sort, order }));
  }, []);

  //get data when any of the sort ,order and page changes
  useEffect(() => {
    const start = (page - 1) * count;
    console.log(start, count);
    dispatch(getRestData({ q, start, count, sort, order }));
  }, [sort, order, page]);
//Finding total pages based on search result keeping per page results as 10
  const totalPages = Math.ceil(resultsFound / count);
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          value={q}
          onChange={(e) => setQuery(e.target.value)}
          label="Enter query"
          variant="outlined"
        />
        <Button variant="contained" onClick={handleClick} color="primary">
          Search
        </Button>
      </form>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort By</FormLabel>
        <RadioGroup
          aria-label="Sort"
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <FormControlLabel value="cost" control={<Radio />} label="Cost" />
          <FormControlLabel value="rating" control={<Radio />} label="Rating" />
          <FormControlLabel
            value="real_distance"
            control={<Radio />}
            label="Real Distance"
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Order By</FormLabel>
        <RadioGroup
          aria-label="Order"
          name="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <FormControlLabel value="asc" control={<Radio />} label="A-Z" />
          <FormControlLabel value="desc" control={<Radio />} label="Z-A" />
        </RadioGroup>
      </FormControl>
      {/* Pagination components count is total pages so that that many buttons will get created page is the page number */}
      <Pagination
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
      {/* display details component */}
      <Grid container spacing={2} style={{ margin: "auto" }}>
        {data &&
          data.map((item) => (
            <DisplayDetails key={item.restaurant.id} item={item.restaurant} />
          ))}
      </Grid>
    </>
  );
};
export default Dashboard;
