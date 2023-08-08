import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  username: '',
  password: '',
  email: '',
  authenticated: false,
  loginAttemptFailed: false,
};

function AuthProvider({ children }) {
  const [credentials, setCredentials] = useState(initialState);

  useEffect(() => {
    const storedCredentials = localStorage.getItem('credentials');
    if (storedCredentials) {
      setCredentials(JSON.parse(storedCredentials));
    }
  }, []);

  const signIn = (username, password) => {
    if (credentials && credentials.username === username && credentials.password === password) {
      setCredentials({ ...credentials, loginAttemptFailed: false, authenticated: true });
      localStorage.setItem(
        'credentials',
        JSON.stringify({ ...credentials, loginAttemptFailed: false, authenticated: true })
      );
      return true;
    }

    setCredentials({ ...credentials, loginAttemptFailed: true, authenticated: false });
    localStorage.setItem(
      'credentials',
      JSON.stringify({ ...credentials, loginAttemptFailed: true, authenticated: false })
    );
    return false;
  };

  const signUp = (username, password, email) => {
    setCredentials({ username, password, email, loginAttemptFailed: false, authenticated: false });
    localStorage.setItem(
      'credentials',
      JSON.stringify({ username, password, email, loginAttemptFailed: false, authenticated: false })
    );
  };

  const signOut = () => {
    setCredentials({ ...credentials, authenticated: false });
    localStorage.setItem('credentials', JSON.stringify({ ...credentials, authenticated: false }));
  };

  return (
    <AuthContext.Provider value={{ credentials, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
