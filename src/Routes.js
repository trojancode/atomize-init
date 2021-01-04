
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'
import Dashboard from './Routes/Dashboard'
import AdminDashboard from './Routes/Admin/AdminDashboard'
import AdminRoute from './core/AdminRoute'
import Teachers from './Routes/Admin/Teachers'
import Department from './Routes/Admin/Department'
import Program from './Routes/Admin/Program'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/dashboard" exact component={Dashboard}></Route>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}></AdminRoute>
                <AdminRoute path="/admin/teachers" exact component={Teachers}></AdminRoute>
                <AdminRoute path="/admin/department" exact component={Department}></AdminRoute>
                <AdminRoute path="/admin/program" exact component={Program}></AdminRoute>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
