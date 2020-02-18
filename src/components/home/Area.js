import React, { Component } from "react"

class Area extends Component {

  render() {
    return (
      <>
        <section className="parkArea">
          <p>
            {this.props.area.name}
          </p>
        </section>
      </>
    )
  }
}

export default Area
