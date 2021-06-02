import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateHackathon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      reviews: [],
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/hackathons/" + this.props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, hackathon: res.data})
        this.setState({
          name: res.data.name,
          description: res.data.description,
          reviews: res.data.reviews,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateHackathon");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      description: this.state.description,
      reviews: this.state.reviews,
    };

    axios
      .put(
        "http://localhost:8082/api/hackathons/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/hackathon/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateHackathon!");
      });
  };

  render() {
    return (
      <div>
        <div className="UpdateHackathon">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                  Show Hackathon List
                </Link>
              </div>
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Edit Hackathon</h1>
                <p className="lead text-center">Update Hackathon's Info</p>
              </div>
            </div>

            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Name</label>
                  <input
                    type="text"
                    placeholder="Hackathon Name"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    placeholder="Hackathon Description"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-info btn-lg btn-block"
                >
                  Update Hackathon
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateHackathon;
