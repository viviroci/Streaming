import { useEffect } from 'react';

const useCustomEffect = (callback, dependencies) => {
  useEffect(callback, dependencies);
};

export default useCustomEffect;
