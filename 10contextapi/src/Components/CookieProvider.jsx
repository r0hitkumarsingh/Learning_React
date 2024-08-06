import React, {useState} from 'react';
import {CookieContext} from './CookieContext';

function CookieProvider({children}) {
    const [cookie, setCookie] = useState(["Chocolate Chip", "OetMeal", "Candy"])

    return (
        <CookieContext.Provider value={{cookie, setCookie}}>
            {children}
        </CookieContext.Provider>
    )
}

export default CookieProvider