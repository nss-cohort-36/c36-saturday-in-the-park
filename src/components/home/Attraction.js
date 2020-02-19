import React, { Component } from "react"
import { Link } from "react-router-dom"

class Attraction extends Component {

  state = {
    starttime: null
  }

  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.name] = evt.target.value
    console.log("this", this)
    this.setState(stateToChange)
  }

  render() {
    return (
      <>
        <Link to={{
          pathname: '/myitinerary/new',
          state: {
            attraction: this.props.ride
          }
        }}>{this.props.ride.name}
        </Link>
      </>
    )
  }
}

export default Attraction
