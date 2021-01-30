import {GET_RESTAURANTS_REQ,GET_RESTAURANTS_SUCCESS,GET_RESTAURANTS_FAILURE} from "./actionTypes"
import axios from "axios"

export const getRestReq = () =>({
  type:GET_RESTAURANTS_REQ
})
export const getRestSuccess = (payload) =>({
  type:GET_RESTAURANTS_SUCCESS,
  payload
})
export const getRestFailure = () =>({
  type:GET_RESTAURANTS_FAILURE
})

export const getRestData = (payload)=>dispatch=>{
  dispatch(getRestReq())
  return axios({
    method:"GET",
    headers :{

      "user-key":"f1224548eeafdb1bdbbca67fbee66617",
    },
    url:"https://developers.zomato.com/api/v2.1/search",
    params :payload
  })
  .then(res=>dispatch(getRestSuccess(res.data)))
  // .then(res=>console.log(res.data))
  .catch(err=>dispatch(getRestFailure(err)))
} 

