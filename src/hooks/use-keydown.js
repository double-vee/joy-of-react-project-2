import { useEffect } from 'react';

function useKeydown(key, callback) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === key) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
}

export default useKeydown;
