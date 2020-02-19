import React, { Component } from "react"

class ItineraryItemForm extends Component {

  state = {
    starttime: null
  }
  
  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.name] = evt.target.value
    this.setState(stateToChange)
  }

  addToItinerary = () => {
    fetch('http://localhost:8000/itineraryitems', {
      "method": "POST",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
      },
      "body": JSON.stringify({
        "ride_id": this.props.location.state.attraction.id,
        "starttime": Number(this.state.starttime)
      })
    })
    .then(response => response.json())
    .then(() => {
        this.props.history.push("/itineraryitems")
    })
  }

  render() {
    // console.log(this.props.location.state.attraction)
    return (
      <>
        <label htmlFor="starttime">When do you want to ride {this.props.location.state.attraction.name}?</label>
        <input
          onChange={this.handleInputChange}
          type="text" name="starttime" autoFocus required />

        <button onClick={this.addToItinerary}>Add to Itinerary</button>
      </>
    )
  }
}

export default ItineraryItemForm
