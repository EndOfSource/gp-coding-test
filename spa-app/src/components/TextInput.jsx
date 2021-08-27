
const TextInput = ({ name, label, value, onChange}) => {
    return (
        <label class="form-label">
        {label}:
        <input class="form-control" name={name} value={value} onChange={onChange} />
      </label>
    )
}

export default TextInput