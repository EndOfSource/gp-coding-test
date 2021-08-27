
const AddressTextInput = ({ name, label, value, onChange}) => {
  return (
    <label>
      {label}
      <input name={`${name}_1`} value={value[`${name}_1`]} onChange={onChange} />
      <input name={`${name}_2`} value={value[`${name}_2`]} onChange={onChange} />
      <input name={`${name}_3`} value={value[`${name}_3`]} onChange={onChange} />
    </label>    
  )
}

export default AddressTextInput