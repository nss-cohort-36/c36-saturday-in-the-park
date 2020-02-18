import React, { Component} from "react"
import AreaList from "./AreaList"

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
      fetch("http://localhost:8000/parkareas", {
        "headers": {
          "Accept": "application/json"
        }
      })
      .then(response => response.json())
      .then(response => this.setState({areas: response}))
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
