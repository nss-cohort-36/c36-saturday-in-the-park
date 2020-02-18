import { Route } from "react-router-dom"
import React, {Component } from "react"
import { withRouter } from "react-router-dom"
import ParkExplorer from "./home/ParkExplorer"
import Register from "./auth/Register"


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
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)
