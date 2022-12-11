import { createContext, useState } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [{user: {email, password}}, setUser] = useState(null);

  const signIn = (user, callback) => {
    setUser(user);
    callback();
  };

  const signOut = (callback) => {
    setUser(null);
    callback();
  }

  const value = {email, password, signIn, signOut};

  return <AuthContext.Provider value={value} >
            {children}
          </AuthContext.Provider>
}

export  { AuthProvider, AuthContext };
