import React, { Component } from "react"
import "./Login.css"
import { login } from "../helpers/simpleAuth";


class Login extends Component {

    state = {
      username: "",
      password: ""
    }

    handleInputChange = (evt) => {
      let stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (evt) => {
      evt.preventDefault()

      const credentials = {
        "username": this.state.username,
        "password": this.state.password
      }

      login(credentials)
      .then(() => {
        this.props.history.push("/")
      })
    }

    render() {
      return (
        <main style={{textAlign:"center"}}>
          <form className="form--login" onSubmit={this.handleLogin}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <fieldset>
              <label htmlFor="inputUsername"> Username </label>
              <input onChange={this.handleInputChange}
                type="username"
                id="username"
                className="form-control"
                placeholder="Username"
                required autoFocus />
            </fieldset>
            <fieldset>
              <label htmlFor="inputPassword"> Password </label>
              <input onChange={this.handleInputChange}
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
                required />
            </fieldset>
            <fieldset>
              <button type="submit">
                  Sign in
              </button>
            </fieldset>
          </form>
        </main>
    )
  }
}

export default Login
