import React from "react"
import {Route} from "react-router-dom"
import CreateTaskPage from "../components/CreateTaskPage"
import Dashboard from "../components/Dashboard"
import Navbar from "../components/Navbar"
import Summary from "../components/Summary"
import EditTask from "../components/EditTask"


const Routes = () => {
  return(
    <div>
    <Route path = "/" component = {Navbar} />
    <Route path = "/" exact component = {Dashboard} />
    <Route path = "/create-task" component = {CreateTaskPage}/>
    <Route path = "/summary" component = {Summary} />
    <Route path = "/edit-task/:id" component = {EditTask}/>
    </div>
  )

}
export default Routes