import React, { createContext } from "react";
import {theme} from './theme'

export const ThemeContext = createContext(theme)

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