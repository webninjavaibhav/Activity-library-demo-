import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

type RadioGroupProps = {
  label: string;
  value: string;
  name: string;
  options: { value: string; label: string }[];
  handleChange: (e: React.BaseSyntheticEvent) => void;
};

type OptionProp = {
  value: string | number;
  label: string;
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
        {options.map((option: OptionProp) => (
          <FormControlLabel
            sx={{
              fontSize: "10px",
            }}
            key={option.value}
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
