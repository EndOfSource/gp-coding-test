import React from 'react'
import axios from 'axios'
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
    event.preventDefault();

    const payload = {
      name: this.state.name,
      zip_code: this.state.zip_code,
      address: {
        address_line_1: this.state.address_line_1,
        address_line_2: this.state.address_line_2,
        address_line_3: this.state.address_line_3,
      }
    }

    axios.post('/api/addresses', payload).then(console.log).catch(console.log)
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
