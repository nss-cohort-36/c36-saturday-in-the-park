import React, { Component } from "react"
import AreaList from "./AreaList"
import { isAuthenticated } from "../helpers/simpleAuth"

class ParkExplorer extends Component {

  state = {
    areas: []
  }

  componentDidMount() {
    this.getParkAreas()
  }

  getParkAreas = () => {
    // get all park areas
    // set state with new data for park areas
    if (isAuthenticated()) {
      fetch("http://localhost:8000/parkareas", {
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then(response => this.setState({ areas: response }))
    }
  }

  render() {
    return (
      <>
        <main className="explorer">
          <AreaList areas={this.state.areas} />
        </main>
      </>
    )
  }
}

export default ParkExplorer
