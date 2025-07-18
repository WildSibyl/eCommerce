const Input = ({
  name,
  value,
  onChange,
  maxLength,
  placeholder,
  validation,
  type = "text",
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      onChange(e); // Pass the change up to parent
    }
  };

  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="inputField mb-0 w-full"
      />
      {validation ? (
        <div className="flex flex-row justify-between">
          <div className="mt-1">{validation}</div>{" "}
          <p className="text-xs text-content-100 mt-1 text-right mb-4">
            {value.length} / {maxLength}
          </p>
        </div>
      ) : (
        <p className="text-xs text-content-100 mt-1 text-right mb-4">
          {value.length} / {maxLength}
        </p>
      )}
    </div>
  );
};

export default Input;
