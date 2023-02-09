import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, currentUserData } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChangedListener((currentUser) => {
            if (currentUser) {
                setCurrentUser(currentUser);
            } else {
                setCurrentUser(null);
            }
        });
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async currentUser => {
            if (currentUser) {
                const datas = await currentUserData(currentUser);
                setCurrentUser({ uid: currentUser.uid, ...datas });
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

