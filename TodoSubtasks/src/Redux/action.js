import {
	POST_TASK_REQ,
	POST_TASK_SUCCESS,
	POST_TASK_FAILURE,
	GET_TASKS_REQ,
	GET_TASKS_SUCCESS,
	GET_TASKS_FAILURE,
	EDIT_TASK_REQ,
	EDIT_TASK_SUCCESS,
	EDIT_TASK_FAILURE,
	TOGGLE_SUBTASK_FAILURE,
	TOGGLE_SUBTASK_REQ,
	TOGGLE_SUBTASK_SUCCESS,
	ADD_SUBTASK_FAILURE,
	ADD_SUBTASK_REQ,
	ADD_SUBTASK_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const postTaskReq = () => ({
	type: POST_TASK_REQ,
});
export const postTaskSuccess = (payload) => ({
	type: POST_TASK_SUCCESS,
	payload,
});
export const postTaskFailure = () => ({
	type: POST_TASK_FAILURE,
});
export const postTaskData = (payload) => (dispatch) => {
	dispatch(postTaskReq());
	return axios({
		method: "POST",
		url: "https://mock-heroku-test.herokuapp.com/todo",
		data: payload,
	})
		.then((res) => dispatch(getTasksData()))
		.catch((err) => dispatch(postTaskFailure(err)));
};
export const getTasksReq = () => ({
	type: GET_TASKS_REQ,
});
export const getTasksSuccess = (payload) => ({
	type: GET_TASKS_SUCCESS,
	payload,
});
export const getTasksFailure = () => ({
	type: GET_TASKS_FAILURE,
});
export const getTasksData = (payload) => (dispatch) => {
	dispatch(getTasksReq());
	return axios({
		method: "GET",
		url: "https://mock-heroku-test.herokuapp.com/todo",
	})
		.then((res) => dispatch(getTasksSuccess(res.data)))
		.catch((err) => dispatch(getTasksFailure(err)));
};

export const editTasksReq = () => ({
	type: EDIT_TASK_REQ,
});
export const editTasksSuccess = (payload) => ({
	type: EDIT_TASK_SUCCESS,
	payload,
});
export const editTasksFailure = () => ({
	type: EDIT_TASK_FAILURE,
});
export const editTasksData = (payload, id) => (dispatch) => {
	console.log(payload, id, "action");
	dispatch(editTasksReq());
	return axios({
		method: "patch",
		url: "https://mock-heroku-test.herokuapp.com/todo/" + Number(id),
		data: payload,
	})
		.then((res) => dispatch(getTasksData()))
		.catch((err) => dispatch(editTasksFailure(err)));
};


export const toggleSubtasksReq = () => ({
	type: TOGGLE_SUBTASK_REQ,
});
export const toggleSubtasksSuccess = (payload) => ({
	type: TOGGLE_SUBTASK_SUCCESS,
	payload,
});
export const toggleSubtasksFailure = () => ({
	type: TOGGLE_SUBTASK_FAILURE,
});
export const toggleSubtasksData = (payload,taskId) => (dispatch) => {
  // const newData = payload.subtask.map(task=>task.id == subTaskId?{...task,status:!task.status}:task)
	// console.log(newData, "toggle");
	dispatch(toggleSubtasksReq());
	return axios({
		method: "Patch",
		url: "https://mock-heroku-test.herokuapp.com/todo/" + Number(taskId),
		data: {
      subtask:payload
    },
	})
		.then((res) => dispatch(getTasksData()))
		.catch((err) => dispatch(toggleSubtasksFailure(err)));
};

export const addSubtasksReq = () => ({
	type: ADD_SUBTASK_REQ,
});
export const addSubtasksSuccess = (payload) => ({
	type: ADD_SUBTASK_SUCCESS,
	payload,
});
export const addSubtasksFailure = () => ({
	type: ADD_SUBTASK_FAILURE,
});
export const addSubtasksData = (payload,taskId) => (dispatch) => {
  // const newData = payload.subtask.map(task=>task.id == subTaskId?{...task,status:!task.status}:task)
	// console.log(newData, "ADD");
	dispatch(addSubtasksReq());
	return axios({
		method: "Patch",
		url: "https://mock-heroku-test.herokuapp.com/todo/" + Number(taskId),
		data: {
      subtask:payload
    },
	})
		.then((res) => dispatch(getTasksData()))
		.catch((err) => dispatch(addSubtasksFailure(err)));
};
