const { default: AddressTextInput } = require("./AddressTextInput")
const { default: TextInput } = require("./TextInput")

const AddressForm = ({ data, onChange, onSubmit }) => {
    return (
        <form class="card-body" onSubmit={onSubmit}>
            <TextInput name="name" label="Name" value={data.name} onChange={onChange} />
            <AddressTextInput name="address_line" label="Address" value={data} onChange={onChange} />
            <TextInput name="zip_code" label="ZIP-Code" value={data.zip_code}onChange={onChange} />
            <input class="btn btn-primary" type="submit" value="Submit" />
        </form>
    )
}

export default AddressForm;