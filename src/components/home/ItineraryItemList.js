import React, { Component } from "react"
import ItineraryItem from "./ItineraryItem"
import { isAuthenticated } from "../helpers/simpleAuth"

class ItineraryItemList extends Component {

  state = {
    itineraryItems: []
  }

  componentDidMount() {
    this.getItineraryItems()
  }

  getItineraryItems = () => {
    if (isAuthenticated()) {
      fetch('http://localhost:8000/itineraryitems', {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
      .then(response => response.json())
      .then(items => this.setState({itineraryItems: items}))
    }
  }

  render() {
    return (
      <>
        <article className="explorerList">
          {
            this.state.itineraryItems.map(item =>
              <ItineraryItem
                key={item.id}
                item={item}
              />)
          }
        </article>
      </>
    )
  }
}

export default ItineraryItemList
