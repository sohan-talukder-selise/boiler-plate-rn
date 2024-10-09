import {useEffect, useRef} from 'react';

const useDelayHook = (
  callback: any,
  array: Array<any> = [],
  duration: number = 1000,
) => {
  const timer = useRef<any>();
  useEffect(() => {
    timer.current = setTimeout(() => {
      callback();
    }, duration);

    return () => {
      clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, array);
  return null;
};

export default useDelayHook;
