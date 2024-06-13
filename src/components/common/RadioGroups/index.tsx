import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

type RadioGroupProps = {
  label: string;
  value: string | number | boolean;
  name: string;
  options: { value: string | boolean; label: string }[];
  handleChange: (e: React.BaseSyntheticEvent) => void;
};


const RadioGroups: React.FC<RadioGroupProps> = ({
  label,
  value,
  name,
  options,
  handleChange,
}) => {
  return (
    <FormControl>
      <div id={`${name}-label`} className="font-bold text-sm">
        {label}
      </div>
      <RadioGroup
        aria-labelledby={`${name}-label`}
        value={value}
        name={name}
        onChange={handleChange}
      >
        {options.map((option , index) => (
          <FormControlLabel
            sx={{
              fontSize: "10px",
            }}
            key={index}
            value={option.value}
            control={
              <Radio
                size="small"
                style={{ height: "30px", width: "24px", marginLeft: "10px" }}
              />
            }
            label={<span className=" font-light text-sm">{option.label}</span>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroups;
