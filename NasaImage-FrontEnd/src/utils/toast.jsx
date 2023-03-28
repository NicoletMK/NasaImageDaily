import { toast } from 'react-toastify';

export const successToaster = (message) => {
  toast.success(message, {
    theme: 'light',
    position: 'bottom-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
    
  });
};

export const errorToaster = (
  message,
  autoClose = 1500,
  closeOnClick = true
) => {
  toast.error(message, {
    position: 'bottom-right',
    autoClose: autoClose,
    hideProgressBar: true,
    closeOnClick: closeOnClick,
    theme: 'dark',
    draggable: true,
    progress: undefined,
    limit: 1
  });
};
