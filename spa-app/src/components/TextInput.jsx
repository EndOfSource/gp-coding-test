
const TextInput = ({ name, label, value, onChange}) => {
    return (
        <label>
        {label}:
        <input name={name} value={value} onChange={onChange} />
      </label>
    )
}

export default TextInput