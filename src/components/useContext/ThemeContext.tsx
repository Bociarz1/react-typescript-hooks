import React, { createContext } from "react";
import {theme} from './theme'

export const ThemeContext = createContext(theme)
export const useThemeContext = () => useContext(ThemeContext)

type ThemeContextProviderType = {
  children: React.ReactNode
}

export function ThemeContextProvider({children}:ThemeContextProviderType) {
  return ( 
    <>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </>
   );
}

export default ThemeContextProvider;
