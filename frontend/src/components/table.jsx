import React, { Component } from "react";

class TableInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {this.props.getData.length > 0 ? (
              this.props.getData.map((data) => (
                <tr key={data._id}>
                  <td>{data.Name}</td>
                  <td>{data.Mail}</td>
                  <td>{data.Age}</td>
                  <td>{data.City}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.setData(data);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.deleteData(data);
                      }}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableInfo;
