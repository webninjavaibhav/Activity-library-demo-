type InputProps = {
  name : string;
  type: string;
  value: string;
  label?: string;
  placeholder: string;
  handleInput: (e: React.BaseSyntheticEvent) => void;
};

const Input = ({
  value,
  handleInput,
  placeholder,
  label,
  type,
  name,
}: InputProps) => {
  return (
    <>
      {label && <span className="font-medium text-sm">{label}</span>}
      <input
        required
        name={name}
        type={type}
        className="items-center w-full border border-[#D4D4D7] p-2 rounded-[4px]"
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;
