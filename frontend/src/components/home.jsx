import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      editData: [],
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          TekShopy
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ml-2">
                <NavLink to="/">
                  <button type="button" className="btn btn-primary btn-block">
                    {" "}
                    ShopLog{" "}
                  </button>
                </NavLink>
              </li>
              <li className="nav-item ml-2">
                <NavLink to="/signin">
                  <button type="button" className="btn btn-primary btn-block">
                    {" "}
                    SignIn{" "}
                  </button>
                </NavLink>
              </li>
              <li className="nav-item ml-2">
                <NavLink to="/signup">
                  <button type="submit" className="btn btn-primary btn-block">
                    {" "}
                    SignUp{" "}
                  </button>
                </NavLink>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    );
  }
}
export default Home;
