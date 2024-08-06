import React, {useState} from "react";
import UserContext  from "./UserContext";

function UserProvider({children}) {
    const [user, setUser] = useState({
        name: "Rohit kumar",
        age: 20,
        isLoggedIn: true,
    });

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;