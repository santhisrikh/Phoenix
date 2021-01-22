import { Button, Checkbox, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addSubtasksData, toggleSubtasksData } from "../Redux/action";
const CreateSubTask = ({handleSubTask,taskId = null}) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch()
  const mockTodo = useSelector((state) => state.todo);
  const todoObj = mockTodo.find(ele=>ele.id == taskId) || mockTodo
  const [subTasks, setSubTasks] = useState(todoObj.subtask || []);
  const handleSubTasks = () => {
    const subTask = {
      id: uuidv4(),
      title: task,
      status: false
    };
    const newSubTasks = [...subTasks,subTask]
    setSubTasks(newSubTasks);
    handleSubTask(newSubTasks);
    // dispatch(addSubtasksData(newSubTasks,taskId))
  };
  const handleToggle = (todoObj,subTaskId) => {
    const newTodo = subTasks.map((item) =>
      item.id == subTaskId ? { ...item, status: !item.status } : item
    );
    // toggleSubtask
    handleSubTask(newTodo);
    setSubTasks(newTodo)
    dispatch(toggleSubtasksData(newTodo,todoObj.id))
  };
  console.log(subTasks,"createSub")
  return (
    <>
    <form style = {{display:"flex"}}>
      <TextField
        type="text"
        variant = "outlined"
        label = "add sub task..."
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <Button variant = "contained" color = "primary"  onClick={handleSubTasks}>Add</Button>
      </form>
      {subTasks &&
        subTasks.map(({ title, id,status }) => {
          return (
            <div key={id} style={{ display: "flex",padding:"5px" }}>
              <Checkbox checked = {status}  onChange ={()=>handleToggle(todoObj,id)} />
              <p>{title}</p>
              <button>Delete</button>
            </div>
          );
        })}
    </>
  );
};
export default CreateSubTask;
