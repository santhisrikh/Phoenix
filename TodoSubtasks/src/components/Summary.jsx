import React from "react"
import { useSelector } from "react-redux"


const Summary = () =>{
  const allTodo = useSelector(state=>state.todo)
  const todo = allTodo.filter(ele=>ele.category == "Todo").length || 0
  const progress = allTodo.filter(ele=>ele.category == "Progress").length || 0
  const done = allTodo.filter(ele=>ele.category == "Done").length || 0

 
  return(
    <>
    Todo :{todo}
    Progress :{progress}
    Done :{done}

    </>
  )

}
export default Summary