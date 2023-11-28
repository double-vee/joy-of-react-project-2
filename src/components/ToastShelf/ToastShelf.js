import { useContext } from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((item) => {
        return (
          <li key={item.id} className={styles.toastWrapper}>
            <Toast id={item.id} variant={item.variant}>
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
