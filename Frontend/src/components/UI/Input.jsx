// src/components/ui/Input.jsx

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  className = "",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border border-gray-300 bg-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-black transition ${className}`}
    />
  );
}

export default Input;