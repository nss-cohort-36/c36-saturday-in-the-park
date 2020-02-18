import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { register } from "../helpers/simpleAuth" 

class Register extends Component {

  state = {
    email: "",
    userName: "",
    lastName: "",
    password: "",
    firstName: "",
    familyMembers: 0,
    verifyPassword: ""
  }

  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = event => {
    event.preventDefault()

    // Create object with values from state
    const newUser = {
      "username": this.state.userName,
      "first_name": this.state.firstName,
      "last_name": this.state.lastName,
      "family_members": Number(this.state.familyMembers),
      "email": this.state.email,
      "password": this.state.password
    }

    // Make a fetch call with the object as the body of the POST request
    register(newUser)
    .then(() => this.props.history.push("/"))
  }

  render() {
    return (
      <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={this.handleRegister}>
          <h1 className="h3 mb-3 font-weight-normal">Register to use Saturday in the Park</h1>
          <fieldset>
            <label htmlFor="userName"> Username </label>
            <input onChange={(evt) => this.handleInputChange(evt)}
              id="userName"
              type="text"
              name="userName"
              className="form-control"
              placeholder="Username"
              required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="firstName"> First Name </label>
            <input onChange={this.handleInputChange}
              id="firstName"
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName"> Last Name </label>
            <input onChange={this.handleInputChange}
              id="lastName"
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input onChange={this.handleInputChange}
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputEmail"> Family members </label>
            <input onChange={this.handleInputChange}
              id="familyMembers"
              type="number"
              name="familyMembers"
              className="form-control"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input onChange={this.handleInputChange}
              id="password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="verifyPassword"> Verify Password </label>
            <input onChange={this.handleInputChange}
              id="verifyPassword"
              type="password"
              name="verifyPassword"
              className="form-control"
              placeholder="Verify password"
              required />
          </fieldset>
          <fieldset>
            <button type="submit">
              Register
            </button>
          </fieldset>
        </form>
      </main>
    )
  }
}

export default Register
