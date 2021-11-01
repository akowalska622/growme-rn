import { useState } from 'react';

type UseInputType = (
  initialValue: string,
) => [
  value: string,
  handleValue: (text: string) => void,
  setValue: (value: string) => void,
];

export const useInput: UseInputType = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValue = (text: string) => setValue(text);

  return [value, handleValue, setValue];
};
