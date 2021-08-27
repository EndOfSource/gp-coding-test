import React from 'react'
import './App.css';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      address_line_1: null,
      address_line_2: null,
      address_line_3: null,
      zip_code: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Address:
          <input name="address_line_1" value={this.state.address_line_1} onChange={this.handleChange} />
          <input name="address_line_2" value={this.state.address_line_2} onChange={this.handleChange} />
          <input name="address_line_3" value={this.state.address_line_3} onChange={this.handleChange} />
        </label>
        <label>
          ZIP-Code:
          <input name="zip_code" value={this.state.zip_code} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CustomerForm
