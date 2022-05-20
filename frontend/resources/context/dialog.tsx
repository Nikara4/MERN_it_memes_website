import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

const DialogContext = createContext(null);

export function DialogProvider({ children }: any) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const closeDialog = () => {
    setOpen((prevOpen: any) => !prevOpen);
    router.push('/');
  };

  const state = {
    open,
    setOpen,
    closeDialog,
  };

  return (
    <DialogContext.Provider value={state}>{children}</DialogContext.Provider>
  );
}

export function useDialogState() {
  const state = useContext(DialogContext);

  if (state === undefined) {
    throw new Error('useDialogState must be used within a DialogProvider');
  }

  return state;
}
