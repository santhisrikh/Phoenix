import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateSubTask from "./CreateSubTask";
import { postTaskData } from "../Redux/action";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

const CreateTaskPage = () => {
	const initState = {
		title: "",
		description: "",
		subtask: [],
		category: "",
		personal:false,
		official:false,
		others:false,
		date: "",
	};
	const classes = useStyles();
	const [state, setMyState] = useState(initState);
	const todo = useSelector((state) => state.todo);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleChange = (e, payload) => {
		console.log(payload);
		const { name, value, type,checked } = e.target;
		console.log(checked,"checked")
		const newValue = type === "checkbox"? checked: value;
		setMyState((prevState) => ({
			...prevState,
			[name]: newValue,
		}));
	};
	const handleSubTask = (payload) => {
		console.log(payload, "subtasks");
		const value = payload ? payload : [...state.subtask];
		setMyState((prevState) => ({
			...prevState,
			subtask: value,
		}));
	};
	const handleClick = () => {
		// const {title,description,subtask,category,tags} = state
		console.log(state);
		dispatch(postTaskData(state)).then(history.push("/"));
	};
	return (
		<>
			<form className={classes.root}>
				<div style={{ display: "flex" }}>
					<div>
						<div>
							<TextField
								type='text'
								label='Enter title'
								variant='outlined'
								value={state.title}
								name='title'
								onChange={handleChange}
							/>
						</div>
						<div>
							<TextField
								type='text'
								label='Enter description'
								variant='outlined'
								value={state.description}
								name='description'
								onChange={handleChange}
							/>
						</div>
						<div>
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Category</FormLabel>
								<RadioGroup
									aria-label='category'
									name='category'
									value={state.category}
									onChange={handleChange}
								>
									<FormControlLabel value='Todo' control={<Radio />} label='Todo' />
									<FormControlLabel value='Progress' control={<Radio />} label='Progress' />
									<FormControlLabel value='Done' control={<Radio />} label='Done' />
								</RadioGroup>
							</FormControl>
						</div>
						<div>
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Tags</FormLabel>
								<FormControlLabel
									control={
										<Checkbox
											value={state.official}
											onChange={handleChange}
											name='official'
											checked={state.official}
										/>
									}
									label='Official'
								/>
								<FormControlLabel
									control={
										<Checkbox
											value={state.personal}
											onChange={handleChange}
											name='personal'
											checked={state.personal}
										/>
									}
									label='Personal'
								/>
								<FormControlLabel
									control={
										<Checkbox
											value={state.others}
											onChange={handleChange}
											name='others'
											checked={state.others}
										/>
									}
									label='Others'
								/>
							</FormControl>
						</div>
					</div>
					<div>
						<CreateSubTask handleSubTask = {handleSubTask} taskId='' />
					</div>
					<div>
						<TextField
							id='date'
							label='task added'
							value={state.date}
							type='date'
							name='date'
							onChange={handleChange}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</div>
				</div>
			</form>
			<Button variant='contained' color='primary' onClick={handleClick}>
				Submit
			</Button>
		</>
	);
};
export default CreateTaskPage;
