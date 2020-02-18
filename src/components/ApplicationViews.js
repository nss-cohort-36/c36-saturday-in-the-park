import { Route } from "react-router-dom"
import React, {Component } from "react"
import { withRouter } from "react-router-dom"
import ParkExplorer from "./home/ParkExplorer"
import Register from "./auth/Register"
import Login from "./auth/Login"

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            console.log("props", props)
            return <ParkExplorer {...props} />
          }}
        />
        <Route
          path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login {...props} />
          }}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)
