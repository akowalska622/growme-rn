import { useState } from 'react';

export const useToggle = (): [boolean, () => void] => {
  const [value, setValue] = useState(false);

  const toggleValue = () => setValue((prevState) => !prevState);

  return [value, toggleValue];
};
