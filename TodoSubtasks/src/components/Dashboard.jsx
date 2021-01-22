import React,{useEffect} from "react"
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CategoryTodo from "./CategoryTodo"
import {useSelector,useDispatch} from "react-redux"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "auto",
    width: "auto",
    padding :"15px"
  },
  
}));

const Dashboard = () =>{
  const classes = useStyles()
  const todo = useSelector((state) => state.todo);
  
  return (
    <>  
    <Grid container justify="center" spacing={2}>          
           {["Todo","Progress","Done"].map(category=>{
             return   <Grid item key = {category}>
              <Paper className={classes.paper}>
                <CategoryTodo  name=  {category} todo = {todo}/>
                </Paper>
            </Grid>
           }) }          
        </Grid>
    
    </>
  )
  }
export default Dashboard
