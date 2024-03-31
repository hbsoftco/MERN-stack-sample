interface InputProps {
  value: string;
  label?: string;
  id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  value,
  id,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col mb-2">
      {label && (
        <label htmlFor={id} className="text-sm mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        className="outline-none border border-gray-300 rounded-md p-2 mb-2 focus:border-gray-500 transition-all duration-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
