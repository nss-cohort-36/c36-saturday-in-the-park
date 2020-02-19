import React, { Component } from "react"
import { Link } from "react-router-dom"

class ItineraryItem extends Component {

  render() {
    return (
      <>
        <section className="itineraryItem">
          <p>
            <span>
              {this.props.item.attraction.name} at {this.props.item.starttime}
              <Link className="nav-link" to={`/myitinerary/${this.props.item.id}/edit`}>Edit</Link>
            </span>
          </p>
        </section>
      </>
    )
  }
}

export default ItineraryItem
