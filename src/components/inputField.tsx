import React, { FC, useState } from "react";
import colors from "../config/colors";

type InputFieldProps = {
  onChange: (value: string) => void;
  placeholder: string;
  secureTextEntry: string;
};

const InputField: FC<InputFieldProps> = ({
  onChange,
  placeholder,
  secureTextEntry,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder={placeholder}
        type={secureTextEntry}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  input: {
    display: "flex",
    backgroundColor: `${colors.white}`,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    width: "100%",
    outline: "none",
    fontSize: "16px",
    margin: "10px 0",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
};

export default InputField;
