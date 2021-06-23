import React, {useState} from 'react';

const themes = {
    dark: {
        background: '#1C2021',
        MuiTableCellBody: {
            color: '#F5D238',
        }
    },
    light: {
        background: 'white',
        color: '#F5D238',
    }
}

const ThemeContext = React.createContext();

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