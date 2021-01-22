import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateSubTask from "./CreateSubTask";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {editTasksData,postTaskData} from "../Redux/action"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const EditTaskPage = () => {
  const params = useParams()
  const location = useLocation()
  console.log(params,"edit")
  console.log(location.state.item,"item")
  const {title,description,category,subtask,official,others,personal,date} = location.state.item
  console.log(title,description)
  const initState = {
    title: title|| "",
    description: description || "",
    subtask: [...subtask] || [],
    category:category ||  "",
    official:official,
    others:others,
    personal:personal,
    date :date || ""
  };
  const classes = useStyles();
  const [state, setMyState] = useState(initState);
  const todo = useSelector((state) => state.todo);
  const taskObj = todo.find(ele=>ele.id == params.id)
  console.log(todo,"edit page")
  const history = useHistory()
  const dispatch = useDispatch();
  const handleChange = (e, payload) => {
    console.log(payload);
    const { name, value, type ,checked} = e.target;
    console.log(state,"edit")
		const newValue = type === "checkbox"?checked: value;
    setMyState((prevState) => ({
      ...prevState,
      [name]: newValue
    }));
  };
  const handleSubTask = (payload) => {
    const value = payload ? payload : [...state.subtask];
    setMyState((prevState) => ({
      ...prevState,
      subtask: value
    }));
  };
  const handleClick = () => {
    // const {title,description,subtask,category,tags} = state
    console.log(state);
    dispatch(editTasksData(state,params.id)).then(history.push("/"))
  };
  console.log(state.subtask,"title",state)
  return (
    <>
      <form className={classes.root}>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <TextField
                type="text"
                label="Enter title"
                variant="outlined"
                value={state.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                type="text"
                label="Enter description"
                variant="outlined"
                value={state.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Category</FormLabel>
                <RadioGroup
                  aria-label="category"
                  name="category"
                  value={state.category}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Todo"
                    control={<Radio />}
                    label="Todo"
                  />
                  <FormControlLabel
                    value="Progress"
                    control={<Radio />}
                    label="Progress"
                  />
                  <FormControlLabel
                    value="Done"
                    control={<Radio />}
                    label="Done"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Tags</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="official"
                      onChange={handleChange}
                      name="official"
                      checked = {state.official}
                    />
                  }
                  label="Official"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="personal"
                      onChange={handleChange}
                      name="personal"
                      checked = {state.personal}
                    />
                  }
                  label="Personal"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="others"
                      onChange={handleChange}
                      name="others"
                      checked = {state.others}
                    />
                  }
                  label="Others"
                />
              </FormControl>
            </div>
          </div>
          <div>
            <CreateSubTask handleSubTask = {handleSubTask} taskId  = {params.id} />
          </div>
          <div>
						<TextField
							id='date'
              label='task added'
              value = {state.date}
              type='date'
              name = "date"
              onChange = {handleChange}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</div>
        </div>
      </form>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Submit
      </Button>
    </>
  );
};
export default EditTaskPage;
