import React from 'react'
import axios from 'axios'
import Modal from './components/Modal';
import AddressForm from './components/AddressForm';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      address_line_1: null,
      address_line_2: null,
      address_line_3: null,
      zip_code: null,
      modal_show: false,
      modal_title: null,
      modal_text: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
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

    axios.post('/api/addresses', payload).then(() => {
      this.setState({ 
        modal_show: true, 
        modal_title: "Success", 
        modal_text: 'Record was successfully added to the database!'
      })
    }).catch(err => {
      this.setState({ 
        modal_show: true, 
        modal_title: "Error", 
        modal_text: err.message
      })
    })
  }

  onDismiss() {
    this.setState({ modal_show : false})
  }

  render() {
    return (
      <div class="container">
        <div class="card">
          <AddressForm data={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </div>
        <Modal onDismiss={this.onDismiss} visible={this.state.modal_show} title={this.state.modal_title} text={this.state.modal_text} />
      </div>
    );
  }
}

export default CustomerForm
