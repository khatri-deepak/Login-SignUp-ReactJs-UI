import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Mobile No.</label>
          <input type="text" className="form-control form-control-sm" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Address"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control form-control-sm"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control form-control-sm"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
