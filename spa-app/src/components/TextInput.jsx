
const TextInput = ({ name, label, value, onChange}) => {
    return (
      <div class="mb-3">
        <label class="form-label">
          {label}:
          <input class="form-control" name={name} value={value} onChange={onChange} />
        </label>
      </div>
    )
}

export default TextInput