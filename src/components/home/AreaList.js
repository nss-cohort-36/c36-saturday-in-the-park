import React, { Component } from "react"
import Area from "./Area"
import "./AreaList.css"

class AreaList extends Component {

  render() {
    return (
      <>
        <article className="explorerList">
          {
            this.props.areas.map(area =>
              <Area
                key={area.id}                
                area={area}
                getAttractions={this.props.getAttractions}
              />)
          }
        </article>
      </>
    )
  }
}

export default AreaList
