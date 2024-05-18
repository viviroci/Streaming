import { useState } from 'react';

const useCustomState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
};

export default useCustomState;
