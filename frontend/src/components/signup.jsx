import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CreateUser, EditUser } from "../shared/API";
import Swal from "sweetalert2";

class FormInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      isEdit: false,
      fields: {
        Name: "",
        Mail: "",
        Age: "",
        City: "",
        Password: "",
      },
      errors: {
        Name: "",
        Mail: "",
        Age: "",
        City: "",
        Password: "",
      },
    };
  }
  // infoChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  handleUserInput = (e) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value),
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  };
  validate = (name, value) => {
    const { fields } = this.state;
    switch (name) {
      case "Name":
        if (!value || value.trim() === "") {
          return "Name is Required";
        } else {
          return "";
        }
      case "Mail":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "Age":
        if (!value || value == 0) {
          return "Age is Required";
        } else if (isNaN(value)) {
          return "Enter a valid Age";
        } else if (value > 100 || value < 18) {
          return "Enter a valid Age";
        } else {
          return "";
        }
      case "City":
        if (!value || value.trim() === "") {
          return "City is Required";
        } else {
          return "";
        }
      case "Password":
        if (!value) {
          return "Password is Required";
        } else if (value.length < 5 || value.length > 12) {
          return "Please fill at least 5 character";
        } else if (!value.match(/[a-z]/g)) {
          return "Please enter at least lower character.";
        } else if (!value.match(/[A-Z]/g)) {
          return "Please enter at least upper character.";
        } else if (!value.match(/[0-9]/g)) {
          return "Please enter at least one digit.";
        } else {
          return "";
        }
      default:
        return "";
    }
  };
  infoSubmit = (event) => {
    const { fields } = this.state;
    event.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }

    if (!this.state.isEdit) {
      let data = {
        isEdit: this.state.isEdit,
        ...fields,
      };
      CreateUser(data).then((res) => {
        Swal.fire({
          closeOnClickOutside: false,
          title: "Success",
          text: "User Registered Successfully",
          icon: "success",
        });
      });
    } else {
      let data = {
        isEdit: this.state.isEdit,
        _id: this.state._id,
        ...fields,
      };
      EditUser(data).then((res) => {
        Swal.fire({
          closeOnClickOutside: false,
          title: "Success",
          text: "Modified Successfully",
          icon: "success",
        });
      });
    }
  };

  componentWillReceiveProps(props) {
    console.log(props.setForm.Age);
    if (props.setForm._id != null) {
      this.setState({
        isEdit: true,
        _id: props.setForm._id,
        fields: {
          Name: props.setForm.Name,
          Mail: props.setForm.Mail,
          City: props.setForm.City,
          Age: props.setForm.Age,
          Password: props.setForm.Password,
        },
      });
    }
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <div className="card w-50 mx-auto mt-4">
        <div className="card-header text-center">
          {this.state.isEdit ? "MODIFY" : "SIGNUP"}
        </div>
        <div className="card-body">
          <form onSubmit={this.infoSubmit} autoComplete="off">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="Name"
                value={fields.Name}
                onChange={(event) => this.handleUserInput(event)}
              />
              <div>
                <span className="text-danger">{errors.Name}</span>
              </div>
            </div>
            <div className="form-group">
              <label>E-Mail</label>
              <input
                type="email"
                className="form-control"
                id="name"
                placeholder="Enter E-Mail Id"
                name="Mail"
                value={fields.Mail}
                onChange={(event) => this.handleUserInput(event)}
              />
              <div>
                <span className="text-danger">{errors.Mail}</span>
              </div>
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter Age"
                name="Age"
                value={fields.Age}
                onChange={(event) => this.handleUserInput(event)}
              />
              <div>
                <span className="text-danger">{errors.Age}</span>
              </div>
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter City"
                name="City"
                value={fields.City}
                onChange={(event) => this.handleUserInput(event)}
              />
              <div>
                <span className="text-danger">{errors.City}</span>
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                name="Password"
                value={fields.Password}
                onChange={(event) => this.handleUserInput(event)}
              />
              <div>
                <span className="text-danger">{errors.Password}</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {this.state.isEdit ? "Update" : "Create"}
            </button>
            <NavLink
              to="/signin"
              className="float-right btn btn-outline-primary"
            >
              Sign In
            </NavLink>
          </form>
        </div>
      </div>
    );
  }
}
export default FormInfo;
