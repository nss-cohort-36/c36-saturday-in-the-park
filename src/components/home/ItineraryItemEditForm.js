import React, { Component } from "react"

class ItineraryItemEditForm extends Component {

  state = {
    starttime: "",
    attractionName: ""
  }

  componentDidMount() {
    this.getItineraryItem()
  }
  
  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.name] = evt.target.value
    this.setState(stateToChange)
  }

  getItineraryItem = () => {
    fetch(`http://localhost:8000/itineraryitems/${this.props.match.params.itemId}`, {
      "method": "GET",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
      }
      })
    .then(response => response.json())
    .then(item => {
        this.setState({
          starttime: item.starttime,
          attractionName: item.attraction.name
        })
    })
  }

  updateItineraryItem = () => {
    fetch(`http://localhost:8000/itineraryitems/${this.props.match.params.itemId}`, {
      "method": "PUT",
      "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
      },
      "body": JSON.stringify({
        "ride_id": this.props.match.params.itemId,
        "starttime": this.state.starttime
      })
    })
    .then(() => {
        this.props.history.push("/myitinerary")
    })
  }

  render() {
    // console.log(this.props.match.params.itemId)
    return (
      <>
        <label htmlFor="starttime">When do you want to ride {this.state.attractionName}?</label>
        <input
          onChange={this.handleInputChange}
          type="text" name="starttime"
          value={this.state.starttime} 
          autoFocus required />

        <button onClick={this.updateItineraryItem}>Update Itinerary</button>
      </>
    )
  }
}

export default ItineraryItemEditForm
