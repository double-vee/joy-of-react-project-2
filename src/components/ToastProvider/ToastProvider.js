import { createContext, useState } from 'react';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function createToast(message, variant) {
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), message, variant },
    ]);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((item) => {
      return id !== item.id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
