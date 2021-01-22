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
} from "./actionTypes";
  
  const initState = {
    todo: [],
    isLoading: false,
    isError: false,
    message: ""
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case POST_TASK_REQ:
        return {
          ...state,
        };
      case POST_TASK_SUCCESS:
        return {
          ...state,
          message: payload
        };
      case POST_TASK_FAILURE:
        return {
          ...state,
          isError: true
        };
      case GET_TASKS_REQ:
        return {
          ...state,
          isLoading: true
        };
      case GET_TASKS_SUCCESS:
       
        return {
          ...state,
          isLoading: false,
          todo: payload,
         
        };
      case GET_TASKS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
        case TOGGLE_SUBTASK_REQ :
          return{
            ...state,
          }
          case TOGGLE_SUBTASK_FAILURE:
            return{
              ...state,
              isError:true
            }
  
      default:
        return state;
    }
  };
  