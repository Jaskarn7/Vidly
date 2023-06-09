const Input = ({ name, value, label, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={ onChange }
        name={name}
        id={name}
        type="text"
        className="form-control"
      />
      { error && <div className="alert alert-danger">{ error }</div> }
    </div>
  );
};

export default Input;
