import React, { Component } from "react"

class Area extends Component {

  render() {
    return (
      <>
        <section className="parkArea">
        <button className="fakeLink parkArea__link"
            onClick={() => this.props.getAttractions(this.props.area.id)}>
            {this.props.area.name}
          </button>
        </section>
      </>
    )
  }
}

export default Area
