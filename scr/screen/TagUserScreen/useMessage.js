import { useEffect, useState } from 'react';

const useMessage = () => {
  const [message, setMessage] = useState('');
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setcounter((prevCounter) => prevCounter - 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
        setMessage('');
    }
  }, [counter]);

  return {
    message,
    setMessage,
    counter,
    setcounter,
  };
};

export default useMessage;
