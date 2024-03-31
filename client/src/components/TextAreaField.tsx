import React from "react";

interface TextAreaProps {
  value: string;
  id: string;
  label?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaProps> = ({
  value,
  id,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        className="outline-none border border-gray-300 rounded-md p-2 mb-2 focus:border-gray-500 transition-all duration-200"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaField;
