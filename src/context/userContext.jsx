import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const userLocal = localStorage.getItem("smartcityhub");
    if (userLocal) {
      setUserInfo(userLocal);
    }
  }, []);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
