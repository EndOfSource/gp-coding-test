
const AddressTextInput = ({ name, label, value, onChange}) => {
  return (
    <div class="mb-3">
      <label>
        {label}
        <div class="mb-1">
          <input class="form-control" name={`${name}_1`} value={value[`${name}_1`]} onChange={onChange} />
        </div>
        <div class="mb-1">
          <input class="form-control" name={`${name}_2`} value={value[`${name}_2`]} onChange={onChange} />
        </div>
        <div class="mb-1">
          <input class="form-control" name={`${name}_3`} value={value[`${name}_3`]} onChange={onChange} />
        </div>
      </label>    
    </div>
  )
}

export default AddressTextInput