import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { addDialog } from '../../state/actions/dialog';

const DialogContext = createContext(null);

export function DialogProvider({ children }: any) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addDialog({
        message: '',
        severity: 'success',
      })
    );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

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
