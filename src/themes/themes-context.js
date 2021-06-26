import React, {useState} from 'react';

const themes = {
    dark: {
        background: '#333333',
        color: '#FFFFFF',
        overrides: {
            MuiTableCellBody: {
              root: {
                color: 'white',
              },
            },
          },
    },
    light: {
        background: 'white',
        color: 'yellow',
    }
}

const ThemeContext = React.createContext(themes.dark);

const ThemeProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
    return (
        <ThemeContext.Provider value={{toggle, toggleFunction}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider, themes};