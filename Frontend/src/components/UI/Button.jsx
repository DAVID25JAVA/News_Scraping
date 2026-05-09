// src/components/ui/Button.jsx

function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition duration-200 cursor-pointer font-medium ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;