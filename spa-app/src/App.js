import React from 'react'
import axios from 'axios'
import './App.css';
import TextInput from './components/TextInput';
import AddressTextInput from './components/AddressTextInput';

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
        <TextInput name="name" label="Name" value={this.state.name} onChange={this.handleChange} />
        <AddressTextInput name="address_line" label="Address" value={this.state} onChange={this.handleChange} />
        <TextInput name="zip_code" label="ZIP-Code" value={this.state.zip_code}onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CustomerForm
