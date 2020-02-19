import React from "react"
import Attraction from "./Attraction"
// import "./Attractions.css"

// Hey, what's this? Where's the class? This is an example we've thrown in of a stateless component. You can actually make React components as functions like this when it has no state of its own. Try writing it as the class-based component you're used to. What needs to be changed?
const AttractionList = props => {
  return (
    <>
      <article className="explorerList">
        {
          props.attractions.map(ride =>
            <Attraction key={ride.id} ride={ride} {...props} />)
        }
      </article>
    </>
  )
}

export default AttractionList
