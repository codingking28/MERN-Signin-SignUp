import React from "react";
import { NavLink } from "react-router-dom";
import { SigninUser } from "../shared/API";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      Mail: "",
      Password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ Mail: event.target.value });
  };
  handleChangePass = (event) => {
    this.setState({ Password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      Mail: this.state.Mail,
      Password: this.state.Password,
    };

    SigninUser(user).then((res) => {
      this.setState({
        data: res,
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          Welcome {this.state.data.length != 0 && this.state.data[0].Name}
        </div>
        <div className="card w-50 mx-auto mt-4">
          <div className="card-header text-center">SIGNIN</div>
          <div className="card-body">
            <NavLink
              to="/signup"
              className="float-right btn btn-outline-primary"
            >
              Sign up
            </NavLink>
            <h4 className="card-title mb-4 mt-1">Choose us</h4>
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <div className="form-group">
                <label>Your email</label>
                <input
                  name="Email"
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  id="mail"
                />
              </div>
              <div className="form-group">
                <label>Your password</label>
                <input
                  className="form-control"
                  onChange={this.handleChangePass}
                  placeholder="******"
                  type="password"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  getData={this.getlog}
                >
                  {" "}
                  SignIn{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
