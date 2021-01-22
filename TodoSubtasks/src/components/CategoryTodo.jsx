import {  Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksData } from "../Redux/action";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import { toggleSubtasksData } from "../Redux/action";

const CategoryTodo = ({ name }) => {
	const todo = useSelector((state) => state.todo);
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTasksData());
	}, []);
	console.log(todo, "before");
	const todoTasks = todo.filter((item) => item.category === `${name}`);

	const handleEdit = (id, item) => {
		history.push({
			pathname: `/edit-task/${id}`,
			state: { item: item },
		});
	};
	const handleToggle = (taskObj, subTaskId) => {
		let newTodo = taskObj.subtask.map((ele) =>
			ele.id == subTaskId ? { ...ele, status: !ele.status } : ele
		);
		dispatch(toggleSubtasksData(newTodo, taskObj.id));
	};
	return (
		<>
			<Typography variant='h3' color='secondary'>
				{name}
			</Typography>
			{todoTasks &&
				todoTasks.map((item) => {
					return (
						<Box key={item.id}>
							<Typography variant='h6' color='primary'>
								{item.title}
								<EditIcon onClick={() => handleEdit(item.id, item)} />
							</Typography>
							{item.subtask &&
								item.subtask.map((subTask) => (
									<ListItem key={subTask.id} role={undefined} dense button>
										<ListItemIcon>
											<Checkbox
												edge='start'
												tabIndex={-1}
												disableRipple
												checked={subTask.status}
												onChange={() => handleToggle(item, subTask.id)}
											/>
										</ListItemIcon>
										<ListItemText primary={subTask.title} />
									</ListItem>
								))}
						</Box>
					);
				})}
		</>
	);
};
export default CategoryTodo;
