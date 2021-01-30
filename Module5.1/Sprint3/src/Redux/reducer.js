import {GET_RESTAURANTS_REQ,GET_RESTAURANTS_SUCCESS,GET_RESTAURANTS_FAILURE} from "./actionTypes"

const initState = {
  isLoading:false,
  data:[],
  isError:[],
  results_found:0
}
export const reducer = (state=initState,{type,payload})=>{
  switch(type){
    case GET_RESTAURANTS_REQ:
      return{
        ...state,
        isLoading:true
      }
      case GET_RESTAURANTS_SUCCESS:
        return {
          ...state,
          isLoading:false,
          data:payload.restaurants,
          results_found:payload.results_found
        }
        case GET_RESTAURANTS_FAILURE:
          return {
            ...state,
            isError:true,
            isLoading:false
          }
      default:
        return state
  }
}