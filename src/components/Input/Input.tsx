import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface Props {
  customLabel: string;
  helperText: string;
  setOuterValue: (value: string[]) => void;
}

const Input: React.FC<Props> = ({ customLabel, helperText, setOuterValue }) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const splittedString = event.target.value.toString().replace(' ', '').split(',');
    setValue(event.target.value);
    setOuterValue(splittedString);
  };

  return (
    <TextField
      fullWidth
      type="text"
      label={customLabel}
      value={value}
      onChange={handleInputChange}
      onFocus={() => setTouched(true)}
      autoComplete="off"
      helperText={touched && helperText}
      color="secondary"
    />
  );
};

export default Input;
