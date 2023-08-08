import React, { createContext, useState } from 'react';

const AuthDialogContext = createContext();

function AuthDialogProvider({ children }) {
  const [openSignInDialog, setOpenSignInDialog] = useState(false);
  const [openSignUpDialog, setOpenSignUpDialog] = useState(false);

  const handleOpenSignInDialog = () => {
    setOpenSignInDialog(true);
  };

  const handleCloseSignInDialog = () => {
    setOpenSignInDialog(false);
  };

  const handleOpenSignUpDialog = () => {
    setOpenSignUpDialog(true);
  };

  const handleCloseSignUpDialog = () => {
    setOpenSignUpDialog(false);
  };

  return (
    <AuthDialogContext.Provider
      value={{
        openSignInDialog,
        openSignUpDialog,
        handleOpenSignInDialog,
        handleCloseSignInDialog,
        handleOpenSignUpDialog,
        handleCloseSignUpDialog,
      }}
    >
      {children}
    </AuthDialogContext.Provider>
  );
}

export { AuthDialogContext, AuthDialogProvider };
