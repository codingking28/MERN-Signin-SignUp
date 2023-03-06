import React from "react";
import FormInfo from "./signup";
import TableInfo from "./table";
import { DeleteUser, FetchAllUser } from "../shared/API";
import Swal from "sweetalert2";

class ShopLog extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      editData: [],
    };
  }
  componentDidMount() {
    this.getAll();
  }
  getAll() {
    FetchAllUser().then((res) => {
      this.setState({
        data: res,
      });
    });
  }

  update = (data) => {
    // console.log(data);
    this.setState({
      editData: data,
    });
  };

  mydel = (data) => {
    var option = window.confirm(`Are you sure wanna delete ${data.Name}`);
    if (option) {
      DeleteUser(data._id).then((res) => {
        console.log(res);
        Swal.fire({
          closeOnClickOutside: false,
          title: "Success",
          text: res.message,
          icon: "success",
        }).then(() => this.getAll());
      });
    }
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <FormInfo
              // myData={() => this.create()}
              setForm={this.state.editData}
            />
          </div>
          <div className="col-6">
            <TableInfo
              getData={this.state.data}
              setData={this.update}
              deleteData={this.mydel}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ShopLog;
