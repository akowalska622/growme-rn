import { useState } from 'react';

export const useShowSecret = () => {
  const [showSecret, setShowSecret] = useState(false);

  const toggleSecret = () => setShowSecret((prevState) => !prevState);

  return { showSecret, toggleSecret };
};
