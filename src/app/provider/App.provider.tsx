import React, {createContext, useContext} from 'react';

const AppContext = createContext<any>(null);

const AppProvider: React.FC<any> = ({children}) => {
  /* logout, splash screen */
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
const useAppProvider = () => {
  return useContext(AppContext);
};
export {AppProvider, useAppProvider};
