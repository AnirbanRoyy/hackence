import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState("");
    return (
        <UserContext.Provider value={{ user, setUser, tokens, setTokens }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
